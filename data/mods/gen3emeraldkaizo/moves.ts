export const Moves: {[k: string]: ModdedMoveData} = {
	cometpunch: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	visegrip: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	cut: {
		inherit: true,
		accuracy: 100,
	},
	whirlwind: {
		inherit: true,
		pp: 5,
	},
	bind: {
		inherit: true,
		accuracy: 100,
	},
	rollingkick: {
		inherit: true,
		accuracy: 100,
		pp: 24
	},
	sandattack: {
		inherit: true,
		pp: 5
	},
	horndrill: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'drillrun',
	},
	drillrun: {
		inherit: true,
		accuracy: 100,
		pp: 16,
	},
	bodyslam: {
		inherit: true,
		pp: 24,
	},
	wrap: {
		inherit: true,
		accuracy: 100,
	},
	doubleedge: {
		inherit: true,
		pp: 24,
	},
	tailwhip: {
		inherit: true,
		pp: 1,
	},
	pinmissile: {
		inherit: true,
		basePower: 15,
		accuracy: 100,
	},
	leer: {
		inherit: true,
		pp: 1,
	},
	growl: {
		inherit: true,
		pp: 1,
		isNonstandard: 'Unobtainable',
	},
	roar: {
		inherit: true,
		pp: 5,
	},
	sing: {
		inherit: true,
		accuracy: 70,
		pp: 32,
	},
	sonicboom: {
		inherit: true,
		accuracy: 100,
	},
	disable: {
		inherit: true,
		accuracy: 100,
	},
	flamethrower: {
		inherit: true,
		pp: 24,
	},
	mist: {
		inherit: true,
		pp: 3,
	},
	hydropump: {
		inherit: true,
		accuracy: 85,
		pp: 8,
	},
	surf: {
		inherit: true,
		pp: 24,
	},
	icebeam: {
		inherit: true,
		pp: 16,
	},
	blizzard: {
		inherit: true,
		pp: 8,
	},
	hyperbeam: {
		inherit: true,
		accuracy: 100,
		pp: 8,
	},
	submission: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	lowkick: {
		inherit: true,
		isNonstandard: 'Unobtainable',
	},
	counter: {
		inherit: true,
		pp: 32,
	},
	leechseed: {
		inherit: true,
		accuracy: 100,
		pp: 16,
	},
	growth: {
		inherit: true,
		pp: 5,
	},
	solarbeam: {
		inherit: true,
		pp: 16,
	},
	sleeppowder: {
		inherit: true,
		accuracy: 80,
		pp: 24,
	},
	petaldance: {
		inherit: true,
		basePower: 95,
		pp: 16,
		target: "normal",
	},
	stringshot: {
		inherit: true,
		accuracy: 100,
		pp: 5,
	},
	firespin: {
		inherit: true,
		accuracy: 100,
		pp: 24,
	},
	thunderbolt: {
		inherit: true,
		pp: 24,
	},
	thunderwave: {
		inherit: true,
		pp: 16,
	},
	thunder: {
		inherit: true,
		pp: 16,
		isNonstandard: "Unobtainable",
	},
	earthquake: {
		inherit: true,
		pp: 16,
	},
	fissure: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'earthpower',
	},
	earthpower: {
		inherit: true,
		pp: 16,
	},
	toxic: {
		inherit: true,
		accuracy: 100,
		pp: 16,
	},
	psychic: {
		inherit: true,
		pp: 16,
	},
	hypnosis: {
		inherit: true,
		accuracy: 70,
		pp: 24,
	},
	meditate: {
		inherit: true,
		pp: 5,
	},
	agility: {
		inherit: true,
		pp: 3,
	},
	screech: {
		inherit: true,
		pp: 3,
	},
	doubleteam: {
		inherit: true,
		pp: 6,
		isNonstandard: "Unobtainable",
	},
	recover: {
		inherit: true,
		pp: 10,
	},
	harden: {
		inherit: true,
		pp: 5,
	},
	minimize: {
		inherit: true,
		pp: 6,
		isNonstandard: 'Unobtainable',
	},
	smokescreen: {
		inherit: true,
		pp: 5,
	},
	withdraw: {
		inherit: true,
		pp: 1,
	},
	defensecurl: {
		inherit: true,
		pp: 1,
	},
	barrier: {
		inherit: true,
		pp: 3,
	},
	lightscreen: {
		inherit: true,
		pp: 3,
	},
	haze: {
		inherit: true,
		pp: 5,
	},
	reflect: {
		inherit: true,
		pp: 3,
	},
	focusenergy: {
		inherit: true,
		pp: 1,
	},
	metronome: {
		inherit: true,
		pp: 35,
	},
	selfdestruct: {
		inherit: true,
		pp: 1,
	},
	eggbomb: {
		inherit: true,
		basePower: 120,
		accuracy: 100,
		type: "Grass",
	},
	sludge: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'gunkshot',
	},
	sludgebomb: {
		inherit: true,
		pp: 16,
	},
	fireblast: {
		inherit: true,
		pp: 8,
	},
	clamp: {
		inherit: true,
		accuracy: 100,
		pp: 16,
	},
	skullbash: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'headsmash',
	},
	headsmash: {
		inherit: true,
		accuracy: 100,
		pp: 8,
	},
	spikecannon: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	guillotine: {
		inherit: true,
		isNonstandard: 'Unobtainable',
	},
	swordsdance: {
		inherit: true,
		pp: 5,
	},
	constrict: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	amnesia: {
		inherit: true,
		pp: 3,
	},
	kinesis: {
		inherit: true,
		accuracy: 100,
		pp: 6,
	},
	softboiled: {
		inherit: true,
		pp: 16,
	},
	glare: {
		inherit: true,
		accuracy: 100,
		type: "Dark",
	},
	poisongas: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	barrage: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	leechlife: {
		inherit: true,
		basePower: 40,
		pp: 24,
	},
	lovelykiss: {
		inherit: true,
		accuracy: 85,
		pp: 16,
	},
	skyattack: {
		inherit: true,
		basePower: 120,
		accuracy: 100,
		pp: 16,
	},
	transform: {
		inherit: true,
		pp: 32,
	},
	dizzypunch: {
		inherit: true,
		basePower: 90,
	},
	flash: {
		inherit: true,
		pp: 5,
	},
	psywave: {
		inherit: true,
		accuracy: 100,
		pp: 24,
	},
	splash: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	acidarmor: {
		inherit: true,
		pp: 3,
	},
	crabhammer: {
		inherit: true,
		basePower: 120,
		accuracy: 100,
		pp: 16,
	},
	explosion: {
		inherit: true,
		pp: 1,
	},
	bonemerang: {
		inherit: true,
		accuracy: 100,
		pp: 16,
	},
	rockslide: {
		inherit: true,
		accuracy: 100,
		pp: 16,
	},
	hyperfang: {
		inherit: true,
		accuracy: 100,
		pp: 24,
	},
	sharpen: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	triattack: {
		inherit: true,
		pp: 16,
	},
	superfang: {
		inherit: true,
		pp: 16,
		type: "Dark",
	},
	substitute: {
		inherit: true,
		isNonstandard: 'Unobtainable',
	},
	triplekick: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	snore: {
		inherit: true,
		basePower: 60,
		pp: 30,
	},
	curse: {
		inherit: true,
		pp: 6,
	},
	flail: {
		inherit: true,
		pp: 5,
	},
	aeroblast: {
		inherit: true,
		basePower: 120,
		accuracy: 100,
		pp: 10,
	},
	cottonspore: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	reversal: {
		inherit: true,
		pp: 5,
	},
	spite: {
		inherit: true,
		pp: 16,
	},
	scaryface: {
		inherit: true,
		pp: 3,
	},
	sweetkiss: {
		inherit: true,
		type: "Normal",
	},
	bellydrum: {
		inherit: true,
		pp: 3,
	},
	gunkshot: {
		inherit: true,
		accuracy: 100,
		pp: 8,
	},
	octazooka: {
		inherit: true,
		basePower: 95,
		accuracy: 100,
		pp: 16,
	},
	spikes: {
		inherit: true,
		pp: 3,
	},
	foresight: {
		inherit: true,
		pp: 5,
	},
	icywind: {
		inherit: true,
		accuracy: 100,
		pp: 24,
	},
	bonerush: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
		pp: 24,
	},
	lockon: {
		inherit: true,
		isNonstandard: 'Unobtainable',
	},
	outrage: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	sandstorm: {
		inherit: true,
		pp: 1,
		isNonstandard: "Unobtainable",
	},
	gigadrain: {
		inherit: true,
		basePower: 75,
		pp: 16,
	},
	endure: {
		inherit: true,
		pp: 5,
	},
	charm: {
		inherit: true,
		pp: 5,
		type: "Normal",
	},
	spark: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'wildcharge',
	},
	wildcharge: {
		inherit: true,
		pp: 24,
	},
	furycutter: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'xscissors',
	},
	xscissors: {
		inherit: true,
		pp: 20,
	},
	steelwing: {
		inherit: true,
		basePower: 80,
		accuracy: 100,
	},
	sleeptalk: {
		inherit: true,
		pp: 16,
	},
	healbell: {
		inherit: true,
		pp: 2,
	},
	return: {
		inherit: true,
		basePower: 103,
		pp: 32,
	},
	frustration: {
		inherit: true,
		basePower: 103,
		pp: 32,
	},
	safeguard: {
		inherit: true,
		pp: 3,
	},
	painsplit: {
		inherit: true,
		pp: 10,
	},
	sacredfire: {
		inherit: true,
		basePower: 120,
		accuracy: 100,
		pp: 10,
	},
	megahorn: {
		inherit: true,
		accuracy: 90,
		pp: 16,
	},
	rapidspin: {
		inherit: true,
		pp: 1,
	},
	sweetscent: {
		inherit: true,
		pp: 5,
	},
	irontail: {
		inherit: true,
		accuracy: 90,
		pp: 24,
	},
	morningsun: {
		inherit: true,
		pp: 10,
	},
	synthesis: {
		inherit: true,
		pp: 10,
	},
	moonlight: {
		inherit: true,
		pp: 10,
		type: "Normal",
	},
	crosschop: {
		inherit: true,
		accuracy: 90,
		pp: 8,
	},
	raindance: {
		inherit: true,
		pp: 1,
		isNonstandard: "Unobtainable",
	},
	sunnyday: {
		inherit: true,
		pp: 1,
		isNonstandard: "Unobtainable",
	},
	crunch: {
		inherit: true,
		pp: 24,
	},
	mirrorcoat: {
		inherit: true,
		pp: 32,
	},
	extremespeed: {
		inherit: true,
		basePower: 100,
		pp: 8,
	},
	ancientpower: {
		inherit: true,
		basePower: 80,
		pp: 8,
	},
	shadowball: {
		inherit: true,
		pp: 24,
	},
	futuresight: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	rocksmash: {
		inherit: true,
		basePower: 40,
		pp: 24,
	},
	whirlpool: {
		inherit: true,
		accuracy: 100,
		pp: 24,
	},
	fakeout: {
		inherit: true,
		pp: 5,
	},
	stockpile: {
		inherit: true,
		pp: 16,
	},
	spitup: {
		inherit: true,
		pp: 16,
	},
	heatwave: {
		inherit: true,
		accuracy: 100,
		pp: 16,
	},
	hail: {
		inherit: true,
		pp: 1,
		isNonstandard: "Unobtainable",
	},
	torment: {
		inherit: true,
		pp: 5,
	},
	flatter: {
		inherit: true,
		pp: 24,
	},
	willowisp: {
		inherit: true,
		accuracy: 85,
	},
	memento: {
		inherit: true,
		pp: 1,
	},
	facade: {
		inherit: true,
		pp: 32,
	},
	taunt: {
		inherit: true,
		pp: 3,
	},
	trick: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	wish: {
		inherit: true,
		pp: 2,
	},
	assist: {
		inherit: true,
		pp: 32,
	},
	ingrain: {
		inherit: true,
		pp: 1,
	},
	superpower: {
		inherit: true,
		pp: 8,
	},
	recycle: {
		inherit: true,
		pp: 16,
	},
	yawn: {
		inherit: true,
		accuracy: 70,
	},
	eruption: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'dracometeor',
	},
	dracometeor: {
		inherit: true,
		basePower: 120,
		accuracy: 100,
		pp: 8,
	},
	refresh: {
		inherit: true,
		pp: 5,
	},
	snatch: {
		inherit: true,
		pp: 3,
	},
	armthrust: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'forcepalm',
	},
	forcepalm: {
		inherit: true,
		pp: 16,
	},
	tailglow: {
		inherit: true,
		pp: 3,
	},
	lusterpurge: {
		inherit: true,
		basePower: 90,
		pp: 10,
	},
	mistball: {
		inherit: true,
		basePower: 90,
		pp: 10,
	},
	featherdance: {
		inherit: true,
		pp: 5,
	},
	teeterdance: {
		inherit: true,
		pp: 32,
		target: "allAdjacentFoes"
	},
	blazekick: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
		pp: 16,
	},
	needlearm: {
		inherit: true,
		basePower: 95,
		pp: 24,
	},
	hypervoice: {
		inherit: true,
		basePower: 120,
		pp: 16,
	},
	poisonfang: {
		inherit: true,
		basePower: 90,
		pp: 24,
	},
	crushclaw: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
		pp: 16,
	},
	blastburn: {
		inherit: true,
		basePower: 100,
		pp: 8,
	},
	hydrocannon: {
		inherit: true,
		basePower: 100,
		pp: 8,
	},
	meteormash: {
		inherit: true,
		accuracy: 100,
		pp: 16,
	},
	astonish: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'shadowsneak',
	},
	shadowsneak: {
		inherit: true,
		pp: 24,
	},
	weatherball: {
		inherit: true,
		pp: 16,
	},
	aromatherapy: {
		inherit: true,
		pp: 2,
	},
	faketears: {
		inherit: true,
		pp: 3,
	},
	aircutter: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'airslash',
	},
	airslash: {
		inherit: true,
		basePower: 80,
		accuracy: 100,
		pp: 25,
	},
	overheat: {
		inherit: true,
		basePower: 120,
		accuracy: 100,
		pp: 16,
	},
	odorsleuth: {
		inherit: true,
		pp: 3,
	},
	rocktomb: {
		inherit: true,
		basePower: 55,
		accuracy: 100,
		pp: 16,
	},
	metalsound: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'flashcannon',
	},
	flashcannon: {
		inherit: true,
		basePower: 90,
		pp: 16,
	},
	grasswhistle: {
		inherit: true,
		accuracy: 70,
		pp: 24,
	},
	tickle: {
		inherit: true,
		pp: 6,
	},
	cosmicpower: {
		inherit: true,
		pp: 6,
		isNonstandard: 'Unobtainable',
	},
	waterspout: {
		inherit: true,
		pp: 8,
	},
	signalbeam: {
		inherit: true,
		pp: 24,
	},
	shadowpunch: {
		inherit: true,
		basePower: 70,
	},
	skyuppercut: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		pp: 24,
	},
	sandtomb: {
		inherit: true,
		accuracy: 100,
		pp: 24,
	},
	sheercold: {
		inherit: true,
		pp: 8,
		isNonstandard: 'Unobtainable',
	},
	muddywater: {
		inherit: true,
		accuracy: 100,
	},
	bulletseed: {
		inherit: true,
		basePower: 25,
	},
	aerialace: {
		inherit: true,
		pp: 32,
	},
	iciclespear: {
		inherit: true,
		isNonstandard: 'Removed',
		replacedBy: 'iceshard',
	},
	irondefense: {
		inherit: true,
		pp: 3,
		isNonstandard: 'Unobtainable',
	},
	howl: {
		inherit: true,
		pp: 5,
	},
	dragonclaw: {
		inherit: true,
		pp: 24,
	},
	frenzyplant: {
		inherit: true,
		basePower: 100,
		pp: 8,
	},
	bulkup: {
		inherit: true,
		pp: 3,
		isNonstandard: 'Unobtainable',
	},
	mudshot: {
		inherit: true,
		accuracy: 100,
		pp: 24,
	},
	poisontail: {
		inherit: true,
		basePower: 120,
		pp: 16,
	},
	covet: {
		inherit: true,
		isNonstandard: 'Removed',
	},
	volttackle: {
		inherit: true,
		pp: 24,
	},
	calmmind: {
		inherit: true,
		pp: 3,
	},
	leafblade: {
		inherit: true,
		basePower: 95,
		pp: 24,
	},
	dragondance: {
		inherit: true,
		pp: 3,
	},
	psychoboost: {
		inherit: true,
		accuracy: 100,
		pp: 8,
	},
};
