import { Character } from "../interfaces/character.interface";
import { Move } from "../interfaces/moves.interface";

export const DEFAULT_TILTS: Array<Move> = [
	{
    name: "Forward tilt",
    gif: "ftilt",
  },
  {
    name: "Up tilt",
    gif: "utilt",
  },
  {
    name: "Down tilt",
    gif: "dtilt",
  },
];

export const DEFAULT_SMASHES: Array<Move> = [
	{
    name: "Forward smash",
    gif: "fsmash",
  },
  {
    name: "Up smash",
    gif: "usmash",
  },
  {
    name: "Down smash",
    gif: "dsmash",
  },
];

export const DEFAULT_AERIALS: Array<Move> = [
	{
    name: "Neutral air",
    gif: "nair",
  },
  {
    name: "Forward air",
    gif: "fair",
  },
  {
    name: "Back air",
    gif: "bair",
  },
  {
    name: "Up air",
    gif: "uair",
  },
  {
    name: "Down air",
    gif: "dair",
  },
];

export const DEFAULT_THROWS: Array<Move> = [
  {
    name: "Grab",
    gif: "grab",
  },
  {
    name: "Pummel",
    gif: "pummel",
  },
  {
    name: "Forward throw",
    gif: "fthrow",
  },
  {
    name: "Backward throw",
    gif: "bthrow",
  },
  {
    name: "Up throw",
    gif: "uthrow",
  },
  {
    name: "Down throw",
    gif: "dthrow",
  },
];

export const DEFAULT_TAUNTS: Array<Move> = [
  {
    name: "Side taunt",
    gif: "staunt",
  },
  {
    name: "Up taunt",
    gif: "utaunt",
  },
  {
    name: "Down taunt",
    gif: "dtaunt",
  },
];

export const CHARACTERS: Array<Character> = [
	{
    id: 73,
		name: "Banjo & Kazooie",
		echo: false,
		moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Egg Firing/Breegull Blaster)",
          gif: "nspecial",
        },
        {
          name: "Side special (Wonderwing)",
          gif: "sspecial",
        },
        {
          name: "Up special (Shock Spring Jump)",
          gif: "uspecial",
        },
        {
          name: "Down special (Rear Egg)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 63,
		name: "Bayonetta",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Bullet Climax)",
          gif: "nspecial",
        },
        {
          name: "Side special (Heel Slide/After Burner Kick)",
          gif: "sspecial",
        },
        {
          name: "Up special (Witch Twist)",
          gif: "uspecial",
        },
        {
          name: "Down special (Witch Time)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 14,
		name: "Bowser",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Fire Breath)",
          gif: "nspecial",
        },
        {
          name: "Side special (Flying Slam)",
          gif: "sspecial",
        },
        {
          name: "Up special (Whirling Fortress)",
          gif: "uspecial",
        },
        {
          name: "Down special (Bowser Bomb)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 58,
		name: "Bowser Jr.",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Clown Cannon)",
          gif: "nspecial",
        },
        {
          name: "Side special (Clown Kart Dash)",
          gif: "sspecial",
        },
        {
          name: "Up special (Abandon Ship)",
          gif: "uspecial",
        },
        {
          name: "Down special (Mechakoopa)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 75,
		name: "Byleth",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Failnaught)",
          gif: "nspecial",
        },
        {
          name: "Side special (Areadbhar)",
          gif: "sspecial",
        },
        {
          name: "Up special (Sword of the Creator)",
          gif: "uspecial",
        },
        {
          name: "Down special (Amyr)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 11,
		name: "Captain Falcon",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Falcon Punch)",
          gif: "nspecial",
        },
        {
          name: "Side special (Raptor Boost)",
          gif: "sspecial",
        },
        {
          name: "Up special (Falcon Dive)",
          gif: "uspecial",
        },
        {
          name: "Down special (Falcon Kick)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 25,
		name: "Chrom",
		echo: true,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Flare Blade)",
          gif: "nspecial",
        },
        {
          name: "Side special (Double-Edge Dance)",
          gif: "sspecial",
        },
        {
          name: "Up special (Soaring Slash)",
          gif: "uspecial",
        },
        {
          name: "Down special (Counter)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 61,
		name: "Cloud",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Blade Beam)",
          gif: "nspecial",
        },
        {
          name: "Side special (Cross Slash)",
          gif: "sspecial",
        },
        {
          name: "Up special (Climhazzard)",
          gif: "uspecial",
        },
        {
          name: "Down special (Limit Charge/Finishing Touch)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 62,
		name: "Corrin",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Dragon Fang Shot)",
          gif: "nspecial",
        },
        {
          name: "Side special (Dragon Lunge/Pin)",
          gif: "sspecial",
        },
        {
          name: "Up special (Dragon Ascent)",
          gif: "uspecial",
        },
        {
          name: "Down special (Counter Surge)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 13,
		name: "Daisy",
		echo: true,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Toad)",
          gif: "nspecial",
        },
        {
          name: "Side special (Daisy Bomber)",
          gif: "sspecial",
        },
        {
          name: "Up special (Daisy Parasol)",
          gif: "uspecial",
        },
        {
          name: "Down special (Turnip Pull)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 28,
		name: "Dark Pit",
		echo: true,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Silver Bow)",
          gif: "nspecial",
        },
        {
          name: "Side special (Electroshock Arm)",
          gif: "sspecial",
        },
        {
          name: "Up special (Power of Flight)",
          gif: "uspecial",
        },
        {
          name: "Down special (Guardian Orbitars)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 4,
		name: "Dark Samus",
		echo: true,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: [
        ...DEFAULT_AERIALS,
        {
          name: "Z air",
          gif: "zair",
        }
      ],
      specials: [
        {
          name: "Neutral special (Charge Shot)",
          gif: "nspecial",
        },
        {
          name: "Side special (Homing Missile/Super Missile)",
          gif: "sspecial",
        },
        {
          name: "Up special (Screw Attack)",
          gif: "uspecial",
        },
        {
          name: "Down special (Bomb)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 36,
		name: "Diddy Kong",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Peanut Popgun)",
          gif: "nspecial",
        },
        {
          name: "Side special (Monkey Flip)",
          gif: "sspecial",
        },
        {
          name: "Up special (Rocketbarrel Boost)",
          gif: "uspecial",
        },
        {
          name: "Down special (Banana Peel)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 2,
		name: "Donkey Kong",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Giant Punch)",
          gif: "nspecial",
        },
        {
          name: "Side special (Headbutt)",
          gif: "sspecial",
        },
        {
          name: "Up special (Spinning Kong)",
          gif: "uspecial",
        },
        {
          name: "Down special (Hand Slap)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 18,
		name: "Dr. Mario",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Megavitamin Pill)",
          gif: "nspecial",
        },
        {
          name: "Side special (Super Sheet)",
          gif: "sspecial",
        },
        {
          name: "Up special (Super Jump Punch)",
          gif: "uspecial",
        },
        {
          name: "Down special (Dr. Tornado)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 59,
		name: "Duck Hunt",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Trick Shot)",
          gif: "nspecial",
        },
        {
          name: "Side special (Clay Shooting)",
          gif: "sspecial",
        },
        {
          name: "Up special (Duck Jump)",
          gif: "uspecial",
        },
        {
          name: "Down special (Wild Gunman)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 20,
		name: "Falco",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Blaster)",
          gif: "nspecial",
        },
        {
          name: "Side special (Falco Phantasm)",
          gif: "sspecial",
        },
        {
          name: "Up special (Fire Bird)",
          gif: "uspecial",
        },
        {
          name: "Down special (Reflector)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 7,
		name: "Fox",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Blaster)",
          gif: "nspecial",
        },
        {
          name: "Side special (Fox Illusion)",
          gif: "sspecial",
        },
        {
          name: "Up special (Fire Fox)",
          gif: "uspecial",
        },
        {
          name: "Down special (Reflector)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 23,
		name: "Ganondorf",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Warlock Punch)",
          gif: "nspecial",
        },
        {
          name: "Side special (Flame Choke)",
          gif: "sspecial",
        },
        {
          name: "Up special (Dark Dive)",
          gif: "uspecial",
        },
        {
          name: "Down special (Wizard's Foot)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 50,
		name: "Greninja",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Water Shuriken)",
          gif: "nspecial",
        },
        {
          name: "Side special (Shadow Sneak)",
          gif: "sspecial",
        },
        {
          name: "Up special (Hydro Pump)",
          gif: "uspecial",
        },
        {
          name: "Down special (Substitute)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 72,
		name: "Hero",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Frizz/Frizzle/Kafrizz)",
          gif: "nspecial",
        },
        {
          name: "Side special (Zap/Zapple/Kazap)",
          gif: "sspecial",
        },
        {
          name: "Up special (Whoosh/Swhoosh/Kaswhoosh)",
          gif: "uspecial",
        },
        {
          name: "Down special (Menu/Select)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 15,
		name: "Ice Climbers",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Ice Shot)",
          gif: "nspecial",
        },
        {
          name: "Side special (Squal Hammer)",
          gif: "sspecial",
        },
        {
          name: "Up special (Belay)",
          gif: "uspecial",
        },
        {
          name: "Down special (Blizzard)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 32,
		name: "Ike",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Eruption)",
          gif: "nspecial",
        },
        {
          name: "Side special (Quickdraw)",
          gif: "sspecial",
        },
        {
          name: "Up special (Aether)",
          gif: "uspecial",
        },
        {
          name: "Down special (Counter)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 69,
		name: "Incineroar",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Darkest Lariat)",
          gif: "nspecial",
        },
        {
          name: "Side special (Alolan Whip)",
          gif: "sspecial",
        },
        {
          name: "Up special (Cross Chop)",
          gif: "uspecial",
        },
        {
          name: "Down special (Revenge)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 64,
		name: "Inkling",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Splattershot)",
          gif: "nspecial",
        },
        {
          name: "Side special (Splat Roller)",
          gif: "sspecial",
        },
        {
          name: "Up special (Super Jump)",
          gif: "uspecial",
        },
        {
          name: "Down special (Splat Bomb)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 68,
		name: "Isabelle",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Pocket)",
          gif: "nspecial",
        },
        {
          name: "Side special (Fishing Rod)",
          gif: "sspecial",
        },
        {
          name: "Up special (Balloon Trip)",
          gif: "uspecial",
        },
        {
          name: "Down special (Lloid Trap)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 12,
		name: "Jigglypuff",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Rollout)",
          gif: "nspecial",
        },
        {
          name: "Side special (Pound)",
          gif: "sspecial",
        },
        {
          name: "Up special (Sing)",
          gif: "uspecial",
        },
        {
          name: "Down special (Rest)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 71,
		name: "Joker",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Gun)",
          gif: "nspecial",
        },
        {
          name: "Side special (Eiha/Eigaon)",
          gif: "sspecial",
        },
        {
          name: "Up special (Grappling Hook/Wings of Rebellion)",
          gif: "uspecial",
        },
        {
          name: "Down special (Rebel's Guard/Tetrakarn/Makarakarn)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 81,
		name: "Kazuya",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 10-hit combo",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Devil Blaster)",
          gif: "nspecial",
        },
        {
          name: "Side special (Devil Fist)",
          gif: "sspecial",
        },
        {
          name: "Up special (Devil Wings)",
          gif: "uspecial",
        },
        {
          name: "Down special (Heaven's Door)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
      inputMoves: [
        {
          name: "Down-Forward Tilt",
          gif: "dftilt",
        },
        {
          name: "Down-Back Tilt",
          gif: "dbtilt",
        },
        {
          name: "Back Tilt",
          gif: "btilt",
        },
        {
          name: "Up-Back Tilt",
          gif: "ubtilt",
        },
        {
          name: "Up-Forward Tilt",
          gif: "uftilt",
        },
        {
          name: "Crouching Down-Forward Tilt",
          gif: "cdftilt",
        },
        {
          name: "Crouching Down Tilt",
          gif: "cdtilt",
        },
        {
          name: "Crouching Down-Back Tilt",
          gif: "cdbtilt",
        },
        {
          name: "Flash Punch Combo",
          gif: "flash-punch",
        },
        {
          name: "Gates of Hell",
          gif: "gates-of-hell",
        },
        {
          name: "Double Dash Attack",
          gif: "double-dash-attack",
        },
        {
          name: "Uncrouching Attack",
          gif: "uncrouching-attack",
        },
        {
          name: "Wind God Fist",
          gif: "wgf",
        },
        {
          name: "Electric Wind God Fist",
          gif: "ewgf",
        },
        {
          name: "Dragon Uppercut",
          gif: "dragon-uppercut",
        },
        {
          name: "Spinning Dragon To Left Hook",
          gif: "sd-lefthook",
        },
      ],
    },
	},
	{
    id: 60,
		name: "Ken",
		echo: true,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3 (Light)",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Hadouken)",
          gif: "nspecial",
        },
        {
          name: "Side special (Tatsumaki Senpukyaku)",
          gif: "sspecial",
        },
        {
          name: "Up special (Shoryuken)",
          gif: "uspecial",
        },
        {
          name: "Down special (Focus Attack)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
      inputMoves: [
        {
          name: "Nata Otoshi Geri",
          gif: "nata-otoshi-geri",
        },
        {
          name:  "Oosoto Mawashi Geri",
          gif: "oosoto-mawashi-geri",
        },
      ],
    },
	},
	{
    id: 39,
		name: "King Dedede",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Inhale)",
          gif: "nspecial",
        },
        {
          name: "Side special (Gordo Throw)",
          gif: "sspecial",
        },
        {
          name: "Up special (Super Dedede Jump)",
          gif: "uspecial",
        },
        {
          name: "Down special (Jet Hammer)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 67,
		name: "King K. Rool",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Blunderbuss Kannonball/Vacuum)",
          gif: "nspecial",
        },
        {
          name: "Side special (Crownerang)",
          gif: "sspecial",
        },
        {
          name: "Up special (Propellerpack)",
          gif: "uspecial",
        },
        {
          name: "Down special (Gut Check)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 6,
		name: "Kirby",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Inhale/Copy/Spit)",
          gif: "nspecial",
        },
        {
          name: "Side special (Hammer)",
          gif: "sspecial",
        },
        {
          name: "Up special (Final Cutter)",
          gif: "uspecial",
        },
        {
          name: "Down special (Stone)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 3,
		name: "Link",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Hero's Bow)",
          gif: "nspecial",
        },
        {
          name: "Side special (Boomerang)",
          gif: "sspecial",
        },
        {
          name: "Up special (Spin Attack)",
          gif: "uspecial",
        },
        {
          name: "Down special (Remote Bomb)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 49,
		name: "Little Mac",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Straight Lunge/K.O. Punch)",
          gif: "nspecial",
        },
        {
          name: "Side special (Jolt Haymaker)",
          gif: "sspecial",
        },
        {
          name: "Up special (Rising Uppercut)",
          gif: "uspecial",
        },
        {
          name: "Down special (Slip Counter)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 41,
		name: "Lucario",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Aura Sphere)",
          gif: "nspecial",
        },
        {
          name: "Side special (Force Palm)",
          gif: "sspecial",
        },
        {
          name: "Up special (Extreme Speed)",
          gif: "uspecial",
        },
        {
          name: "Down special (Double Team)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 37,
		name: "Lucas",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: [
        ...DEFAULT_AERIALS,
        {
          name: "Z air",
          gif: "zair",
        }
      ],
      specials: [
        {
          name: "Neutral special (PK Freeze)",
          gif: "nspecial",
        },
        {
          name: "Side special (PK Fire)",
          gif: "sspecial",
        },
        {
          name: "Up special (PK Thuner)",
          gif: "uspecial",
        },
        {
          name: "Down special (PSI Magnet)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 21,
		name: "Lucina",
		echo: true,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Shieldbreaker)",
          gif: "nspecial",
        },
        {
          name: "Side special (Dancing Blade)",
          gif: "sspecial",
        },
        {
          name: "Up special (Dolphin Slash)",
          gif: "uspecial",
        },
        {
          name: "Down special (Counter)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 9,
		name: "Luigi",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: [
        ...DEFAULT_AERIALS,
        {
          name: "Z air",
          gif: "zair",
        }
      ],
      specials: [
        {
          name: "Neutral special (Fireball)",
          gif: "nspecial",
        },
        {
          name: "Side special (Green Missile)",
          gif: "sspecial",
        },
        {
          name: "Up special (Super Jump Punch)",
          gif: "uspecial",
        },
        {
          name: "Down special (Luigi Cyclone)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 1,
		name: "Mario",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Fireball)",
          gif: "nspecial",
        },
        {
          name: "Side special (Cape)",
          gif: "sspecial",
        },
        {
          name: "Up special (Super Jump Punch)",
          gif: "uspecial",
        },
        {
          name: "Down special (F.L.U.D.D.)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 21,
		name: "Marth",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Shieldbreaker)",
          gif: "nspecial",
        },
        {
          name: "Side special (Dancing Blade)",
          gif: "sspecial",
        },
        {
          name: "Up special (Dolphin Slash)",
          gif: "uspecial",
        },
        {
          name: "Down special (Counter)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 46,
		name: "Mega Man",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Metal Blade)",
          gif: "nspecial",
        },
        {
          name: "Side special (Crash Bomb)",
          gif: "sspecial",
        },
        {
          name: "Up special (Rush Coil)",
          gif: "uspecial",
        },
        {
          name: "Down special (Leaf Shield)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 27,
		name: "Meta Knight",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Mach Tornado)",
          gif: "nspecial",
        },
        {
          name: "Side special (Drill Rush)",
          gif: "sspecial",
        },
        {
          name: "Up special (Shuttle Loop)",
          gif: "uspecial",
        },
        {
          name: "Down special (Dimensional Cape)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 24,
		name: "Mewtwo",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Shadow Ball)",
          gif: "nspecial",
        },
        {
          name: "Side special (Confusion)",
          gif: "sspecial",
        },
        {
          name: "Up special (Teleport)",
          gif: "uspecial",
        },
        {
          name: "Down special (Disable)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 51,
		name: "Mii Brawler",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special 1 (Shot Put)",
          gif: "nspecial-1",
        },
        {
          name: "Neutral special 2 (Flashing Mach Punch)",
          gif: "nspecial-2",
        },
        {
          name: "Neutral special 3 (Exploding Side Kick)",
          gif: "nspecial-3",
        },
        {
          name: "Side special 1 (Onslaught)",
          gif: "sspecial-1",
        },
        {
          name: "Side special 2 (Burning Dropkick)",
          gif: "sspecial-2",
        },
        {
          name: "Side special 3 (Suplex)",
          gif: "sspecial-3",
        },
        {
          name: "Up special 1 (Soaring Axe Kick)",
          gif: "uspecial-1",
        },
        {
          name: "Up special 2 (Helicopter Kick)",
          gif: "uspecial-2",
        },
        {
          name: "Up special 3 (Thrust Uppercut)",
          gif: "uspecial-3",
        },
        {
          name: "Down special 1 (Head-On Assault)",
          gif: "dspecial-1",
        },
        {
          name: "Down special 2 (Feint Jump)",
          gif: "dspecial-2",
        },
        {
          name: "Down special 3 (Counter Throw)",
          gif: "dspecial-3",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 53,
		name: "Mii Gunner",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special 1 (Charge Blast)",
          gif: "nspecial-1",
        },
        {
          name: "Neutral special 2 (Laser Blaze)",
          gif: "nspecial-2",
        },
        {
          name: "Neutral special 3 (Grenade Launch)",
          gif: "nspecial-3",
        },
        {
          name: "Side special 1 (Flame Pillar)",
          gif: "sspecial-1",
        },
        {
          name: "Side special 2 (Stealth Burst)",
          gif: "sspecial-2",
        },
        {
          name: "Side special 3 (Gunner Missile)",
          gif: "sspecial-3",
        },
        {
          name: "Up special 1 (Lunar Launch)",
          gif: "uspecial-1",
        },
        {
          name: "Up special 2 (Cannon Jump Kick)",
          gif: "uspecial-2",
        },
        {
          name: "Up special 3 (Arm Rocket)",
          gif: "uspecial-3",
        },
        {
          name: "Down special 1 (Echo Reflector)",
          gif: "dspecial-1",
        },
        {
          name: "Down special 2 (Bomb Drop)",
          gif: "dspecial-2",
        },
        {
          name: "Down special 3 (Absorbing Vortex)",
          gif: "dspecial-3",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 52,
		name: "Mii Swordfighter",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special 1 (Gale Strike)",
          gif: "nspecial-1",
        },
        {
          name: "Neutral special 2 (Shuriken of Light)",
          gif: "nspecial-2",
        },
        {
          name: "Neutral special 3 (Blurring Blade)",
          gif: "nspecial-3",
        },
        {
          name: "Side special 1 (Airborne Assault)",
          gif: "sspecial-1",
        },
        {
          name: "Side special 2 (Gale Stab)",
          gif: "sspecial-2",
        },
        {
          name: "Side special 3 (Chakram)",
          gif: "sspecial-3",
        },
        {
          name: "Up special 1 (Stone Scabbard)",
          gif: "uspecial-1",
        },
        {
          name: "Up special 2 (Skyward Slash Dash)",
          gif: "uspecial-2",
        },
        {
          name: "Up special 3 (Hero's Spin)",
          gif: "uspecial-3",
        },
        {
          name: "Down special 1 (Blade Counter)",
          gif: "dspecial-1",
        },
        {
          name: "Down special 2 (Reversal Slash)",
          gif: "dspecial-2",
        },
        {
          name: "Down special 3 (Power Thrust)",
          gif: "dspecial-3",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 76,
		name: "Min Min",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Up special (Arms Jump/Arms Hook)",
          gif: "uspecial",
        },
        {
          name: "Down special (Arms Change)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 26,
		name: "Mr. Game & Watch",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Chef)",
          gif: "nspecial",
        },
        {
          name: "Side special (Judge)",
          gif: "sspecial",
        },
        {
          name: "Up special (Fire)",
          gif: "uspecial",
        },
        {
          name: "Down special (Oil Panic)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 79,
		name: "Mythra",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Lightning Buster)",
          gif: "nspecial",
        },
        {
          name: "Side special (Photon Edge)",
          gif: "sspecial",
        },
        {
          name: "Up special (Ray of Punishment/Chroma Dust)",
          gif: "uspecial",
        },
        {
          name: "Down special (Swap to Pyra)",
          gif: "dspecial",
        },
        {
          name: "Foresight",
          gif: "foresight",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 10,
		name: "Ness",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (PK Flash)",
          gif: "nspecial",
        },
        {
          name: "Side special (PK Fire)",
          gif: "sspecial",
        },
        {
          name: "Up special (PK Thuner)",
          gif: "uspecial",
        },
        {
          name: "Down special (PSI Magnet)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 40,
		name: "Olimar",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Pikmin Pluck)",
          gif: "nspecial",
        },
        {
          name: "Side special (Pikmin Throw)",
          gif: "sspecial",
        },
        {
          name: "Up special (Winged Pikmin)",
          gif: "uspecial",
        },
        {
          name: "Down special (Pikmin Order/Whistle)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 55,
		name: "PAC-MAN",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Bonus Fruit)",
          gif: "nspecial",
        },
        {
          name: "Side special (Power Pellet)",
          gif: "sspecial",
        },
        {
          name: "Up special (Pac-Jump)",
          gif: "uspecial",
        },
        {
          name: "Down special (Fire Hydrant)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 54,
		name: "Palutena",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Autoreticle)",
          gif: "nspecial",
        },
        {
          name: "Side special (Explosive Flame)",
          gif: "sspecial",
        },
        {
          name: "Up special (Warp)",
          gif: "uspecial",
        },
        {
          name: "Down special (Counter)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 13,
		name: "Peach",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Toad)",
          gif: "nspecial",
        },
        {
          name: "Side special (Peach Bomber)",
          gif: "sspecial",
        },
        {
          name: "Up special (Peach Parasol)",
          gif: "uspecial",
        },
        {
          name: "Down special (Turnip Pull)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 19,
		name: "Pichu",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Thunderjolt)",
          gif: "nspecial",
        },
        {
          name: "Side special (Skullbash)",
          gif: "sspecial",
        },
        {
          name: "Up special (Agility)",
          gif: "uspecial",
        },
        {
          name: "Down special (Thunder)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 8,
		name: "Pikachu",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Thunderjolt)",
          gif: "nspecial",
        },
        {
          name: "Side special (Skullbash)",
          gif: "sspecial",
        },
        {
          name: "Up special (Quick Attack)",
          gif: "uspecial",
        },
        {
          name: "Down special (Thunder)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 70,
		name: "Piranha Plant",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
        {
          name: "Footstool attack",
          gif: "footstool-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Ptooie)",
          gif: "nspecial",
        },
        {
          name: "Side special (Poison Breath)",
          gif: "sspecial",
        },
        {
          name: "Up special (Piranhacopter)",
          gif: "uspecial",
        },
        {
          name: "Down special (Long Stem Strike)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 28,
		name: "Pit",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Palutena's Bow)",
          gif: "nspecial",
        },
        {
          name: "Side special (Upperdash Arm)",
          gif: "sspecial",
        },
        {
          name: "Up special (Power of Flight)",
          gif: "uspecial",
        },
        {
          name: "Down special (Guardian Orbitars)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 33,
		name: "Squirtle",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Water Gun)",
          gif: "nspecial",
        },
        {
          name: "Side special (Withdraw)",
          gif: "sspecial",
        },
        {
          name: "Up special (Waterfall)",
          gif: "uspecial",
        },
        {
          name: "Down special (Pokémon Change)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 34,
		name: "Ivysaur",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Bullet Seed)",
          gif: "nspecial",
        },
        {
          name: "Side special (Razor Leaf)",
          gif: "sspecial",
        },
        {
          name: "Up special (Vinewhip)",
          gif: "uspecial",
        },
        {
          name: "Down special (Pokémon Change)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 35,
		name: "Charizard",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Flamethrower)",
          gif: "nspecial",
        },
        {
          name: "Side special (Flare Blitz)",
          gif: "sspecial",
        },
        {
          name: "Up special (Fly)",
          gif: "uspecial",
        },
        {
          name: "Down special (Pokémon Change)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 80,
		name: "Pyra",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Flame Nova)",
          gif: "nspecial",
        },
        {
          name: "Side special (Blazing End)",
          gif: "sspecial",
        },
        {
          name: "Up special (Prominence Revolt)",
          gif: "uspecial",
        },
        {
          name: "Down special (Swap to Mytrha)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 66,
		name: "Richter",
		echo: true,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
        {
          name: "Whip Dangle",
          gif: "whip-dangle",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Axe)",
          gif: "nspecial",
        },
        {
          name: "Side special (Cross)",
          gif: "sspecial",
        },
        {
          name: "Up special (Uppercut)",
          gif: "uspecial",
        },
        {
          name: "Down special (Holy Water)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 65,
		name: "Ridley",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Plasma Breath)",
          gif: "nspecial",
        },
        {
          name: "Side special (Space Pirate Rush)",
          gif: "sspecial",
        },
        {
          name: "Up special (Wing Blitz)",
          gif: "uspecial",
        },
        {
          name: "Down special (Skewer)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 42,
		name: "R.O.B.",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Robo Beam)",
          gif: "nspecial",
        },
        {
          name: "Side special (Arm Rotor)",
          gif: "sspecial",
        },
        {
          name: "Up special (Robo Burner)",
          gif: "uspecial",
        },
        {
          name: "Down special (Gyro)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 56,
		name: "Robin",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Thunder/Elthunder/Arcthuner/Thoron)",
          gif: "nspecial",
        },
        {
          name: "Side special (Arcfire)",
          gif: "sspecial",
        },
        {
          name: "Up special (Elwind)",
          gif: "uspecial",
        },
        {
          name: "Down special (Nosferatu)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 48,
		name: "Rosalina",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Luma Shot/Luma Recall)",
          gif: "nspecial",
        },
        {
          name: "Side special (Star Bits)",
          gif: "sspecial",
        },
        {
          name: "Up special (Launch Star)",
          gif: "uspecial",
        },
        {
          name: "Down special (Gravitational Pull)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 25,
		name: "Roy",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Flare Blade)",
          gif: "nspecial",
        },
        {
          name: "Side special (Double-Edge Dance)",
          gif: "sspecial",
        },
        {
          name: "Up special (Blazer)",
          gif: "uspecial",
        },
        {
          name: "Down special (Counter)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 60,
		name: "Ryu",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3 (Light)",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Hadouken)",
          gif: "nspecial",
        },
        {
          name: "Side special (Tatsumaki Senpukyaku)",
          gif: "sspecial",
        },
        {
          name: "Up special (Shoryuken)",
          gif: "uspecial",
        },
        {
          name: "Down special (Focus Attack)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
      inputMoves: [
        {
          name: "Shakunetsu Hadouken",
          gif: "shakunetsu-hadouken",
        },
      ],
    },
	},
	{
    id: 4,
		name: "Samus",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: [
        ...DEFAULT_AERIALS,
        {
          name: "Z air",
          gif: "zair",
        }
      ],
      specials: [
        {
          name: "Neutral special (Charge Shot)",
          gif: "nspecial",
        },
        {
          name: "Side special (Homing Missile/Super Missile)",
          gif: "sspecial",
        },
        {
          name: "Up special (Screw Attack)",
          gif: "uspecial",
        },
        {
          name: "Down special (Bomb)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 78,
		name: "Sephiroth",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Flare/Megaflare/Gigaflare)",
          gif: "nspecial",
        },
        {
          name: "Side special (Shadow Flare)",
          gif: "sspecial",
        },
        {
          name: "Up special (Blade Dash/Octaslash)",
          gif: "uspecial",
        },
        {
          name: "Down special (Scintilla)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 16,
		name: "Sheik",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Needle Storm)",
          gif: "nspecial",
        },
        {
          name: "Side special (Burst Grenade)",
          gif: "sspecial",
        },
        {
          name: "Up special (Vanish)",
          gif: "uspecial",
        },
        {
          name: "Down special (Bouncing Fish)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 57,
		name: "Shulk",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Monado Arts)",
          gif: "nspecial",
        },
        {
          name: "Side special (Back Slash)",
          gif: "sspecial",
        },
        {
          name: "Up special (Air Slash)",
          gif: "uspecial",
        },
        {
          name: "Down special (Vision)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 66,
		name: "Simon",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
        {
          name: "Whip Dangle",
          gif: "whip-dangle",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Axe)",
          gif: "nspecial",
        },
        {
          name: "Side special (Cross)",
          gif: "sspecial",
        },
        {
          name: "Up special (Uppercut)",
          gif: "uspecial",
        },
        {
          name: "Down special (Holy Water)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 31,
		name: "Snake",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Grenade)",
          gif: "nspecial",
        },
        {
          name: "Side special (Nikita)",
          gif: "sspecial",
        },
        {
          name: "Up special (Cypher)",
          gif: "uspecial",
        },
        {
          name: "Down special (C4)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 38,
		name: "Sonic",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Homing Attack)",
          gif: "nspecial",
        },
        {
          name: "Side special (Spin Dash)",
          gif: "sspecial",
        },
        {
          name: "Up special (Spring Dash)",
          gif: "uspecial",
        },
        {
          name: "Down special (Spin Charge)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 82,
		name: "Sora",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Firaga/Thundaga/Blizzaga)",
          gif: "nspecial",
        },
        {
          name: "Side special (Sonic Blade)",
          gif: "sspecial",
        },
        {
          name: "Up special (Aerial Sweep)",
          gif: "uspecial",
        },
        {
          name: "Down special (Counterattack)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 77,
		name: "Steve",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Mine/Place Block)",
          gif: "nspecial",
        },
        {
          name: "Side special (Minecart)",
          gif: "sspecial",
        },
        {
          name: "Up special (Elytra)",
          gif: "uspecial",
        },
        {
          name: "Down special (TNT)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 74,
		name: "Terry",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Power Wave)",
          gif: "nspecial",
        },
        {
          name: "Forward special (Burning Knuckle)",
          gif: "fspecial",
        },
        {
          name: "Back special (Crack Shoot)",
          gif: "bspecial",
        },
        {
          name: "Up special (Rising Tackle)",
          gif: "uspecial",
        },
        {
          name: "Down special (Power Dunk)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
      inputMoves: [
        {
          name: "Power Geyser",
          gif: "power-geyser",
        },
        {
          name: "Buster Wolf",
          gif: "buster-wolf",
        },
      ],
    },
	},
	{
    id: 43,
		name: "Toon Link",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: [
        ...DEFAULT_AERIALS,
        {
          name: "Z air",
          gif: "zair",
        }
      ],
      specials: [
        {
          name: "Neutral special (Hero's Bow)",
          gif: "nspecial",
        },
        {
          name: "Side special (Boomerang)",
          gif: "sspecial",
        },
        {
          name: "Up special (Spin Attack)",
          gif: "uspecial",
        },
        {
          name: "Down special (Bomb Pull)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 45,
		name: "Villager",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Pocket)",
          gif: "nspecial",
        },
        {
          name: "Side special (Lloid Rocket)",
          gif: "sspecial",
        },
        {
          name: "Up special (Balloon Trip)",
          gif: "uspecial",
        },
        {
          name: "Down special (Timber Plant/Timber Water/Timber Axe)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 30,
		name: "Wario",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Chomp)",
          gif: "nspecial",
        },
        {
          name: "Side special (Wario Bike)",
          gif: "sspecial",
        },
        {
          name: "Up special (Corkscrew)",
          gif: "uspecial",
        },
        {
          name: "Down special (Wario Waft)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 47,
		name: "Wii Fit Trainer",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Sun Salutation)",
          gif: "nspecial",
        },
        {
          name: "Side special (Header)",
          gif: "sspecial",
        },
        {
          name: "Up special (Super Hoop)",
          gif: "uspecial",
        },
        {
          name: "Down special (Deep Breathing)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 44,
		name: "Wolf",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Blaster)",
          gif: "nspecial",
        },
        {
          name: "Side special (Wolf Flash)",
          gif: "sspecial",
        },
        {
          name: "Up special (Fire Wolf)",
          gif: "uspecial",
        },
        {
          name: "Down special (Reflector)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 5,
		name: "Yoshi",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Egg Lay)",
          gif: "nspecial",
        },
        {
          name: "Side special (Egg Roll)",
          gif: "sspecial",
        },
        {
          name: "Up special (Egg Throw)",
          gif: "uspecial",
        },
        {
          name: "Down special (Yoshi Bomb)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 22,
		name: "Young Link",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: [
        ...DEFAULT_AERIALS,
        {
          name: "Z air",
          gif: "zair",
        }
      ],
      specials: [
        {
          name: "Neutral special (Fire Arrow)",
          gif: "nspecial",
        },
        {
          name: "Side special (Boomerang)",
          gif: "sspecial",
        },
        {
          name: "Up special (Spin Attack)",
          gif: "uspecial",
        },
        {
          name: "Down special (Bomb Pull)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 17,
		name: "Zelda",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Rapid jab",
          gif: "rapid-jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: DEFAULT_AERIALS,
      specials: [
        {
          name: "Neutral special (Nayru's Love)",
          gif: "nspecial",
        },
        {
          name: "Side special (Din's Fire)",
          gif: "sspecial",
        },
        {
          name: "Up special (Farore's Wind)",
          gif: "uspecial",
        },
        {
          name: "Down special (Phantom Slash)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
	{
    id: 29,
		name: "Zero Suit Samus",
		echo: false,
    moves: {
      basicMoves: [
        {
          name: "Jab 1, 2, 3",
          gif: "jab",
        },
        {
          name: "Dash attack",
          gif: "dash-attack",
        },
      ],
      tilts: DEFAULT_TILTS,
      smashes: DEFAULT_SMASHES,
      aerials: [
        ...DEFAULT_AERIALS,
        {
          name: "Z air",
          gif: "zair",
        }
      ],
      specials: [
        {
          name: "Neutral special (Paralyzer)",
          gif: "nspecial",
        },
        {
          name: "Side special (Plasma Whip)",
          gif: "sspecial",
        },
        {
          name: "Up special (Boost Kick)",
          gif: "uspecial",
        },
        {
          name: "Down special (Flip Jump)",
          gif: "dspecial",
        },
      ],
      throws: DEFAULT_THROWS,
      taunts: DEFAULT_TAUNTS,
    },
	},
];
