/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";
//Professions
import { depthswalker } from "./professions/depthswalker";
import { dragon } from "./professions/dragon";
import { infernal } from "./professions/infernal";
import { jester } from "./professions/jester";
import { occultist } from "./professions/occultist";
import { pariah } from "./professions/pariah";
import { priest } from "./professions/priest";
import { psion } from "./professions/psion";
import { runewarden } from "./professions/runewarden";
import { serpent } from "./professions/serpent";
import { shaman } from "./professions/shaman";
import { sylvan } from "./professions/sylvan";
//Skills
import { aeonics } from "./skills/aeonics";
import domination from "./skills/domination";
import { harmonics } from "./skills/harmonics";
import { ignition } from "./skills/ignition";
import { occultism } from "./skills/occultism";
import { propagation } from "./skills/propagation";
import { shadowmancy } from "./skills/shadowmancy";
import { swashbuckling } from "./skills/swashbuckling";
import { tarot } from "./skills/tarot";
import { tekura } from "./skills/tekura";
import { voicecraft } from "./skills/voicecraft";
import { weaponmastery } from "./skills/weaponmastery";
import { weatherweaving } from "./skills/weatherweaving";
import { weaving } from "./skills/weaving";
//General
import { curing } from "./general/curing";
import { general } from "./general/general";
import { tattoos } from "./general/tattoos";
//NPCS
import { barrow } from "./areas/barrow";
import { npcs as battlesite } from "./areas/battlesite";
import { npcs as grukaiSwamp } from "./areas/grukaiSwamp";
import { npcs as istarion } from "./areas/istarion";
import { npcs as judgementMountain } from "./areas/judgementMountain";
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
  ...barrow,
];

const npcsMap = new Map();
npcs.forEach((npc) => {
  npc.areaId.forEach((areaId) => {
    if (!npcsMap.has(areaId)) {
      npcsMap.set(areaId, []);
    }
    npcsMap.get(areaId).push(npc);
  });
});

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
  ...serpent,
  ...shaman,
  ...sylvan,

  ...aeonics,
  ...domination,
  ...harmonics,
  ...ignition,
  ...occultism,
  ...propagation,
  ...shadowmancy,
  ...swashbuckling,
  ...tarot,
  ...tekura,
  ...voicecraft,
  ...weaponmastery,
  ...weatherweaving,
  ...weaving,

  ...curing,
  ...general,
  ...tattoos,
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

const checkSkills = (text) => {
  let result = false;
  let action = false;
  const profession = GMCP.Char.Status.class.toLowerCase();

  for (let i = 0; i < actions.length; i++) {
    action = actions[i];
    if (
      action.profession.includes(profession) ||
      action.profession.includes("general")
    ) {
      result = action.firstPerson ? text.match(action.firstPerson) : false;
      if (result) {
        action.user = "self";
        action.target = "";
        action.match = "firstPerson";
        if (result.groups) {
          action.target = result.groups.target;
          action.info = result.groups.info || false;
        }
        if (action.target.toLowerCase() === "you") {
          action.target = "self";
        }
        break;
      }
    }

    result = action.secondPerson ? text.match(action.secondPerson) : false;
    if (result) {
      action.target = "self";
      action.match = "secondPerson";
      if (result.groups) {
        action.user = result.groups.user || "";
        action.info = result.groups.info || false;
      }
      break;
    }

    result = action.thirdPerson ? text.match(action.thirdPerson) : false;
    if (result) {
      action.user = result.groups.user || "";
      action.target = result.groups.target || "";
      action.info = result.groups.info || false;
      action.match = "thirdPerson";
      break;
    }
  }

  if (result) {
    action.args = result;
    if (action.reaction) {
      action.reaction(action);
    }

    eventStream.raiseEvent("nexSkillMatch", action);
    eventStream.raiseEvent(`nexSkillMatch${action.id}`, action);
  } else {
    return checkNpcs(text);
  }

  return result ? action : false;
};

const checkNpcs = (text) => {
  const areaId = GMCP.Location.areaid;
  const areaNpcs = npcsMap.get(areaId) || [];
  let result = false;
  let action = false;

  if (areaNpcs.length === 0) {
    return false;
  }

  for (let i = 0; i < areaNpcs.length; i++) {
    action = areaNpcs[i];

    result = action.firstPerson ? text.match(action.firstPerson) : false;
    if (result) {
      action.target = "self";
      if (result.groups?.user) {
        action.user = result.groups.user;
      }
      break;
    }

    result = action.thirdPerson ? text.match(action.thirdPerson) : false;
    if (result) {
      action.target = result.groups.target;
      break;
    }
  }

  if (result) {
    action.args = result;
    eventStream.raiseEvent("nexSkillNpcMatch", action);
  }

  return result ? action : false;
};

export const nexSkills = {
  actions: actions,
  npcs: npcs,

  checkSkills: checkSkills,
  checkNpcs: checkNpcs,
  startUp: startUp,
};

globalThis.nexSkills = nexSkills;
