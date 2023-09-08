export const actions = [
  //#region Occultist
  {
    id: "warp",
    fullName: "Warp",
    firstPerson:
      /^You reach out and clench a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) reaches out and clenches a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: ["damage"],
    length: 3.0,
  },
  {
    id: "priestess",
    fullName: "Priestess",
    firstPerson:
      /Raising the High Priestess tarot over your head, parallel to the ground, you release it. It instantly expands and moves downward, healing you as your body passes through it\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) raises a tarot over \w+ head, parallel to the ground. Upon releasing it, it instantly expands and moves downward until \w+ entire body has been passed through it\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: ["heal"],
    length: 3.0,
  },
  {
    id: "harry",
    fullName: "Harry",
    firstPerson:
      /^Raising your hands in the air, you summon horrific visions to torment (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "harryTick",
    fullName: "Harry tick",
    firstPerson:
      /^(?<target>.+?) is tormented by horrific visions from the Plane of Chaos\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "chaosgate",
    fullName: "Chaosgate",
    firstPerson:
      /^You cup your hands together and fling them outwards, sending a spiral of shimmering portals into (?<target>.+?)'s body\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "stagnate",
    fullName: "Stagnate",
    firstPerson:
      /^You wave one arm at (?<target>.+?), causing a small time rift to form around her\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  //#endregion
  //#region Dragon
  {
    id: "gut",
    fullName: "Gut",
    firstPerson:
      /^You rip into (?<target>.+?) with your massive, deadly claws\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) rips into (?<target>.+?) with \w+ massive, deadly claws\.$/,
    profession: ["dragon"],
    skill: "dragoncraft",
    balance: "balance",
    tags: [],
    length: 3.0,
  },
  {
    id: "incantation",
    fullName: "Incantation",
    firstPerson:
      /^Drawing from the well of your puissance, you invoke a dramatic chant in the dragon tongue\. Your voice resonates with each word, culminating in a wave of magical energy that you bend to your will and thrust towards (?<target>.+), bombarding \w+ with the ancient power\.$/,
    secondPerson: false,
    thirdPerson:
      /^A resonant vibration emanates from (?<user>\w+) as \w+ invokes a rumbling, sonorous chant in the dragon tongue\. As the sound increases, (?<target>.+?) jerks violently, \w+ body wracked by an unseen force\.$/,
    profession: ["dragon"],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: [],
    length: 3.0,
  },
  {
    id: "glaciate",
    fullName: "Glaciate",
    firstPerson:
      /^You breathe a column of icy air at (?<target>.+?)'s head, stunning \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage", "stun"],
    length: 3.0,
  },
  {
    id: "frostrive",
    fullName: "Frostrive",
    firstPerson:
      /^(?<target>.+?)'s translucent shield cracks and fades away as you breathe an icy blast at it\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "override",
    fullName: "Override",
    firstPerson:
      /^You barrel into (?<target>.+?) and knock \w+ to the ground before stomping over \w+ prone form\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "tailsmash",
    fullName: "Tailsmash",
    firstPerson:
      /^You flick your tail at (?<target>.+?), dismissively brushing aside the paltry shield protecting \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "ague",
    fullName: "Ague",
    firstPerson:
      /^You let loose a steady stream of cold air around (?<target>.+?), who begins to shiver uncontrollably\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "dragonchill",
    fullName: "Dragonchill",
    firstPerson:
      /^You form small chunks of ice in your enormous maw, then spit them at (?<target>.+?) in a barrage\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "frostwave",
    fullName: "Frostwave",
    firstPerson: /^You breathe a wave of icy air at (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "corrode",
    fullName: "Corrode",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) opens \w+ gigantic maw and spews acid on (?<target>.+?)\. \w+ is too clumsy to dodge and is covered in the corrosive slime\.$/,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "dragonblaze",
    fullName: "Dragonblaze",
    firstPerson:
      /^You breathe a long torrent of flame at (?<target>.+?), igniting \w+ skin\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "dragonblazeTick",
    fullName: "Dragonblaze tick",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<target>.+?) is wracked with pain as the flames of dragonbreath wreathe over \w+ skin\.$/,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "scorch",
    fullName: "Scorch",
    firstPerson:
      /^You blacken (?<target>.+?)'s flesh with a quick blast of flame, slowing \w+ healing process\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "overwhelm",
    fullName: "Overwhelm",
    firstPerson:
      /^You charge quickly at (?<target>.+?), throwing your mighty form into \w+ and sending \w+ staggering back\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "dragontaunt",
    fullName: "Dragontaunt",
    firstPerson:
      /^You slap your tail on the ground while growling at (?<target>.+?), forcing \w+ to recklessly attack\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "flamebath",
    fullName: "Flamebath",
    firstPerson:
      /^You blast (?<target>.+?) with a bath of flame, but \w+ is able to avoid the brunt of the blast\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "melt",
    fullName: "Melt",
    firstPerson:
      /^You breathe a white-hot blast of flame at (?<target>.+?) and burn away \w+ translucent shield\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["dragon"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  //#endregion
  //#region Pariah
  {
    id: "serpent",
    fullName: "Epitaph Serpent",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a writhing logograph in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "skein",
    fullName: "Epitaph Skein",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph shaped like a skein in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "sun",
    fullName: "Epitaph Sun",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph shaped like a sunburst in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "fissure",
    fullName: "Epitaph Fissure",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Crimson fire trails the knife of (?<user>\w+) as \w+ slashes \w+ knife through the air before (?<target>.+?), a jagged logograph hanging in its passing\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 1,
    tags: ["raze"],
    length: 2.2,
  },
  //#endregion
  //#region Depthswalker
  {
    id: "reap",
    fullName: "Reap",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>.+?) lashes out with a swift, reaping blow at (?<target>.+?)\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "instillleach",
    fullName: "Instill - Leach",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^As the weapon strikes (?<target>.+?), he seems greatly diminished\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  //#endregion
  //#region Psion
  {
    id: "overhand",
    fullName: "Overhand",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>.+?) brings a translucent mace around in a savage overhand strike, smashing it into the head of (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    multiLine: 1,
    tags: [], // parasite > healthleach > manaleach
    length: 2.2,
  },
  {
    id: "deathblow",
    fullName: "Deathblow",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Almost too swift to perceive, (?<user>.+?) lashes out with a translucent dagger, tracing a bloody line across the throat of (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    multiLine: 1,
    tags: ["asthma", "bleeding"], // parasite > healthleach > manaleach
    length: 2.2,
  },
  //#endregion
];
