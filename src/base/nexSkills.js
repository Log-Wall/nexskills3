/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";

import { actions as depthswalker } from "./professions/depthswalker";
import { actions as dragon } from "./professions/dragon";
import { actions as infernal } from "./professions/infernal";
import { actions as jester } from "./professions/jester";
import { actions as occultist } from "./professions/occultist";
import { actions as pariah } from "./professions/pariah";
import { actions as priest } from "./professions/priest";
import { actions as psion } from "./professions/psion";
import { actions as runewarden } from "./professions/runewarden";
import { actions as weaponmastery } from "./professions/weaponmastery";

import { actions as tattoos } from "./general/tattoos";
import { actions as curing } from "./general/curing";
import { actions as general } from "./general/general";

import { npcs as battlesite } from "./areas/battlesite";
import { npcs as judgementMountain } from "./areas/judgementMountain";
import { npcs as grukaiSwamp } from "./areas/grukaiSwamp";
import { npcs as istarion } from "./areas/istarion";
import { npcs as nur } from "./areas/nur";
import { npcs as riagath } from "./areas/riagath";
import { npcs as tirMuran } from "./areas/tirMuran";
import { npcs as tuar } from "./areas/tuar";
import { npcs as yggdrasil } from "./areas/yggdrasil";

const npcs = [
  ...battlesite,
  ...judgementMountain,
  ...grukaiSwamp,
  ...istarion,
  ...nur,
  ...riagath,
  ...tirMuran,
  ...tuar,
  ...yggdrasil,
];

const actions = [
  ...depthswalker,
  ...dragon,
  ...infernal,
  ...jester,
  ...occultist,
  ...pariah,
  ...priest,
  ...psion,
  ...runewarden,
  ...weaponmastery,

  ...tattoos,
  ...curing,
  ...general,
];

export const classList = [
  "Alchemist",
  "Apostate",
  "Bard",
  "Blademaster",
  "Depthswalker",
  "Dragon",
  "Druid",
  "Infernal",
  "Jester",
  "Magi",
  "Monk",
  "Occultist",
  "Paladin",
  "Pariah",
  "Priest",
  "Psion",
  "Runewarden",
  "Sentinel",
  "Serpent",
  "Shaman",
  "Sylvan",
  "Unnamable",
  "Air elemental lord",
  "Earth elemental lord",
  "Fire elemental lord",
  "Water elemental lord",
];

//You can use another Battlerage ability again. Available abilities: Overwhelm
//You can use Dragonblaze again.
//The flames of dragonbreath fade from a fortress guardsman's skin.
//A knight of the Siroccian Order's blackened flesh slowly knits together.

const checkSkillsOld = (line) => {
  const text = line;
  let result = false;

  for (let i = 0; i < actions.length; i++) {
    const element = actions[i];
    const checks = [];
    if (
      element.profession === GMCP.Char.Status.class.toLowerCase() ||
      GMCP.Char.Status.class.toLowerCase().indexOf(element.profession) > -1
    ) {
      checks.push(element.firstPerson);
    }
    checks.push(element.secondPerson, element.thirdPerson);

    for (const check of checks) {
      result = text.match(check);
      if (result) {
        break;
      }
    }

    if (result) {
      result.groups.action = element.id;
      eventStream.raiseEvent("nexSkillMatch", {
        matches: result,
        action: element,
      });
      break;
    }
  }

  return result ? result : false;
};

const checkSkills = (text) => {
  let result = false;
  let action = false;

  for (let i = 0; i < actions.length; i++) {
    action = actions[i];
    if (
      action.profession.includes(GMCP.Char.Status.class.toLowerCase()) ||
      action.profession.includes("general")
    ) {
      result = text.match(action.firstPerson);
      if (result) {
        action.user = "self";
        action.target = result.groups.target || false;
        action.info = result.groups.info || false;
        break;
      }
    }

    result = text.match(action.secondPerson);
    if (result) {
      action.user = result.groups.user;
      action.target = "self";
      action.info = result.groups.info || false;
      break;
    }

    result = text.match(action.thirdPerson);
    if (result) {
      action.user = result.groups.user;
      action.target = result.groups.target || false;
      action.info = result.groups.info || false;
      break;
    }
  }

  if (result) {
    action.args = result;
    if (action.reaction) {
      action.reaction(action);
    }
    eventStream.raiseEvent("nexSkillMatch", action);
  }

  if (!result) {
    return checkNpcs(text);
  }
  //return result;
  return action;
};

const checkNpcs = (text) => {
  let result = false;
  let action = false;

  const areaNpcs = npcs.filter((e) => e.areaId.includes(GMCP.Location.areaid));
  if (areaNpcs.length === 0) {
    return false;
  }

  for (let i = 0; i < areaNpcs.length; i++) {
    action = areaNpcs[i];

    result = text.match(action.firstPerson);
    if (result) {
      action.target = "self";
      if (result.groups?.user) {
        action.user = result.groups.user;
      }
      break;
    }

    result = text.match(action.thirdPerson);
    if (result) {
      action.target = result.groups.target;
      break;
    }
  }

  if (result) {
    action.args = result;
    eventStream.raiseEvent("nexSkillNpcMatch", action);
  }

  return result ? result : false;
};

export const nexSkills = {
  actions: actions,
  npcs: npcs,

  checkSkills: checkSkills,
  checkNpcs: checkNpcs,
  startUp: startUp,
};

globalThis.nexSkills = nexSkills;
