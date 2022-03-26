const basicMoves = [
	"Jab",
	"Dash attack",
];

const tilts = [
	"Forward tilt",
	"Up tilt",
	"Down tilt",
];

const smashes = [
	"Forward smash",
	"Up smash",
	"Down smash",
];

const aerials = [
	"Neutral air",
	"Forward air",
	"Back air",
	"Up air",
	"Down air",
];

const grabs = [
	"Grab",
];

const grabModifiers = [
	"Dash grab",
	"Pivot grab",
	"Pummel",
];

const throws = [
	"Forward throw",
	"Backward throw",
	"Up throw",
	"Down throw",
];

const taunts = [
	"Side taunt",
	"Up taunt",
	"Down taunt",
];

const defaultMoves = [].concat(tilts, smashes, aerials, basicMoves);

const moves = {
	defaultMoves,
	grabs,
	grabModifiers,
	throws,
	taunts,
};

const characters = [
	{
		name: "Banjo & Kazooie",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Egg Firing/Breegull Blaster)",
			"Side special (Wonderwing)",
			"Up special (Shock Spring Jump)",
			"Down special (Rear Egg)",
		],
	},
	{
		name: "Bayonetta",
		echo: false,
		moves: [
			"Neutral special (Bullet Climax)",
			"Side special (Heel Slide/After Burner Kick)",
			"Up special (Witch Twist)",
			"Down special (Witch Time)",
		],
	},
	{
		name: "Bowser",
		echo: false,
		moves: [
			"Neutral special (Fire Breath)",
			"Side special (Flying Slam)",
			"Up special (Whirling Fortress)",
			"Down special (Bowser Bomb)",
		],
	},
	{
		name: "Bowser Jr.",
		echo: false,
		moves: [
			"Neutral special (Clown Cannon)",
			"Side special (Clown Kart Dash)",
			"Up special (Abandon Ship)",
			"Down special (Mechakoopa)",
		],
	},
	{
		name: "Byleth",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Failnaught)",
			"Side special (Areadbhar)",
			"Up special (Sword of the Creator)",
			"Down special (Amyr)",
		],
	},
	{
		name: "Captain Falcon",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Falcon Punch)",
			"Side special (Raptor Boost)",
			"Up special (Falcon Dive)",
			"Down special (Falcon Kick)",
		],
	},
	{
		name: "Chrom",
		echo: true,
		moves: [
			"Neutral special (Flare Blade)",
			"Side special (Double-Edge Dance)",
			"Up special (Soaring Slash)",
			"Down special (Counter)",
		],
	},
	{
		name: "Cloud",
		echo: false,
		moves: [
			"Neutral special (Blade Beam)",
			"Side special (Cross Slash)",
			"Up special (Climhazzard)",
			"Down special (Limit Charge/Finishing Touch)",
		],
	},
	{
		name: "Corrin",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Dragon Fang Shot)",
			"Side special (Dragon Lunge/Pin)",
			"Up special (Dragon Ascent)",
			"Down special (Counter Surge)",
		],
	},
	{
		name: "Daisy",
		echo: true,
		moves: [
			"Neutral special (Toad)",
			"Side special (Daisy Bomber)",
			"Up special (Daisy Parasol)",
			"Down special (Turnip Pull)",
		],
	},
	{
		name: "Dark Pit",
		echo: true,
		moves: [
			"Rapid jab",
			"Neutral special (Silver Bow)",
			"Side special (Electroshock Arm)",
			"Up special (Power of Flight)",
			"Down special (Guardian Orbitars)",
		],
	},
	{
		name: "Dark Samus",
		echo: true,
		moves: [
			"Zair",
			"Neutral special (Charge Shot)",
			"Side special (Homing Missile/Super Missile)",
			"Up special (Screw Attack)",
			"Down special (Bomb)",
		],
	},
	{
		name: "Diddy Kong",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Peanut Popgun)",
			"Side special (Monkey Flip)",
			"Up special (Rocketbarrel Boost)",
			"Down special (Banana Peel)",
		],
	},
	{
		name: "Donkey Kong",
		echo: false,
		moves: [
			"Neutral special (Giant Punch)",
			"Side special (Headbutt)",
			"Up special (Spinning Kong)",
			"Down special (Hand Slap)",
		],
	},
	{
		name: "Dr. Mario",
		echo: false,
		moves: [
			"Neutral special (Megavitamin Pill)",
			"Side special (Super Sheet)",
			"Up special (Super Jump Punch)",
			"Down special (Dr. Tornado)",
		],
	},
	{
		name: "Duck Hunt",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Trick Shot)",
			"Side special (Clay Shooting)",
			"Up special (Duck Jump)",
			"Down special (Wild Gunman)",
		],
	},
	{
		name: "Falco",
		echo: false,
		moves: [
			"Neutral special (Blaster)",
			"Side special (Falco Phantasm)",
			"Up special (Fire Bird)",
			"Down special (Reflector)",
		],
	},
	{
		name: "Fox",
		echo: false,
		moves: [
			"Neutral special (Blaster)",
			"Side special (Fox Illusion)",
			"Up special (Fire Fox)",
			"Down special (Reflector)",
		],
	},
	{
		name: "Ganondorf",
		echo: false,
		moves: [
			"Neutral special (Warlock Punch)",
			"Side special (Flame Choke)",
			"Up special (Dark Dive)",
			"Down special (Wizard's Foot)",
		],
	},
	{
		name: "Greninja",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Water Shuriken)",
			"Side special (Shadow Sneak)",
			"Up special (Hydro Pump)",
			"Down special (Substitute)",
		],
	},
	{
		name: "Hero",
		echo: false,
		moves: [
			"Neutral special (Frizz/Frizzle/Kafrizz)",
			"Side special (Zap/Zapple/Kazap)",
			"Up special (Whoosh/Swhoosh/Kaswhoosh)",
			"Down special (Menu/Select)",
		],
	},
	{
		name: "Ice Climbers",
		echo: false,
		moves: [
			"Neutral special (Ice Shot)",
			"Side special (Squal Hammer)",
			"Up special (Belay)",
			"Down special (Blizzard)",
		],
	},
	{
		name: "Ike",
		echo: false,
		moves: [
			"Neutral special (Eruption)",
			"Side special (Quickdraw)",
			"Up special (Aether)",
			"Down special (Counter)",
		],
	},
	{
		name: "Incineroar",
		echo: false,
		moves: [
			"Neutral special (Darkest Lariat)",
			"Side special (Alolan Whip)",
			"Up special (Cross Chop)",
			"Down special (Revenge)",
		],
	},
	{
		name: "Inkling",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Splattershot)",
			"Side special (Splat Roller)",
			"Up special (Super Jump)",
			"Down special (Splat Bomb)",
		],
	},
	{
		name: "Isabelle",
		echo: false,
		moves: [
			"Neutral special (Pocket)",
			"Side special (Fishing Rod)",
			"Up special (Balloon Trip)",
			"Down special (Lloid Trap)",
		],
	},
	{
		name: "Jigglypuff",
		echo: false,
		moves: [
			"Neutral special (Rollout)",
			"Side special (Pound)",
			"Up special (Sing)",
			"Down special (Rest)",
		],
	},
	{
		name: "Joker",
		echo: false,
		moves: [
			"Neutral special (Gun)",
			"Side special (Eiha/Eigaon)",
			"Up special (Grappling Hook/Wings of Rebellion)",
			"Down special (Rebel's Guard/Tetrakarn/Makarakarn)",
		],
	},
	{
		name: "Kazuya",
		echo: false,
		moves: [
			"Neutral special (Devil Blaster)",
			"Side special (Devil Fist)",
			"Up special (Devil Wings)",
			"Down special (Heaven's Door)",
		],
		inputMoves: [
			"Down-Forward Tilt",
			"Down-Back Tilt",
			"Back Tilt",
			"Up-Back Tilt",
			"Up-Forward Tilt",
			"Crouching Down-Forward Tilt",
			"Crouching Down Tilt",
			"Crouching Down-Back Tilt",
			"Flash Punch Combo",
			"Gates of Hell",
			"Double Dash Attack",
			"Uncrouching Attack",
			"Wind God Fist",
			"Electric Wind God Fist",
			"Dragon Uppercut",
			"Spinning Dragon To Left Hook",
		],
	},
	{
		name: "Ken",
		echo: true,
		moves: [
			"Neutral special (Hadouken)",
			"Side special (Tatsumaki Senpukyaku)",
			"Up special (Shoryuken)",
			"Down special (Focus Attack)",
		],
		inputMoves: [
			"Nata Otoshi Geri",
			"Oosoto Mawashi Geri",
		],
	},
	{
		name: "King Dedede",
		echo: false,
		moves: [
			"Neutral special (Inhale)",
			"Side special (Gordo Throw)",
			"Up special (Super Dedede Jump)",
			"Down special (Jet Hammer)",
		],
	},
	{
		name: "King K. Rool",
		echo: false,
		moves: [
			"Neutral special (Blunderbuss Kannonball/Vacuum)",
			"Side special (Crownerang)",
			"Up special (Propellerpack)",
			"Down special (Gut Check)",
		],
	},
	{
		name: "Kirby",
		echo: false,
		moves: [
			"Neutral special (Inhale/Copy/Spit)",
			"Side special (Hammer)",
			"Up special (Final Cutter)",
			"Down special (Stone)",
		],
	},
	{
		name: "Link",
		echo: false,
		moves: [
			"Neutral special (Hero's Bow)",
			"Side special (Boomerang)",
			"Up special (Spin Attack)",
			"Down special (Remote Bomb)",
		],
	},
	{
		name: "Little Mac",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Straight Lunge/K.O. Punch)",
			"Side special (Jolt Haymaker)",
			"Up special (Rising Uppercut)",
			"Down special (Slip Counter)",
		],
	},
	{
		name: "Lucario",
		echo: false,
		moves: [
			"Neutral special (Aura Sphere)",
			"Side special (Force Palm)",
			"Up special (Extreme Speed)",
			"Down special (Double Team)",
		],
	},
	{
		name: "Lucas",
		echo: false,
		moves: [
			"Zair",
			"Neutral special (PK Freeze)",
			"Side special (PK Fire)",
			"Up special (PK Thuner)",
			"Down special (PSI Magnet)",
		],
	},
	{
		name: "Lucina",
		echo: true,
		moves: [
			"Neutral special (Shieldbreaker)",
			"Side special (Dancing Blade)",
			"Up special (Dolphin Slash)",
			"Down special (Counter)",
		],
	},
	{
		name: "Luigi",
		echo: false,
		moves: [
			"Neutral special (Fireball)",
			"Side special (Green Missile)",
			"Up special (Super Jump Punch)",
			"Down special (Luigi Cyclone)",
		],
	},
	{
		name: "Mario",
		echo: false,
		moves: [
			"Neutral special (Fireball)",
			"Side special (Cape)",
			"Up special (Super Jump Punch)",
			"Down special (F.L.U.D.D.)",
		],
	},
	{
		name: "Marth",
		echo: false,
		moves: [
			"Neutral special (Shieldbreaker)",
			"Side special (Dancing Blade)",
			"Up special (Dolphin Slash)",
			"Down special (Counter)",
		],
	},
	{
		name: "Mega Man",
		echo: false,
		moves: [
			"Neutral special (Metal Blade)",
			"Side special (Crash Bomb)",
			"Up special (Rush Coil)",
			"Down special (Leaf Shield)",
		],
	},
	{
		name: "Meta Knight",
		echo: false,
		moves: [
			"Neutral special (Mach Tornado)",
			"Side special (Drill Rush)",
			"Up special (Shuttle Loop)",
			"Down special (Dimensional Cape)",
		],
	},
	{
		name: "Mewtwo",
		echo: false,
		moves: [
			"Neutral special (Shadow Ball)",
			"Side special (Confusion)",
			"Up special (Teleport)",
			"Down special (Disable)",
		],
	},
	{
		name: "Mii Brawler",
		echo: false,
		moves: [
			"Neutral special 1 (Shot Put)",
			"Neutral special 2 (Flashing Mach Punch)",
			"Neutral special 3 (Exploding Side Kick)",
			"Side special 1 (Onslaught)",
			"Side special 2 (Burning Dropkick)",
			"Side special 3 (Suplex)",
			"Up special 1 (Soaring Axe Kick)",
			"Up special 2 (Helicopter Kick)",
			"Up special 3 (Thrust Uppercut)",
			"Down special 1 (Head-On Assault)",
			"Down special 2 (Feint Jump)",
			"Down special 3 (Counter Throw)",
		],
	},
	{
		name: "Mii Gunner",
		echo: false,
		moves: [
			"Neutral special 1 (Charge Blast)",
			"Neutral special 2 (Laser Blaze)",
			"Neutral special 3 (Grenade Launch)",
			"Side special 1 (Flame Pillar)",
			"Side special 2 (Stealth Burst)",
			"Side special 3 (Gunner Missile)",
			"Up special 1 (Lunar Launch)",
			"Up special 2 (Cannon Jump Kick)",
			"Up special 3 (Arm Rocket)",
			"Down special 1 (Echo Reflector)",
			"Down special 2 (Bomb Drop)",
			"Down special 3 (Absorbing Vortex)",
		],
	},
	{
		name: "Mii Swordfighter",
		echo: false,
		moves: [
			"Neutral special 1 (Gale Strike)",
			"Neutral special 2 (Shuriken of Light)",
			"Neutral special 3 (Blurring Blade)",
			"Side special 1 (Airborne Assault)",
			"Side special 2 (Gale Stab)",
			"Side special 3 (Chakram)",
			"Up special 1 (Stone Scabbard)",
			"Up special 2 (Skyward Slash Dash)",
			"Up special 3 (Hero's Spin)",
			"Down special 1 (Blade Counter)",
			"Down special 2 (Reversal Slash)",
			"Down special 3 (Power Thrust)",
		],
	},
	{
		name: "Min Min",
		echo: false,
		moves: [
			"Rapid jab",
			"Up special (Arms Jump/Arms Hook)",
			"Down special (Arms Change)",
		],
	},
	{
		name: "Mr. Game & Watch",
		echo: false,
		moves: [
			"Neutral special (Chef)",
			"Side special (Judge)",
			"Up special (Fire)",
			"Down special (Oil Panic)",
		],
	},
	{
		name: "Mythra",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Lightning Buster)",
			"Side special (Photon Edge)",
			"Up special (Ray of Punishment/Chroma Dust)",
			"Down special (Swap to Pyra)",
			"Foresight",
		],
	},
	{
		name: "Ness",
		echo: false,
		moves: [
			"Neutral special (PK Flash)",
			"Side special (PK Fire)",
			"Up special (PK Thuner)",
			"Down special (PSI Magnet)",
		],
	},
	{
		name: "Olimar",
		echo: false,
		moves: [
			"Neutral special (Pikmin Pluck)",
			"Side special (Pikmin Throw)",
			"Up special (Winged Pikmin)",
			"Down special (Pikmin Order/Whistle)",
		],
	},
	{
		name: "PAC-MAN",
		echo: false,
		moves: [
			"Neutral special (Bonus Fruit)",
			"Side special (Power Pellet)",
			"Up special (Pac-Jump)",
			"Down special (Fire Hydrant)",
		],
	},
	{
		name: "Palutena",
		echo: false,
		moves: [
			"Neutral special (Autoreticle)",
			"Side special (Explosive Flame)",
			"Up special (Warp)",
			"Down special (Counter)",
		],
	},
	{
		name: "Peach",
		echo: false,
		moves: [
			"Neutral special (Toad)",
			"Side special (Peach Bomber)",
			"Up special (Peach Parasol)",
			"Down special (Turnip Pull)",
		],
	},
	{
		name: "Pichu",
		echo: false,
		moves: [
			"Neutral special (Thunderjolt)",
			"Side special (Skullbash)",
			"Up special (Agility)",
			"Down special (Thunder)",
		],
	},
	{
		name: "Pikachu",
		echo: false,
		moves: [
			"Neutral special (Thunderjolt)",
			"Side special (Skullbash)",
			"Up special (Quick Attack)",
			"Down special (Thunder)",
		],
	},
	{
		name: "Piranha Plant",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Ptooie)",
			"Side special (Poison Breath)",
			"Up special (Piranhacopter)",
			"Down special (Long Stem Strike)",
			"Footstool Attack"
		],
	},
	{
		name: "Pit",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Palutena's Bow)",
			"Side special (Upperdash Arm)",
			"Up special (Power of Flight)",
			"Down special (Guardian Orbitars)",
		],
	},
	{
		name: "Squirtle",
		echo: false,
		moves: [
			"Neutral special (Water Gun)",
			"Side special (Withdraw)",
			"Up special (Waterfall)",
			"Down special (Pokémon Change)",
		],
	},
	{
		name: "Ivysaur",
		echo: false,
		moves: [
			"Neutral special (Bullet Seed)",
			"Side special (Razor Leaf)",
			"Up special (Vinewhip)",
			"Down special (Pokémon Change)",
		],
	},
	{
		name: "Charizard",
		echo: false,
		moves: [
			"Neutral special (Flamethrower)",
			"Side special (Flare Blitz)",
			"Up special (Fly)",
			"Down special (Pokémon Change)",
		],
	},
	{
		name: "Pyra",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Flame Nova)",
			"Side special (Blazing End)",
			"Up special (Prominence Revolt)",
			"Down special (Swap to Mytrha)",
		],
	},
	{
		name: "Richter",
		echo: true,
		moves: [
			"Whip Dangle",
			"Neutral special (Axe)",
			"Side special (Cross)",
			"Up special (Uppercut)",
			"Down special (Holy Water)",
		],
	},
	{
		name: "Ridley",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Plasma Breath)",
			"Side special (Space Pirate Rush)",
			"Up special (Wing Blitz)",
			"Down special (Skewer)",
		],
	},
	{
		name: "R.O.B.",
		echo: false,
		moves: [
			"Neutral special (Robo Beam)",
			"Side special (Arm Rotor)",
			"Up special (Robo Burner)",
			"Down special (Gyro)",
		],
	},
	{
		name: "Robin",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Thunder/Elthunder/Arcthuner/Thoron)",
			"Side special (Arcfire)",
			"Up special (Elwind)",
			"Down special (Nosferatu)",
		],
	},
	{
		name: "Rosalina",
		echo: false,
		moves: [
			"Rapid jab",
			"Neutral special (Luma Shot/Luma Recall)",
			"Side special (Star Bits)",
			"Up special (Launch Star)",
			"Down special (Gravitational Pull)",
		],
	},
	{
		name: "Roy",
		echo: false,
		moves: [
			"Neutral special (Flare Blade)",
			"Side special (Double-Edge Dance)",
			"Up special (Blazer)",
			"Down special (Counter)",
		],
	},
	{
		name: "Ryu",
		echo: false,
		moves: [
			"Neutral special (Hadouken)",
			"Side special (Tatsumaki Senpukyaku)",
			"Up special (Shoryuken)",
			"Down special (Focus Attack)",
		],
		inputMoves: [
			"Shakunetsu Hadouken"
		],
	},
	{
		name: "Samus",
		echo: false,
		moves: [
			"Zair",
			"Neutral special (Charge Shot)",
			"Side special (Homing Missile/Super Missile)",
			"Up special (Screw Attack)",
			"Down special (Bomb)",
		],
	},
	{
		name: "Sephiroth",
		echo: false,
		moves: [
			"Neutral special (Flare/Megaflare/Gigaflare)",
			"Side special (Shadow Flare)",
			"Up special (Blade Dash/Octaslash)",
			"Down special (Scintilla)",
		],
	},
	{
		name: "Sheik",
		echo: false,
		moves: [
			"Neutral special (Needle Storm)",
			"Side special (Burst Grenade)",
			"Up special (Vanish)",
			"Down special (Bouncing Fish)",
		],
	},
	{
		name: "Shulk",
		echo: false,
		moves: [
			"Neutral special (Monado Arts)",
			"Side special (Back Slash)",
			"Up special (Air Slash)",
			"Down special (Vision)",
		],
	},
	{
		name: "Simon",
		echo: false,
		moves: [
			"Whip Dangle",
			"Neutral special (Axe)",
			"Side special (Cross)",
			"Up special (Uppercut)",
			"Down special (Holy Water)",
		],
	},
	{
		name: "Snake",
		echo: false,
		moves: [
			"Neutral special (Grenade)",
			"Side special (Nikita)",
			"Up special (Cypher)",
			"Down special (C4)",
		],
	},
	{
		name: "Sonic",
		echo: false,
		moves: [
			"Neutral special (Homing Attack)",
			"Side special (Spin Dash)",
			"Up special (Spring Dash)",
			"Down special (Spin Charge)",
		],
	},
	{
		name: "Sora",
		echo: false,
		moves: [
			"Neutral special (Firaga/Thundaga/Blizzaga)",
			"Side special (Sonic Blade)",
			"Up special (Aerial Sweep)",
			"Down special (Counterattack)",
		],
	},
	{
		name: "Steve",
		echo: false,
		moves: [
			"Neutral special (Mine/Place Block)",
			"Side special (Minecart)",
			"Up special (Elytra)",
			"Down special (TNT)",
		],
	},
	{
		name: "Terry",
		echo: false,
		moves: [
			"Neutral special (Power Wave)",
			"Forward special (Burning Knuckle)",
			"Back special (Crack Shoot)",
			"Up special (Rising Tackle)",
			"Down special (Power Dunk)",
		],
		inputMoves: [
			"Power Geyser",
			"Buster Wolf",
		],
	},
	{
		name: "Toon Link",
		echo: false,
		moves: [
			"Zair",
			"Neutral special (Hero's Bow)",
			"Side special (Boomerang)",
			"Up special (Spin Attack)",
			"Down special (Bomb Pull)",
		],
	},
	{
		name: "Villager",
		echo: false,
		moves: [
			"Neutral special (Pocket)",
			"Side special (Lloid Rocket)",
			"Up special (Balloon Trip)",
			"Down special (Timber Plant/Timber Water/Timber Axe)",
		],
	},
	{
		name: "Wario",
		echo: false,
		moves: [
			"Neutral special (Chomp)",
			"Side special (Wario Bike)",
			"Up special (Corkscrew)",
			"Down special (Wario Waft)",
		],
	},
	{
		name: "Wii Fit Trainer",
		echo: false,
		moves: [
			"Neutral special (Sun Salutation)",
			"Side special (Header)",
			"Up special (Super Hoop)",
			"Down special (Deep Breathing)",
		],
	},
	{
		name: "Wolf",
		echo: false,
		moves: [
			"Neutral special (Blaster)",
			"Side special (Wolf Flash)",
			"Up special (Fire Wolf)",
			"Down special (Reflector)",
		],
	},
	{
		name: "Yoshi",
		echo: false,
		moves: [
			"Neutral special (Egg Lay)",
			"Side special (Egg Roll)",
			"Up special (Egg Throw)",
			"Down special (Yoshi Bomb)",
		],
	},
	{
		name: "Young Link",
		echo: false,
		moves: [
			"Rapid jab",
			"Zair",
			"Neutral special (Fire Arrow)",
			"Side special (Boomerang)",
			"Up special (Spin Attack)",
			"Down special (Bomb Pull)",
		],
	},
	{
		name: "Zelda",
		echo: false,
		moves: [
			"Neutral special (Nayru's Love)",
			"Side special (Din's Fire)",
			"Up special (Farore's Wind)",
			"Down special (Phantom Slash)",
		],
	},
	{
		name: "Zero Suit Samus",
		echo: false,
		moves: [
			"Zair",
			"Neutral special (Paralyzer)",
			"Side special (Plasma Whip)",
			"Up special (Boost Kick)",
			"Down special (Flip Jump)",
		],
	},
];
