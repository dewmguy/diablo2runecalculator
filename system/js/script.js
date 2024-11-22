const runeArray = ['null','el','eld','tir','nef','eth','ith','tal','ral','ort','thul','amn','sol','shael','dol','hel','io','lum','ko','fal','lem','pul','um','mal','ist','gul','vex','ohm','lo','sur','ber','jah','cham','zod'];

const runeConversion = {
  1: { to: 2, from: null, required: 3 },
  2: { to: 3, from: 1, required: 3 },
  3: { to: 4, from: 2, required: 3 },
  4: { to: 5, from: 3, required: 3 },
  5: { to: 6, from: 4, required: 3 },
  6: { to: 7, from: 5, required: 3 },
  7: { to: 8, from: 6, required: 3 },
  8: { to: 9, from: 7, required: 3 },
  9: { to: 10, from: 8, required: 3 },
  10: { to: 11, from: 9, required: 3, file: "t-1", gem: "Chipped Topaz" },
  11: { to: 12, from: 10, required: 3, file: "a-1", gem: "Chipped Amethyst" },
  12: { to: 13, from: 11, required: 3, file: "s-1", gem: "Chipped Sapphire" },
  13: { to: 14, from: 12, required: 3, file: "r-1", gem: "Chipped Ruby" },
  14: { to: 15, from: 13, required: 3, file: "e-1", gem: "Chipped Emerald" },
  15: { to: 16, from: 14, required: 3, file: "d-1", gem: "Chipped Diamond" },
  16: { to: 17, from: 15, required: 3, file: "t-2", gem: "Flawed Topaz" },
  17: { to: 18, from: 16, required: 3, file: "a-2", gem: "Flawed Amethyst" },
  18: { to: 19, from: 17, required: 3, file: "s-2", gem: "Flawed Sapphire" },
  19: { to: 20, from: 18, required: 3, file: "r-2", gem: "Flawed Ruby" },
  20: { to: 21, from: 19, required: 3, file: "e-2", gem: "Flawed Emerald" },
  21: { to: 22, from: 20, required: 2, file: "d-2", gem: "Flawed Diamond" },
  22: { to: 23, from: 21, required: 2, file: "t-3", gem: "Topaz" },
  23: { to: 24, from: 22, required: 2, file: "a-3", gem: "Amethyst" },
  24: { to: 25, from: 23, required: 2, file: "s-3", gem: "Sapphire" },
  25: { to: 26, from: 24, required: 2, file: "r-3", gem: "Ruby" },
  26: { to: 27, from: 25, required: 2, file: "e-3", gem: "Emerald" },
  27: { to: 28, from: 26, required: 2, file: "d-3", gem: "Diamond" },
  28: { to: 29, from: 27, required: 2, file: "t-4", gem: "Flawless Topaz" },
  29: { to: 30, from: 28, required: 2, file: "a-4", gem: "Flawless Amethyst" },
  30: { to: 31, from: 29, required: 2, file: "s-4", gem: "Flawless Sapphire" },
  31: { to: 32, from: 30, required: 2, file: "r-4", gem: "Flawless Ruby" },
  32: { to: 33, from: 31, required: 2, file: "e-4", gem: "Flawless Emerald" },
  33: { to: null, from: 32, required: null }
};

const runewordArray = [
  {
    name: 'ancients pledge',
    runes: [8,9,7],
    type: ['shields'],
    stats: ['+50% Enhanced Defense','Cold Resist +43%','Lightning Resist +48%','Fire Resist +48%','Poison Resist +48%','10% Damage Taken Goes to Mana'],
    level: 21,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'beast',
    runes: [30,3,22,23,17],
    type: ['axes','scepters','hammers'],
    stats: ["Level 9 Fanaticism Aura When Equipped","+40% Increased Attack Speed","+240-270% Enhanced Damage (varies)","20% Chance of Crushing Blow","25% Chance of Open Wounds","+3 To Werebear","+3 To Lycanthropy","Prevent Monster Heal","+25-40 To Strength (varies)","+10 To Energy","+2 To Mana After Each Kill","Level 13 Summon Grizzly (5 Charges)"],
    level: 63,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'black',
    runes: [10,16,4],
    type: ['clubs','hammers','maces'],
    stats: ["+15% Increased Attack Speed","+120% Enhanced Damage","+200 to Attack Rating","Adds 3-14 Cold Damage (3 sec)","40% Chance of Crushing Blow","Knockback","+10 to Vitality","Magic Damage Reduced By 2","Level 4 Corpse Explosion (12 Charges)"],
    level: 35,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'bone',
    runes: [12,22,22],
    type: ['armor'],
    stats: ["15% Chance To Cast level 10 Bone Armor When Struck","15% Chance To Cast level 10 Bone Spear On Striking","+2 To Necromancer Skill Levels","+100-150 To Mana (varies)","All Resistances +30","Damage Reduced By 7"],
    level: 47,
    patch: 1.11,
    ladder: false
  },
  {
    name: 'bramble',
    runes: [8,27,29,5],
    type: ['armor'],
    stats: ["Level 15-21 Thorns Aura When Equipped (varies)","+50% Faster Hit Recovery","+25-50% To Poison Skill Damage (varies)","+300 Defense","Increase Maximum Mana 5%","Regenerate Mana 15%","+5% To Maximum Cold Resist","Fire Resist +30%","Poison Resist +100%","+13 Life After Each Kill","Level 13 Spirit of Barbs (33 Charges)"],
    level: 61,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'brand',
    runes: [31,28,23,25],
    type: ['missile weapons'],
    stats: ["35% Chance To Cast Level 14 Amplify Damage When Struck","100% Chance To Cast Level 18 Bone Spear On Striking","Fires Explosive Arrows or Bolts (15)","+260-340% Enhanced Damage (varies)","Ignore Target's Defense","20% Bonus to Attack Rating","+280-330% Damage To Demons (varies)","20% Deadly Strike","Prevent Monster Heal","Knockback"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'bulwark',
    runes: [13,16,12],
    type: ['helms'],
    stats: ["+20% Faster Hit Recovery","+4-6% Life stolen per hit","+75-100% Enhanced Defense","+10 to Vitality","Increase Maximum Life 5%","Replenish Life +30","Damage Reduced by 7","Physical Damage Received Reduced by 10-15%"],
    level: 35,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'breath of the dying',
    runes: [26,15,1,2,33,5],
    type: ['weapons'],
    stats: ["50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy","Indestructible","+60% Increased Attack Speed","+350-400% Enhanced Damage (varies)","-25% Target Defense","+50 To Attack Rating","+200% Damage To Undead","+50 To Attack Rating Against Undead","7% Mana Stolen Per Hit","12-15% Life Stolen Per Hit (varies)","Prevent Monster Heal","+30 To All Attributes","+1 To Light Radius","Requirements -20%"],
    level: 69,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'call to arms',
    runes: [11,8,23,24,27],
    type: ['weapons'],
    stats: ["+1 To All Skills","+40% Increased Attack Speed","+240-290% Enhanced Damage (varies)","Adds 5-30 Fire Damage","7% Life Stolen Per Hit","+2-6 To Battle Command (varies)","+1-6 To Battle Orders (varies)","+1-4 To Battle Cry (varies)","Prevent Monster Heal","Replenish Life +12","30% Better Chance of Getting Magic Items"],
    level: 57,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'chains of honor',
    runes: [14,22,30,24],
    type: ['armor'],
    stats: ["+2 To All Skills","+200% Damage To Demons","+100% Damage To Undead","8% Life Stolen Per Hit","+70% Enhanced Defense","+20 To StrengthReplenish Life +7","All Resistances +65","Damage Reduced By 8%","25% Better Chance of Getting Magic Items"],
    level: 63,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'chaos',
    runes: [19,27,22],
    type: ['katars'],
    stats: ["9% Chance To Cast Level 11 Frozen Orb On Striking","11% Chance To Cast Level 9 Charged Bolt On Striking","+35% Increased Attacked Speed","+240-290% Enhanced Damage (varies)","Adds 216-471 Magic Damage","25% Chance of Open Wounds","+1 To Whirlwind","+10 To Strength","+15 Life After Each Demon Kill"],
    level: 57,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'crescent moon',
    runes: [13,22,3],
    type: ['axes','swords','polearms'],
    stats: ["10% Chance To Cast Level 17 Chain Lightning On Striking","7% Chance To Cast Level 13 Static Field On Striking","+20% Increased Attack Speed","+180-220% Enhanced Damage (varies)","Ignore Target's Defense","-35% To Enemy Lightning Resistance","25% Chance of Open Wounds","+9-11 Magic Absorb (varies)","+2 To Mana After Each Kill","Level 18 Summon Spirit Wolf (30 Charges)"],
    level: 47,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'cure',
    runes: [13,16,7],
    type: ['helms'],
    stats: ["10% Chance To Cast Level 17 Chain Lightning On Striking","7% Chance To Cast Level 13 Static Field On Striking","+20% Increased Attack Speed","+180-220% Enhanced Damage (varies)","Ignore Target's Defense","-35% To Enemy Lightning Resistance","25% Chance of Open Wounds","+9-11 Magic Absorb (varies)","+2 To Mana After Each Kill","Level 18 Summon Spirit Wolf (30 Charges)"],
    level: 35,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'death',
    runes: [15,1,26,9,25],
    type: ['swords','axes'],
    stats: ["Indestructible","100% Chance To Cast Level 44 Chain Lightning When You Die","25% Chance To Cast Level 18 Glacial Spike On Attack","+300-385% Enhanced Damage (varies)","20% Bonus To Attack Rating","+50 To Attack Rating","Adds 1-50 Lightning Damage","7% Mana Stolen Per Hit","50% Chance of Crushing Blow","0.5% Deadly Strike (Based on Character Level)","+1 To Light Radius","Level 22 Blood Golem (15 Charges)","Requirements -20%"],
    level: 55,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'delirium',
    runes: [20,24,16],
    type: ['helms'],
    stats: ["1% Chance To Cast lvl 50 Delirium When Struck (morphs your character into a Bone Fetish for about 1 minute; once morphed,you can do normal attacks in the form of a headbutt)","6% Chance To Cast lvl 14 Mind Blast When Struck","14% Chance To Cast lvl 13 Terror When Struck","11% Chance To Cast lvl 18 Confuse On Striking","+2 To All Skills","+261 Defense","+10 To Vitality","50% Extra Gold From Monsters","25% Better Chance of Getting Magic Items","Level 17 Attract (60 Charges)"],
    level: 51,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'destruction',
    runes: [26,28,30,31,18],
    type: ['polearms','swords'],
    stats: ["23% Chance To Cast Level 12 Volcano On Striking","5% Chance To Cast Level 23 Molten Boulder On Striking","100% Chance To Cast level 45 Meteor When You Die","15% Chance To Cast Level 22 Nova On Attack","+350% Enhanced Damage","Ignore Target's Defense","Adds 100-180 Magic Damage","7% Mana Stolen Per Hit","20% Chance Of Crushing Blow","20% Deadly Strike","Prevent Monster Heal","+10 To Dexterity"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'doom',
    runes: [15,27,22,28,32],
    type: ['axes','polearms','hammers'],
    stats: ["5% Chance To Cast Level 18 Volcano On Striking","Level 12 Holy Freeze Aura When Equipped","+2 To All Skills","+45% Increased Attack Speed","+330-370% Enhanced Damage (varies)","-40-60% To Enemy Cold Resistance (varies)","20% Deadly Strike","25% Chance of Open Wounds","Prevent Monster Heal","Freezes Target +3","Requirements -20%"],
    level: 67,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'dragon',
    runes: [29,28,12],
    type: ['shields'],
    stats: ["20% Chance to Cast Level 18 Venom When Struck","12% Chance To Cast Level 15 Hydra On Striking","Level 14 Holy Fire Aura When Equipped","+360 Defense","+230 Defense Vs. Missile","+3-5 To All Attributes (varies)","+0.375 To Strength (Based on Character Level)","+5% To Maximum Lightning Resist","Damage Reduced by 7","+50 To Mana"],
    level: 61,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'dragon',
    runes: [29,28,12],
    type: ['armor'],
    stats: ["20% Chance to Cast Level 18 Venom When Struck","12% Chance To Cast Level 15 Hydra On Striking","Level 14 Holy Fire Aura When Equipped","+360 Defense","+230 Defense Vs. Missile","+3-5 To All Attributes (varies)","+0.375 To Strength (Based on Character Level)","+5% To Maximum Lightning Resist","Damage Reduced by 7","Increase Maximum Mana 5%"],
    level: 61,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'dream',
    runes: [16,31,21],
    type: ['shields'],
    stats: ["10% Chance To Cast Level 15 Confuse When Struck","Level 15 Holy Shock Aura When Equipped","+20-30% Faster Hit Recovery (varies)","+30% Enhanced Defense","+150-220 Defense (varies)","+10 To Vitality","+0.625 To Mana (Based on Character Level)","All Resistances +5-20 (varies)","12-25% Better Chance of Getting Magic Items (varies)","+50 To Life"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'dream',
    runes: [16,31,21],
    type: ['helms'],
    stats: ["10% Chance To Cast Level 15 Confuse When Struck","Level 15 Holy Shock Aura When Equipped","+20-30% Faster Hit Recovery (varies)","+30% Enhanced Defense","+150-220 Defense (varies)","+10 To Vitality","+0.625 To Mana (Based on Character Level)","All Resistances +5-20 (varies)","12-25% Better Chance of Getting Magic Items (varies)","Increase Maximum Life 5%"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'duress',
    runes: [13,22,10],
    type: ['armor'],
    stats: ["40% faster hit Recovery","+10-20% Enhanced Damage (varies)","Adds 37-133 Cold Damage","15% Crushing Blow","33% Open Wounds","+150-200% Enhanced Defense (varies)","-20% Slower Stamina Drain","Cold Resist +45%","Lightning Resist +15%","Fire Resist +15%","Poison Resist +15%"],
    level: 47,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'edge',
    runes: [3,7,11],
    type: ['missile weapons'],
    stats: ["Level 15 Thorns Aura When Equipped","+35% Increased Attack Speed","+320-380% Damage To Demons (varies)","+280% Damage To Undead","+75 Poison Damage Over 5 Seconds","7% Life Stolen Per Hit","Prevent Monster Heal","+5-10 To All Attributes (varies)","+2 To Mana After Each Kill","Reduces All Vendor Prices 15%"],
    level: 25,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'enigma',
    runes: [31,6,30],
    type: ['armor'],
    stats: ["+2 To All Skills","+45% Faster Run/Walk","+1 To Teleport","+750-775 Defense (Varies)","+0.75 To Strength (Based on Character Level)","Increase Maximum Life 5%","Damage Reduced By 8%","+14 Life After Each Kill","15% Damage Taken Goes To Mana","1% Better Chance of Getting Magic Items (Based on Character Level)"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'enlightenment',
    runes: [21,8,12],
    type: ['armor'],
    stats: ["5% Chance To Cast Level 15 Blaze When Struck","5% Chance To Cast level 15 Fire Ball On Striking","+2 To Sorceress Skill Levels","+1 To Warmth","+30% Enhanced Defense","Fire Resist +30%","Damage Reduced By 7"],
    level: 45,
    patch: 1.11,
    ladder: false
  },
  {
    name: 'eternity',
    runes: [11,30,24,12,29],
    type: ['melee weapons'],
    stats: ["Indestructible","+260-310% Enhanced Damage (varies)","+9 To Minimum Damage","7% Life Stolen Per Hit","20% Chance of Crushing Blow","Hit Blinds Target","Slows Target By 33%","Replenish Mana 16%","Cannot Be Frozen","30% Better Chance Of Getting Magic Items","Level 8 Revive (88 Charges)"],
    level: 63,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'exile',
    runes: [26,27,24,14],
    type: ['paladin shields'],
    stats: ["15% Chance To Cast Level 5 Life Tap On Striking","Level 13-16 Defiance Aura When Equipped (varies)","+2 To Offensive Auras (Paladin Only)","+30% Faster Block Rate","Freezes Target","+220-260% Enhanced Defense (varies)","Replenish Life +7","+5% To Maximum Cold Resist","+5% To Maximum Fire Resist","25% Better Chance Of Getting Magic Items","Repairs 1 Durability every 4 seconds"],
    level: 57,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'faith',
    runes: [27,31,20,2],
    type: ['missile weapons'],
    stats: ["Level 12-15 Fanaticism Aura When Equipped (varies)","+1-2 To All Skills (varies)","+330% Enhanced Damage","Ignore Target's Defense","300% Bonus To Attack Rating","+75% Damage To Undead","+50 To Attack Rating Against Undead","+120 Fire Damage","All Resistances +15","10% Reanimate As: Returned","75% Extra Gold From Monsters"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'famine',
    runes: [19,27,9,31],
    type: ['axes','hammers'],
    stats: ["+30% Increased Attack Speed","+320-370% Enhanced Damage (varies)","Ignore Target's Defense","Adds 180-200 Magic Damage","Adds 50-200 Fire Damage","Adds 51-250 Lightning Damage","Adds 50-200 Cold Damage","12% Life Stolen Per Hit","Prevent Monster Heal","+10 To Strength"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'flickering flame',
    runes: [4,21,26],
    type: ['helms'],
    stats: ["Level 4-8 Resist Fire Aura When Equipped","+3 To Fire Skills","-10-15% to Enemy Fire Resist","+30% Enhanced Defense","+30 Defense vs. Missile","+50-75 To Mana","Half Freeze Duration","+5% To Maximum Fire Resist","Poison Length Reduced by 50%"],
    level: 55,
    patch: 2.4,
    ladder: false
  },
  {
    name: 'fortitude',
    runes: [1,12,14,28],
    type: ['armor'],
    stats: ["20% Chance To Cast Level 15 Chilling Armor when Struck","+25% Faster Cast Rate","+300% Enhanced Damage","+200% Enhanced Defense","+((8-12) * 0.125) To Life (Based on Character Level) (varies)","All Resistances +25-30 (varies)","12% Damage Taken Goes To Mana","+1 To Light Radius","+15 Defense","Replenish Life +7","+5% To Maximum Lightning Resist","Damage Reduced By 7"],
    level: 59,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'fortitude',
    runes: [1,12,14,28],
    type: ['weapons'],
    stats: ["20% Chance To Cast Level 15 Chilling Armor when Struck","+25% Faster Cast Rate","+300% Enhanced Damage","+200% Enhanced Defense","+((8-12) * 0.125) To Life (Based on Character Level) (varies)","All Resistances +25-30 (varies)","12% Damage Taken Goes To Mana","+1 To Light Radius","+9 To Minimum Damage","+50 To Attack Rating","20% Deadly Strike","Hit Causes Monster To Flee 25%"],
    level: 59,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'fury',
    runes: [31,25,5],
    type: ['melee weapons'],
    stats: ["40% Increased Attack Speed","+209% Enhanced Damage","Ignores Target Defense","-25% Target Defense","20% Bonus to Attack Rating","6% Life Stolen Per Hit","33% Chance Of Deadly Strike","66% Chance Of Open Wounds","+5 To Frenzy (Barbarian Only)","Prevent Monster Heal"],
    level: 65,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'gloom',
    runes: [19,22,21],
    type: ['armor'],
    stats: ["15% Chance To Cast Level 3 Dim Vision When Struck","+10% Faster Hit Recovery","+200-260% Enhanced Defense (varies)","+10 To Strength","All Resistances +45","Half Freeze Duration","5% Damage Taken Goes To Mana","-3 To Light Radius"],
    level: 47,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'grief',
    runes: [5,3,28,23,8],
    type: ['swords','axes'],
    stats: ["35% Chance To Cast Level 15 Venom On Striking","+30-40% Increased Attack Speed (varies)","Damage +340-400 (varies)","Ignore Target's Defense","-25% Target Defense","+1.875% Damage To Demons (Based on Character Level)","Adds 5-30 Fire Damage","-20-25% To Enemy Poison Resistance (varies)","20% Deadly Strike","Prevent Monster Heal","+2 To Mana After Each Kill","+10-15 Life After Each Kill (varies)"],
    level: 59,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'ground',
    runes: [13,16,9],
    type: ['helms'],
    stats: ["+20% Faster Hit Recovery","+75-100% Enhanced Defense","+10 to Vitality","Increase Maximum Life 5%","Lightning Resist +40-60%","Lightning Absorb +10-15%"],
    level: 35,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'hand of justice',
    runes: [29,32,11,28],
    type: ['weapons'],
    stats: ["100% Chance To Cast Level 36 Blaze When You Level-Up","100% Chance To Cast Level 48 Meteor When You Die","Level 16 Holy Fire Aura When Equipped","+33% Increased Attack Speed","+280-330% Enhanced Damage (varies)","Ignore Target's Defense","-20% To Enemy Fire Resistance","7% Life Stolen Per Hit","20% Deadly Strike","Hit Blinds Target","Freezes Target +3"],
    level: 67,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'harmony',
    runes: [3,6,12,18],
    type: ['missile weapons'],
    stats: ["Level 10 Vigor Aura When Equipped","+200-275% Enhanced Damage (varies)","+9 To Minimum Damage","+9 To Maximum Damage","Adds 55-160 Fire Damage","Adds 55-160 Lightning Damage","Adds 55-160 Cold Damage","+2-6 To Valkyrie (varies)","+10 To Dexterity","Regenerate Mana 20%","+2 To Mana After Each Kill","+2 To Light Radius","Level 20 Revive (25 Charges)"],
    level: 39,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'heart of the oak',
    runes: [18,26,21,10],
    type: ['staves','maces'],
    stats: ["+3 To All Skills","+40% Faster Cast Rate","+75% Damage To Demons","+100 To Attack Rating Against Demons","Adds 3-14 Cold Damage","7% Mana Stolen Per Hit","+10 To Dexterity","Replenish Life +20","Increase Maximum Mana 15%","All Resistances +30-40 (varies)","Level 4 Oak Sage (25 Charges)","Level 14 Raven (60 Charges)"],
    level: 55,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'hearth',
    runes: [13,16,10],
    type: ['helms'],
    stats: ["+20% Faster Hit Recovery","+75-100% Enhanced Defense","+10 to Vitality","Increase Maximum Life 5%","Cold Resist +40-60%","Cold Absorb +10-15%","Cannot be Frozen"],
    level: 35,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'holy thunder',
    runes: [5,8,9,7],
    type: ['scepters'],
    stats: ["+60% Enhanced Damage","+10 to Maximum Damage","-25% Target Defense","Adds 5-30 Fire Damage","Adds 21-110 Lightning Damage","+75 Poison Damage over 5 secs","+3 to Holy Shock (Paladin Only)","+5% to Maximum Lightning Resist","Lightning Resist +60%","Level 7 Chain Lightning (60 charges)"],
    level: 23,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'honor',
    runes: [11,1,6,3,12],
    type: ['melee weapons'],
    stats: ["+60% Enhanced Damage","+10 to Maximum Damage","-25% Target Defense","Adds 5-30 Fire Damage","Adds 21-110 Lightning Damage","+75 Poison Damage over 5 secs","+3 to Holy Shock (Paladin Only)","+5% to Maximum Lightning Resist","Lightning Resist +60%","Level 7 Chain Lightning (60 charges)"],
    level: 27,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'hustle',
    runes: [13,18,2],
    type: ['weapons'],
    stats: ["5% Chance to cast level 1 Burst of Speed on striking","Level 1 Fanaticism Aura","+30% Increased Attack Speed","+180-200% Enhanced Damage","+75% Damage to Undead","+50 to Attack Rating against Undead","+10 to Dexterity"],
    level: 39,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'hustle',
    runes: [13,18,2],
    type: ['armor'],
    stats: ["+65% Faster Run/Walk","+40% Increased Attack Speed","+20% Faster Hit Recovery","+6 to Evade","+10 to Dexterity","50% Slower Stamina Drain","+All Resistances +10"],
    level: 39,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'ice',
    runes: [11,13,31,28],
    type: ['missile weapons'],
    stats: ["100% Chance To Cast Level 40 Blizzard When You Level-up","25% Chance To Cast Level 22 Frost Nova On Striking","Level 18 Holy Freeze Aura When Equipped","+20% Increased Attack Speed","+140-210% Enhanced Damage (varies)","Ignore Target's Defense","+25-30% To Cold Skill Damage (varies)","7% Life Stolen Per Hit","-20% To Enemy Cold Resistance","20% Deadly Strike","3.125% Extra Gold From Monsters (Based on Character Level)"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'infinity',
    runes: [30,23,30,24],
    type: ['polearms'],
    stats: ["50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy","Level 12 Conviction Aura When Equipped","+35% Faster Run/Walk","+255-325% Enhanced Damage (varies)","-(45-55)% To Enemy Lightning Resistance (varies)","40% Chance of Crushing Blow","Prevent Monster Heal","+0.5 To Vitality (Based on Character Level)","30% Better Chance of Getting Magic Items","Level 21 Cyclone Armor (30 Charges)"],
    level: 63,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'insight',
    runes: [8,3,7,12],
    type: ['polearms','staves'],
    stats: ["Level 12-17 Meditation Aura When Equipped (varies)","+35% Faster Cast Rate","+200-260% Enhanced Damage (varies)","+9 To Minimum Damage","180-250% Bonus to Attack Rating (varies)","Adds 5-30 Fire Damage","+75 Poison Damage Over 5 Seconds","+1-6 To Critical Strike (varies)","+5 To All Attributes","+2 To Mana After Each Kill","23% Better Chance of Getting Magic Items"],
    level: 27,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'kings grace',
    runes: [11,8,10],
    type: ['swords','scepters'],
    stats: ["+100% Enhanced Damage","+150 to Attack Rating","+100% Damage to Demons","+100 to Attack Rating against Demons","+50% Damage to Undead","+100 to Attack Rating against Undead","Adds 5-30 Fire Damage","Adds 3-14 Cold damage","7% Life stolen per hit"],
    level: 25,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'kingslayer',
    runes: [23,22,25,19],
    type: ['swords','axes'],
    stats: ["+30% Increased Attack Speed","+230-270% Enhanced Damage (varies)","-25% Target Defense","20% Bonus To Attack Rating","33% Chance of Crushing Blow","50% Chance of Open Wounds","+1 To Vengeance","Prevent Monster Heal","+10 To Strength","40% Extra Gold From Monsters"],
    level: 53,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'last wish',
    runes: [31,23,31,29,31,30],
    type: ['swords','hammers','axes'],
    stats: ["6% Chance To Cast Level 11 Fade When Struck","10% Chance To Cast Level 18 Life Tap On Striking","20% Chance To Cast Level 20 Charged Bolt On Attack","Level 17 Might Aura When Equipped","+330-375% Enhanced Damage (varies)","Ignore Target's Defense","60-70% Chance of Crushing Blow (varies)","Prevent Monster Heal","Hit Blinds Target","+0.5% Chance of Getting Magic Items (Based on Character Level)"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'lawbringer',
    runes: [11,20,18],
    type: ['swords','hammers','scepters'],
    stats: ["20% Chance To Cast Level 15 Decrepify On Striking","Level 16-18 Sanctuary Aura When Equipped (varies)","-50% Target Defense","Adds 150-210 Fire Damage","Adds 130-180 Cold Damage","7% Life Stolen Per Hit","Slain Monsters Rest In Peace","+200-250 Defense Vs. Missile (varies)","+10 To Dexterity","75% Extra Gold From Monsters"],
    level: 43,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'leaf',
    runes: [3,8],
    type: ['staves'],
    stats: ["+3 to Fire Skills","Adds 5-30 Fire Damage","+3 to Inferno (Sorceress Only)","+3 to Warmth (Sorceress Only)","+3 to Fire Bolt (Sorceress Only)","+2 To Defense (Based on Character Level)","Cold Resist +33%","+2 to Mana after each Kill"],
    level: 19,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'lionheart',
    runes: [15,17,19],
    type: ['armor'],
    stats: ["+20% Enhanced Damage","+25 To Strength","+15 To Dexterity","+20 To Vitality","+10 To Energy","+50 To Life","All Resistances +30","Requirements -15%"],
    level: 41,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'lore',
    runes: [9,12],
    type: ['helms'],
    stats: ["+1 to All Skills","+10 to Energy","Lightning Resist +30%","Damage Reduced by 7","+2 to Mana after each Kill","+2 to Light Radius"],
    level: 27,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'malice',
    runes: [6,1,5],
    type: ['melee weapons'],
    stats: ["+33% Enhanced Damage","+9 to Maximum Damage","-25% Target Defense","+50 to Attack Rating","100% Chance of Open wounds","Prevent Monster Heal","-100 to Monster Defense Per Hit","Drain Life -5 (you will lose 1 hp about every 2 seconds)"],
    level: 15,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'melody',
    runes: [13,18,4],
    type: ['missile weapons'],
    stats: ["+3 To Bow and Crossbow Skills (Amazon Only)","+20% Increased Attack Speed","+50% Enhanced Damage","+300% Damage To Undead","+3 To Slow Missiles (Amazon Only)","+3 To Dodge (Amazon Only)","+3 To Critical Strike (Amazon Only)","Knockback","+10 To Dexterity"],
    level: 39,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'memory',
    runes: [17,16,12,5],
    type: ['staves'],
    stats: ["+3 To Sorceress Skill Levels","+33% Faster Cast Rate","+9 To Minimum Damage","-25% Target Defence","+3 To Energy Shield (Sorceress Only)","+2 To Static Field (Sorceress Only)","+50% Enhanced Defense","+10 Vitality","+10 Energy","Increase Maximum Mana 20%","Magic Damage Reduced By 7"],
    level: 37,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'mist',
    runes: [32,13,25],
    type: ['missile weapons'],
    stats: ["Level 8-12 Concentration Aura When Equipped (varies)","+3 To All Skills","20% Increased Attack Speed","+100% Piercing Attack","+325-375% Enhanced Damage (varies)","+9 To Maximum Damage","20% Bonus to Attack Rating","Adds 3-14 Cold Damage","All Resistances +40","Freeze Target +3","+24 Vitality"],
    level: 67,
    patch: 2.4,
    ladder: true
  },
  {
    name: 'metamorphosis',
    runes: [16,32,19],
    type: ['helms'],
    stats: ["Werewolf strikes grant Mark of the Wolf for 180 seconds","Werebear strikes grant Mark of the Bear for 180 seconds","+5 to Shape Shifting Skills (Druid Only)","+25% chance of Crushing Blow","+50%-80% Enhanced Defense","+10 to Strength","+10 to Vitality","All Resistances +10","Cannot be Frozen"],
    level: 67,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'mosaic',
    runes: [23,25,11],
    type: ['katars'],
    stats: ["+50% chance for finishing moves to not consume charges","When a finisher is executed this way","it now refreshes the expiration timer of the stack","+2 to Martial Arts (Assassin only)","+20% Increased Attack Speed","+200-250% Enhanced Damage","+20% Bonus to Attack Rating","7% Life Steal","8-15% to Cold Skill Damage","8-15% to Lightning Skill Damage","8-15% to Fire Skill Damage","Prevent Monster Heal"],
    level: 53,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'myth',
    runes: [15,11,4],
    type: ['armor'],
    stats: ["3% Chance To Cast Level 1 Howl When Struck","10% Chance To Cast Level 1 Taunt On Striking","+2 To Barbarian Skill Levels","+30 Defense Vs. Missile","Replenish Life +10","Attacker Takes Damage of 14","Requirements -15%"],
    level: 25,
    patch: 1.11,
    ladder: false
  },
  {
    name: 'nadir',
    runes: [4,3],
    type: ['helms'],
    stats: ["+50% Enhanced Defense","+10 Defense","+30 Defense vs. Missile","+5 to Strength","+2 to Mana after each Kill","-33% Extra Gold from Monsters","-3 to Light Radius","Level 13 Cloak of Shadows (9 charges)"],
    level: 13,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'oath',
    runes: [13,21,23,17],
    type: ['swords','axes','maces'],
    stats: ["Indestructible","30% Chance To Cast Level 20 Bone Spirit On Striking","+50% Increased Attack Speed","+210-340% Enhanced Damage (varies)","+75% Damage To Demons","+100 To Attack Rating Against Demons","Prevent Monster Heal","+10 To Energy","+10-15 Magic Absorb (varies)","Level 16 Heart of Wolverine (20 Charges)","Level 17 Iron Golem (14 Charges)"],
    level: 59,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'obedience',
    runes: [15,18,10,5,19],
    type: ['polearms'],
    stats: ["30% Chance To Cast Level 21 Enchant When You Kill An Enemy","+40% Faster Hit Recovery","+370% Enhanced Damage","-25% Target Defense","Adds 3-14 Cold Damage (3 Seconds Duration,Normal)","-25% To Enemy Fire Resistance","40% Chance of Crushing Blow","+200-300 Defense (varies)","+10 To Strength","+10 To Dexterity","All Resistances +20-30 (varies)","Requirements -20%"],
    level: 41,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'obsession',
    runes: [32,24,20,17,16,4],
    type: ['staves'],
    stats: ["Indestructible","24% Chance to cast level 10 Weaken when struck","+4 To All Skills","+65% Faster Cast Rate","+60% Faster Hit Recovery","Knockback","+10 To Vitality","+10 To Energy","Increase Maximum Life 15-25% (varies)","Regenerate Mana 15-30% (varies)","All Resistances +60-70 (varies)","75% Extra Gold from Monsters","30% Better Chance of Getting Magic Items"],
    level: 69,
    patch: 2.4,
    ladder: true
  },
  {
    name: 'passion',
    runes: [14,9,2,20],
    type: ['weapons'],
    stats: ["+25% Increased Attack Speed","+160-210% Enhanced Damage (varies)","50-80% Bonus To Attack Rating (varies)","+75% Damage To Undead","+50 To Attack Rating Against Undead","Adds 1-50 Lightning Damage","+1 To Berserk","+1 To Zeal","Hit Blinds Target +10","Hit Causes Monster To Flee 25%","75% Extra Gold From Monsters","Level 3 Heart of Wolverine (12 Charges)"],
    level: 43,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'pattern',
    runes: [7,9,10],
    type: ['katars'],
    stats: ["+30% Faster Block Rate","+40-80% Enhanced Damage (varies)","10% Bonus to Attack Rating","Adds 17-62 Fire Damage","Adds 1-50 Lightning Damage","Adds 3-14 Cold Damage","+75 Poison Damage Over 5 Seconds","+6 to Strength","+6 to Dexterity","All Resistances +15"],
    level: 23,
    patch: 2.4,
    ladder: true
  },
  {
    name: 'peace',
    runes: [13,10,11],
    type: ['armor'],
    stats: ["4% Chance To Cast Level 5 Slow Missiles When Struck","2% Chance To Cast level 15 Valkyrie On Striking","+2 To Amazon Skill Levels","+20% Faster Hit Recovery","+2 To Critical Strike","Cold Resist +30%","Attacker Takes Damage of 14"],
    level: 29,
    patch: 1.11,
    ladder: false
  },
  {
    name: 'plague',
    runes: [32,13,22],
    type: ['katars','swords'],
    stats: ["20% Chance to cast level 12 Lower Resist when struck","25% Chance to cast level 15 Poison Nova on striking","Level 13-17 Cleansing Aura When Equipped (varies)","+1-2 All Skills","+20% Increased Attack Speed","+220-320% Enhanced Damage (varies)","-23% To Enemy Poison Resistance","0.3% (0-29.7) Deadly Strike (Based on Character Level)","+25% Chance of Open Wounds","Freezes Target +3"],
    level: 67,
    patch: 2.4,
    ladder: true
  },
  {
    name: 'phoenix',
    runes: [26,26,28,31],
    type: ['shields'],
    stats: ["100% Chance To Cast level 40 Blaze When You Level-up","40% Chance To Cast Level 22 Firestorm On Striking","Level 10-15 Redemption Aura When Equipped (varies)","+350-400% Enhanced Damage (varies)","-28% To Enemy Fire Resistance","+350-400 Defense Vs. Missile (varies)","+15-21 Fire Absorb (varies)","+50 To Life","+5% To Maximum Lightning Resist","+10% To Maximum Fire Resist"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'phoenix',
    runes: [26,26,28,31],
    type: ['weapons'],
    stats: ["100% Chance To Cast level 40 Blaze When You Level-up","40% Chance To Cast Level 22 Firestorm On Striking","Level 10-15 Redemption Aura When Equipped (varies)","+350-400% Enhanced Damage (varies)","-28% To Enemy Fire Resistance","+350-400 Defense Vs. Missile (varies)","+15-21 Fire Absorb (varies)","Ignores Target's Defense","14% Mana Stolen Per Hit","20% Deadly Strike"],
    level: 65,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'pride',
    runes: [32,29,16,28],
    type: ['polearms'],
    stats: ["25% Chance To Cast Level 17 Fire Wall When Struck","Level 16-20 Concentration Aura When Equipped (varies)","260-300% Bonus To Attack Rating (varies)","+1% Damage To Demons (Based on Character Level)","Adds 50-280 Lightning Damage","20% Deadly Strike","Hit Blinds Target","Freezes Target +3","+10 To Vitality","Replenish Life +8","1.875% Extra Gold From Monsters (Based on Character Level)"],
    level: 67,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'principle',
    runes: [8,25,2],
    type: ['armor'],
    stats: ["100% Chance To Cast Level 5 Holy Bolt On Striking","+2 To Paladin Skill Levels","+50% Damage to Undead","+100-150 to Life (varies)","15% Slower Stamina Drain","+5% To Maximum Poison Resist","Fire Resist +30%"],
    level: 55,
    patch: 1.11,
    ladder: false
  },
  {
    name: 'prudence',
    runes: [23,3],
    type: ['armor'],
    stats: ["+25% Faster Hit Recovery","+140-170% Enhanced Defense (varies)","All Resistances +25-35 (varies)","Damage Reduced by 3","Magic Damage Reduced by 17","+2 To Mana After Each Kill","+1 To Light Radius","Repairs Durability 1 In 4 Seconds"],
    level: 49,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'radiance',
    runes: [4,12,5],
    type: ['helms'],
    stats: ["+75% Enhanced Defense","+30 Defense vs. Missiles","+10 to Vitality","+10 to Energy","+33 to Mana","Damage Reduced by 7","Magic Damage Reduced by 3","15% Damage Taken Goes to Mana","+5 to Light Radius"],
    level: 27,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'rain',
    runes: [9,23,6],
    type: ['armor'],
    stats: ["5% Chance To Cast Level 15 Cyclone Armor When Struck","5% Chance To Cast Level 15 Twister On Striking","+2 To Druid Skills","+100-150 To Mana (varies)","Lightning Resist +30%","Magic Damage Reduced By 7","15% Damage Taken Goes to Mana"],
    level: 49,
    patch: 1.11,
    ladder: false
  },
  {
    name: 'rhyme',
    runes: [13,5],
    type: ['shields'],
    stats: ["+40% Faster Block Rate","20% Increased Chance of Blocking","Regenerate Mana 15%","All Resistances +25","Cannot be Frozen","50% Extra Gold from Monsters","25% Better Chance of Getting Magic Items"],
    level: 29,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'rift',
    runes: [15,18,20,25],
    type: ['polearms','scepters'],
    stats: ["20% Chance To Cast Level 16 Tornado On Striking","16% Chance To Cast Level 21 Frozen Orb On Attack","20% Bonus To Attack Rating","Adds 160-250 Magic Damage","Adds 60-180 Fire Damage","+5-10 To All Attributes (varies)","+10 To Dexterity","38% Damage Taken Goes To Mana","75% Extra Gold From Monsters","Level 15 Iron Maiden (40 Charges)","Requirements -20%"],
    level: 53,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'sanctuary',
    runes: [18,18,23],
    type: ['shields'],
    stats: ["+20% Faster Hit Recovery","+20% Faster Block Rate","20% Increased Chance of Blocking","+130-160% Enhanced Defense (varies)","+250 Defense vs. Missile","+20 To Dexterity","All Resistances +50-70 (varies)","Magic Damage Reduced By 7","Level 12 Slow Missiles (60 Charges)"],
    level: 49,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'silence',
    runes: [14,2,15,24,3,26],
    type: ['weapons'],
    stats: ["+2 to All Skills","+20% Increased Attack Speed","+20% Faster Hit Recovery","+200% Enhanced Damage","+75% Damage To Undead","+50 to Attack Rating Against Undead","11% Mana Stolen Per Hit","Hit Blinds Target +33","Hit Causes Monster to Flee 25%","All Resistances +75","+2 to Mana After Each Kill","30% Better Chance of Getting Magic Items","Requirements -20%"],
    level: 55,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'smoke',
    runes: [4,17],
    type: ['armor'],
    stats: ["+20% Faster Hit Recovery","+75% Enhanced Defense","+280 Defense vs. Missiles","+10 to Energy","All Resistances +50","-1 to Light Radius","Level 6 Weaken (18 charges)"],
    level: 37,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'spirit',
    runes: [7,10,9,11],
    type: ['shields'],
    stats: ["+2 To All Skills","+25-35% Faster Cast Rate (varies)","+55% Faster Hit Recovery","+250 Defense Vs. Missile","+22 To Vitality","+89-112 To Mana (varies)","+3-8 Magic Absorb (varies)","Cold Resist +35%","Lightning Resist +35%","Poison Resist +35%","Attacker Takes Damage of 14"],
    level: 25,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'spirit',
    runes: [7,10,9,11],
    type: ['swords'],
    stats: ["+2 To All Skills","+25-35% Faster Cast Rate (varies)","+55% Faster Hit Recovery","+250 Defense Vs. Missile","+22 To Vitality","+89-112 To Mana (varies)","+3-8 Magic Absorb (varies)","Adds 1-50 Lightning Damage","Adds 3-14 Cold Damage (3 Sec,Normal)","+75 Poison Damage Over 5 Seconds","7% Life Stolen Per Hit"],
    level: 25,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'splendor',
    runes: [5,17],
    type: ['shields'],
    stats: ["+1 To All Skills","+10% Faster Cast Rate","+20% Faster Block Rate","+60-100% Enhanced Defense (varies)","+10 To Energy","Regenerate Mana 15%","50% Extra Gold From Monsters","20% Better Chance of Getting Magic Items","+3 To Light Radius"],
    level: 37,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'stealth',
    runes: [7,5],
    type: ['armor'],
    stats: ["+25% Faster Run/Walk","+25% Faster Casting Rate","+25% Faster Hit Recovery","+6 to Dexterity","Regenerate Mana 15%","+15 Maximum Stamina","Poison Resist +30%","Magic Damage Reduced by 3"],
    level: 17,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'steel',
    runes: [3,1],
    type: ['swords','axes','maces'],
    stats: ["+25% Increased Attack Speed","+20% Enhanced Damage","+3 to Minimum Damage","+3 to Maximum Damage","+50 to Attack Rating","50% Chance of Open Wounds","+2 to Mana after each Kill","+1 to Light Radius"],
    level: 13,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'stone',
    runes: [13,22,21,17],
    type: ['armor'],
    stats: ["+60% Faster Hit Recovery","+250-290% Enhanced Defense (varies)","+300 Defense Vs. Missile","+16 To Strength","+16 To Vitality","+10 To Energy","All Resistances +15","Level 16 Molten Boulder (80 Charges)","Level 16 Clay Golem (16 Charges)"],
    level: 47,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'strength',
    runes: [11,3],
    type: ['melee weapons'],
    stats: ["+35% Enhanced Damage","7% Life stolen per hit","25% Chance of Crushing Blow","+20 to Strength","+10 to Vitality","+2 to Mana after each Kill"],
    level: 25,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'temper',
    runes: [13,16,8],
    type: ['helms'],
    stats: ["+20% Faster Hit Recovery","+75-100% Enhanced Defense","+10 to Vitality","Increase Maximum Life 5%","Fire Resist 40-60%","Fire Absorb +10-15%"],
    level: 35,
    patch: 2.6,
    ladder: true
  },
  {
    name: 'treachery',
    runes: [13,10,20],
    type: ['armor'],
    stats: ["5% Chance To Cast Level 15 Fade When Struck","25% Chance To Cast level 15 Venom On Striking","+2 To Assassin Skills","+45% Increased Attack Speed","+20% Faster Hit Recovery","Cold Resist +30%","50% Extra Gold From Monsters"],
    level: 43,
    patch: 1.11,
    ladder: false
  },
  {
    name: 'unbending will',
    runes: [19,16,6,2,1,15],
    type: ['swords'],
    stats: ["18% Chance to cast Level 18 Taunt on striking","+3 To Combat Skills (Barbarian Only)","+20-30% Increased Attack Speed (varies)","+300-350% Enhanced Damage (varies)","+9 To Maximum Damage","+50 To Attack Rating","+75% Damage to Undead","+50 Attack Rating Against Undead","8-10% Life Stolen Per Hit (varies)","Prevent Monster Heal","+10 To Strength","+10 To Vitality","Damage Reduced By 8","+1 Light Radius","Requirements -20%"],
    level: 41,
    patch: 2.4,
    ladder: true
  },
  {
    name: 'venom',
    runes: [7,14,23],
    type: ['weapons'],
    stats: ["Ignore Target's Defense","+273 Poison Damage Over 6 Seconds","7% Mana Stolen Per Hit","Prevent Monster Heal","Hit Causes Monster To Flee 25%","Level 13 Poison Nova (11 Charges)","Level 15 Poison Explosion (27 Charges)"],
    level: 49,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'voice of reason',
    runes: [20,18,1,2],
    type: ['maces','swords'],
    stats: ["15% Chance To Cast Level 13 Frozen Orb On Striking","18% Chance To Cast Level 20 Ice Blast On Striking","+50 To Attack Rating","+220-350% Damage To Demons (varies)","+355-375% Damage To Undead (varies)","+50 To Attack Rating Against Undead","Adds 100-220 Cold Damage","-24% To Enemy Cold Resistance","+10 To Dexterity","Cannot Be Frozen","75% Extra Gold From Monsters","+1 To Light Radius"],
    level: 43,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'wealth',
    runes: [20,18,3],
    type: ['armor'],
    stats: ["+10 to Dexterity","+2 to Mana After Each Kill","300% Extra Gold From Monsters","100% Better Chance of Getting Magic Items"],
    level: 43,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'white',
    runes: [14,16],
    type: ['wands'],
    stats: ["+3 to Poison and Bone Skills (Necromancer Only)","+20% Faster Cast Rate","+2 to Bone Spear (Necromancer Only)","+4 to Skeleton Mastery (Necromancer Only)","+3 to Bone Armor (Necromancer Only)","Hit causes monster to flee 25%","+10 to vitality","+13 to mana","Magic Damage Reduced by 4"],
    level: 35,
    patch: 1.08,
    ladder: false
  },
  {
    name: 'wind',
    runes: [29,1],
    type: ['melee weapons'],
    stats: ["10% Chance To Cast Level 9 Tornado On Striking","+20% Faster Run/Walk","+40% Increased Attack Speed","+15% Faster Hit Recovery","+120-160% Enhanced Damage (varies)","-50% Target Defense","+50 To Attack Rating","Hit Blinds Target","+1 To Light Radius","Level 13 Twister (127 Charges)"],
    level: 61,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'wisdom',
    runes: [21,6,2],
    type: ['helms'],
    stats: ["+33% Piercing Attack","+15-25% Bonus to Attack Rating (varies)","4-8% Mana Stolen Per Hit (varies)","+30% Enhanced Defense","+10 Energy","15% Slower Stamina Drain","Cannot Be Frozen","+5 Mana After Each Kill","15% Damage Taken Goes to Mana"],
    level: 45,
    patch: 2.4,
    ladder: true
  },
  {
    name: 'wrath',
    runes: [21,17,30,23],
    type: ['missile weapons'],
    stats: ["30% Chance To Cast Level 1 Decrepify On Striking","5% Chance To Cast Level 10 Life Tap On Striking","+375% Damage To Demons","+100 To Attack Rating Against Demons","+250-300% Damage To Undead (varies)","Adds 85-120 Magic Damage","Adds 41-240 Lightning Damage","20% Chance of Crushing Blow","Prevent Monster Heal","+10 To Energy","Cannot Be Frozen"],
    level: 63,
    patch: 1.10,
    ladder: false
  },
  {
    name: 'zephyr',
    runes: [9,5],
    type: ['missile weapons'],
    stats: ["7% Chance to Cast Level 1 Twister When Struck","+25% Faster Run/Walk","+25% Increased Attack Speed","+33% Enhanced Damage","-25% Target Defense","+66 to Attack Rating","Adds 1-50 lightning damage","+25 Defense"],
    level: 21,
    patch: 1.08,
    ladder: false
  }
];

function statGemUp(gem,rank) {
 gem = parseInt(gem); var y = gem + 1;
 for(var x = gem + 1; x <= 5; x++) {
  rank = Math.floor(rank / 3);
  $(".statgem[data-stat-gem="+x+"]").val(rank);
 }
}

function statGemDown(gem,rank) {
 gem = parseInt(gem); var y = gem - 1;
 for(var x = gem - 1; x > 0; x--) {
  rank *= 3;
  $(".statgem[data-stat-gem="+x+"]").val(rank);
 }
}

function sortWordsLevel(a, b) {
 return ($(b).attr('data-runeword-level')) < ($(a).attr('data-runeword-level')) ? 1 : -1;    
}

function sortWordsAlphabetical(a, b) {
 return ($(b).attr('data-runeword-name')) < ($(a).attr('data-runeword-name')) ? 1 : -1;    
}

function sortRunesAlphabetical(a,b) {
 return ($(b).text()) < ($(a).text()) ? 1 : -1;
}

function sortRunesNumerical(a,b) {
 return ($(b).attr('data-rune')) < ($(a).attr('data-rune')) ? 1 : -1;
}

function filterQuery(needle,haystack) {
 var query = needle.toString().toLowerCase();
 return haystack.filter(function(object) {
  return object.name.toString().toLowerCase().indexOf(query) >= 0;
 })
}

function findMatch(find,compare) {
 return compare.filter(function(match){
  return match.runes.includes(parseInt(find));
 });
}

function findType(find,compare) {
 return compare.filter(function(match){
  return match.type.includes(find);
 });
}

function containsAll(needles, haystack) {
 for(var i = 0; i < needles.length; i++) {
  if($.inArray(needles[i], haystack) == -1) { return false }
 }
 return true;
}

function printRunes(runes) {
 var string = "";
 $.each(runes, function(i,v) {
  string += "<span data-rune='" + v + "'>" + runeArray[v].toString() + "</span>";
 });
 return string;
}

function runewordSearch(query) {
 var resultsObj = $('.runewordresults');
 resultsObj.empty();
 if(query.length > 1) {
  var matches = filterQuery(query,runewordArray);
  $.each(matches, function(index,value) {
   var insertDiv = $("<div/>").addClass("runeword").attr("data-runeword-level",value.level).attr("data-runeword-name",value.name);
   $("<p/>").addClass("name").html(value.name).appendTo(insertDiv);
   $("<p/>").addClass("type").html(value.type.toString()).appendTo(insertDiv);
   $("<p/>").addClass("runenames").html("'" + printRunes(value.runes) + "'").appendTo(insertDiv);
   $("<p/>").addClass("level").html("Required Level: " + value.level.toString()).appendTo(insertDiv);
   if(value.ladder === true) {
    $("<p/>").addClass("ladder").html("Ladder Only").appendTo(insertDiv);
   }
   $.each(value.stats, function(i,val){
    $("<p/>").addClass("stat").html(val).appendTo(insertDiv);
   });
   $(resultsObj).append(insertDiv);
  });
 }
}

function runewordLookup(runes) {
 var resultsObj = $('.runewordmatch');
 var filterObj = $('.filter span.clicked');
 var filter = $(filterObj).attr('data-filter');
 resultsObj.empty();
 var result = [];
 $.each(runes, function(i,v){
  $.each(findMatch(v,runewordArray), function(j,x){
   var matchingWords = $.grep(result, function(prop) {
    return prop.name === x.name && prop.type.toString() === x.type.toString();
   });
   if(matchingWords.length === 0){
    if(filter == 'any' || filter == 'exact' && containsAll(x.runes,runes)) { result.push(x); }
   }
  });
 });
 $.each(result,function(i,val){
  var insertDiv = $("<div/>").addClass("runeword").attr("data-runeword-level",val.level).attr("data-runeword-name",val.name);
  $("<p/>").addClass("name").html(val.name).appendTo(insertDiv);
  $("<p/>").addClass("type").html(val.type.toString()).appendTo(insertDiv);
  $("<p/>").addClass("runenames").html("'" + printRunes(val.runes) + "'").appendTo(insertDiv);
  $("<p/>").addClass("level").html("Required Level: " + val.level.toString()).appendTo(insertDiv);
  if(val.ladder === true) {
   $("<p/>").addClass("ladder").html("Ladder Only").appendTo(insertDiv);
  }
  $.each(val.stats, function(i,v){
   $("<p/>").addClass("stat").html(v).appendTo(insertDiv);
  });
  $(resultsObj).append(insertDiv);
 });
}

function runewordFilter(type) {
 var resultsObj = $('.runewordresults');
 var filterObj = $('.' + type + ' span.clicked');
 var filter = $(filterObj).attr('data-' + type);
 resultsObj.empty();
 var result = [];
 $.each(findType(type,runewordArray), function(j,x){ result.push(x); });
 $.each(result,function(i,val){
  var insertDiv = $("<div/>").addClass("runeword").attr("data-runeword-level",val.level).attr("data-runeword-name",val.name);
  $("<p/>").addClass("name").html(val.name).appendTo(insertDiv);
  $("<p/>").addClass("type").html(val.type.toString()).appendTo(insertDiv);
  $("<p/>").addClass("runenames").html("'" + printRunes(val.runes) + "'").appendTo(insertDiv);
  $("<p/>").addClass("level").html("Required Level: " + val.level.toString()).appendTo(insertDiv);
  if(val.ladder === true) {
   $("<p/>").addClass("ladder").html("Ladder Only").appendTo(insertDiv);
  }
  $.each(val.stats, function(i,v){
   $("<p/>").addClass("stat").html(v).appendTo(insertDiv);
  });
  $(resultsObj).append(insertDiv);
 });
}

$(document).ready(function() {

 var runes = $('.runes img');
 var runes2 = $('.runes2 img');
 var filters = $('.filter span');
 var runeSort = $('.sort span');
 var selects = $('.select span');
 var filterType = $('.type span');
 var filterSort = $('.fsort span');
 var runesSelected = [];

 $('.clearform').click(function() {
  $(this).closest('form')[0].reset();
 });

 $('.statgem').on("input", function() {
  var gem = $(this).attr('data-stat-gem');
  var rank = $(this).val();
  statGemUp(gem,rank);
  statGemDown(gem,rank);
 });
 
 $('form').submit(function(e){
  e.preventDefault();
 });
 
 $('input.runewordsearch').keyup(function(e){
  var query = $(this).val();
  runewordSearch(query);
  var sort = $('.fsort span.clicked').data('fsort');
  if(sort == 'levelA') {
   $(".runewordresults div").sort(sortWordsLevel).appendTo('.runewordresults');
  }
  if (sort == 'levelD') { // descending
    $(".runewordresults div").sort(function(a, b) {
      return sortWordsLevel(b, a);
    }).appendTo('.runewordresults');
  }
  if(sort == 'aA') {
   $(".runewordresults div").sort(sortWordsAlphabetical).appendTo('.runewordresults');
  }
  if (sort == 'aD') { // descending
    $(".runewordresults div").sort(function(a, b) {
      return sortWordsAlphabetical(b, a);
    }).appendTo('.runewordresults');
  }
  filterType.removeClass('clicked');
 });

 filters.click(function(){
  filters.removeClass('clicked');
  $(this).addClass('clicked');
  runewordLookup(runesSelected);
 });

  runeSort.click(function() {
    runeSort.removeClass('clicked');
    $(this).addClass('clicked');
    var sort = $(this).attr('data-sort');

    if (sort == 'aA') { // ascending alphabetical
      $(".runes div").sort(sortRunesAlphabetical).appendTo('.runes');
    }
    if (sort == 'aD') { // descending alphabetical
      $(".runes div").sort(sortRunesAlphabetical).appendTo('.runes');
      $(".runes div").each(function(i, item) {
        $('.runes').prepend(item);
      });
    }
    if (sort == 'nA') { // ascending numerical
      $(".runes div").sort(sortRunesNumerical).appendTo('.runes');
    }
    if (sort == 'nD') { // descending numerical
      $(".runes div").sort(sortRunesNumerical).appendTo('.runes');
      $(".runes div").each(function(i, item) {
        $('.runes').prepend(item);
      });
    }
  });

 selects.click(function() {
  selects.removeClass('clicked');
  $(this).addClass('clicked');
  var select = $(this).attr('data-select');
  if(select == 'all') {
   runes.addClass('clicked');
   $('.runes img.clicked').each(function() { runesSelected.push(parseInt($(this).attr('data-rune'))); });
  }
  if(select == 'none') {
   runes.removeClass('clicked');
   runesSelected = [];
  }
  if(select == 'count1') {
    runesSelected = [1,2,3,4,5,6,7,8]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'count2') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'count3') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'forge1') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'forge2') {
    runesSelected = [12,13,14,15,16,17,18,19,20,21,22]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'forge3') {
    runesSelected = [15,16,17,18,19,20,21,22,23,24,25]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'normal1') {
    runesSelected = []
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'normal2') {
    runesSelected = [1,2,3,4]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'normal3') {
    runesSelected = [1,2,3,4,5,6,7,8]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'normal4') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'normal5') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'nightmare1') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'nightmare2') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'nightmare3') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'nightmare4') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'nightmare5') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'hell1') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'hell2') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'hell3') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'hell4') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  if(select == 'hell5') {
    runesSelected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
    runes.each(function() {
      var runeValue = parseInt($(this).attr('data-rune'));
      if (runesSelected.includes(runeValue)) { $(this).addClass('clicked'); }
      else { $(this).removeClass('clicked'); }
    })
  }
  runewordLookup(runesSelected);
 });
 
 filterSort.click(function() {
  filterSort.removeClass('clicked');
  $(this).addClass('clicked');
  var sort = $(this).data('fsort');
  if(sort == 'levelA') {
   $(".runewordresults div").sort(sortWordsLevel).appendTo('.runewordresults');
   console.log('sorting runewords by level');
  }
  if (sort == 'levelD') { // descending
    $(".runewordresults div").sort(function(a, b) {
      return sortWordsLevel(b, a);
    }).appendTo('.runewordresults');
  }
  if(sort == 'aA') {
   $(".runewordresults div").sort(sortWordsAlphabetical).appendTo('.runewordresults');
   console.log('sorting runewords by name');
  }
  if (sort == 'aD') { // descending
    $(".runewordresults div").sort(function(a, b) {
      return sortWordsAlphabetical(b, a); // reverse the order for descending
    }).appendTo('.runewordresults');
  }
 });

 filterType.click(function() {
  filterType.removeClass('clicked');
  $(this).addClass('clicked');
  var type = $(this).attr('data-type');
  console.log(type);
  runewordFilter(type);
  var sort = $('.fsort span.clicked').attr('data-fsort');
  if(sort == 'level') {
   $(".runewordresults div").sort(sortWordsLevel).appendTo('.runewordresults');
  }
  if(sort == 'alpha') {
   $(".runewordresults div").sort(sortWordsAlphabetical).appendTo('.runewordresults');
  }
 });

  $(runes).click(function() {
    const thisRune = parseInt($(this).data("rune"));
    const all = $(".select span[data-select='all']");
    const none = $(".select span[data-select='none']");
    if($(this).hasClass('clicked')) {
      $(this).removeClass('clicked');
      runesSelected = $.grep(runesSelected, function(value) { return value != thisRune; });
    }
    else {
      $(this).addClass('clicked');
      runesSelected.push(parseInt(thisRune));
    }
    if(runesSelected.length == 33) { $(all).addClass('clicked'); }
    if(runesSelected.length < 33) { $(all).removeClass('clicked'); }
    if(runesSelected.length == 0) { $(none).addClass('clicked'); }
    if(runesSelected.length > 0) { $(none).removeClass('clicked'); }
    runewordLookup(runesSelected);
  });

  $(runes2).click(function() {
    const thisRune = parseInt($(this).data("rune"));
    const conversion = runeConversion[thisRune];
    let output = "";
    $('.runes2 img').removeClass('clicked');
    $(this).addClass('clicked');
    if (conversion.from) {
      const fromConversion = runeConversion[conversion.from];
      const fromExtra = fromConversion.gem ? `<div class="math">+</div> <div class="inline"><img src="/gems/${fromConversion.file}.png" title="${fromConversion.gem}" /><p>${fromConversion.gem}</p></div>` : "";
      output += `
      <div class="formula">
      <div class="count">${fromConversion.required}</div>
      <div class="times">x</div>
      <div class="inline"><img src="/runes/${runeArray[conversion.from]}.png" title="${runeArray[conversion.from]}" /><p>${runeArray[conversion.from]}</p></div>
      ${fromExtra}
      <div class="math">=</div>
      <div class="inline"><img src="/runes/${runeArray[thisRune]}.png" title="${runeArray[thisRune]}" /><p>${runeArray[thisRune]}</p></div>
      </div>
      `;
    }
    if (conversion.to) {
      const extra = conversion.gem ? `<div class="math">+</div> <div class="inline"><img src="/gems/${conversion.file}.png" title="${conversion.gem}" /><p>${conversion.gem}</p></div>` : "";
      output += `
      <div class="formula">
      <div class="count">${conversion.required}</div>
      <div class="times">x</div>
      <div class="inline"><img src="/runes/${runeArray[thisRune]}.png" title="${runeArray[thisRune]}" /><p>${runeArray[thisRune]}</p></div>
      ${extra}
      <div class="math">=</div>
      <div class="inline"><img src="/runes/${runeArray[conversion.to]}.png" title="${runeArray[conversion.to]}" /><p>${runeArray[conversion.to]}</p></div>
      </div>
      `;
    }
    $(".runewordupgrade").html(output);
  });
 
});
