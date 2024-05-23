export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	abra: {
		inherit: true,
		catchRate: 45,
		heldItems: ["005twistedspoon"],
	},
	aerodactyl: {
		inherit: true,
		abilities: {0: "Pressure"},
		catchRate: 6,
	},
	alakazam: {
		inherit: true,
		baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120},
		evoLevel: 55,
		evoType: "level",
		catchRate: 10,
		heldItems: ["005twistedspoon"],
	},
	arbok: {
		inherit: true,
		baseStats: {hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80},
	},
	arcanine: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Blaze"},
		catchRate: 15,
		heldItems: ["100rawstberry"],
	},
	articuno: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 100, spa: 115, spd: 125, spe: 85},
	},
	beedrill: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75},
		heldItems: ["005poisonbarb"],
	},
	blastoise: {
		inherit: true,
		catchRate: 10,
	},
	butterfree: {
		inherit: true,
		baseStats: {hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70},
		heldItems: ["005silverpowder"],
	},
	chansey: {
		inherit: true,
		baseStats: {hp: 250, atk: 5, def: 25, spa: 35, spd: 105, spe: 50},
		catchRate: 15,
		heldItems: ["005luckyegg"],
	},
	charizard: {
		inherit: true,
		catchRate: 10,
	},
	charmeleon: {
		inherit: true,
		catchRate: 25,
	},
	clefable: {
		inherit: true,
		baseStats: {hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60},
		heldItems: ["050leppaberry", "005moonstone"],
	},
	clefairy: {
		inherit: true,
		heldItems: ["050leppaberry", "005moonstone"],
	},
	cloyster: {
		inherit: true,
		baseStats: {hp: 50, atk: 95, def: 180, spa: 85, spd: 70, spe: 70},
		heldItems: ["050pearl", "005bigpearl"],
	},
	cubone: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Rock Head"},
		heldItems: ["005thickclub"],
	},
	dewgong: {
		inherit: true,
		baseStats: {hp: 90, atk: 70, def: 80, spa: 95, spd: 95, spe: 70},
		abilities: {0: "Swift Swim", 1: "Thick Fat"},
		evoLevel: 28,
	},
	diglett: {
		inherit: true,
		abilities: {0: "Arena Trap", 1: "Sand Veil"},
		catchRate: 150,
	},
	ditto: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Shadow Tag"},
		heldItems: ["050berryjuice", "005metalpowder"],
	},
	dodrio: {
		inherit: true,
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110},
		abilities: {0: "Early Bird", 1: "Run Away"},
		catchRate: 10,
		heldItems: ["005sharpbeak"],
	},
	doduo: {
		inherit: true,
		abilities: {0: "Early Bird", 1: "Run Away"},
		catchRate: 45,
		heldItems: ["005sharpbeak"],
	},
	dragonair: {
		inherit: true,
		catchRate: 2,
		heldItems: ["005dragonscale"],
	},
	dragonite: {
		inherit: true,
		abilities: {0: "Thick Fat", 1: "Shed Skin"},
		catchRate: 1,
		heldItems: ["005dragonscale"],
	},
	dratini: {
		inherit: true,
		catchRate: 3,
		heldItems: ["005dragonscale"],
	},
	dugtrio: {
		inherit: true,
		baseStats: {hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120},
		abilities: {0: "Arena Trap", 1: "Sand Veil"},
		catchRate: 8,
	},
	electrode: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150},
		abilities: {0: "Static"},
	},
	exeggutor: {
		inherit: true,
		baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 85, spe: 55},
	},
	farfetchd: {
		inherit: true,
		baseStats: {hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60},
		catchRate: 145,
		heldItems: ["100stick"],
	},
	fearow: {
		inherit: true,
		abilities: {0: "Early Bird"},
		heldItems: ["005sharpbeak"],
	},
	flareon: {
		inherit: true,
		abilities: {0: "Flame Body"},
	},
	gastly: {
		inherit: true,
		catchRate: 45,
	},
	gengar: {
		inherit: true,
		baseStats: {hp: 60, atk: 75, def: 60, spa: 130, spd: 75, spe: 110},
		abilities: ["Levitate"],
		evoLevel: 50,
		evoType: "level",
		catchRate: 10,
	},
	geodude: {
		inherit: true,
		heldItems: ["005everstone"],
	},
	gloom: {
		inherit: true,
		evoLevel: 16,
	},
	golduck: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Oblivious"},
		evoLevel: 25,
	},
	golem: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45},
		evoLevel: 42,
		evoType: "level",
		heldItems: ["005everstone"],
	},
	graveler: {
		inherit: true,
		heldItems: ["005everstone"],
	},
	grimer: {
		inherit: true,
		abilities: {0: "Poison Point", 1: "Sticky Hold"},
		heldItems: ["005nugget"],
	},
	growlithe: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Run Away"},
		catchRate: 90,
		heldItems: ["100rawstberry"],
	},
	gyarados: {
		inherit: true,
		catchRate: 10,
	},
	haunter: {
		inherit: true,
		catchRate: 25,
	},
	hitmonchan: {
		inherit: true,
		abilities: {0: "Guts"},
		evoLevel: 15,
	},
	hitmonlee: {
		inherit: true,
		evoLevel: 15,
	},
	hitmontop: {
		inherit: true,
		evoLevel: 15,
	},
	horsea: {
		inherit: true,
		heldItems: ["005dragonscale"],
	},
	hypno: {
		inherit: true,
		baseStats: {hp: 85, atk: 73, def: 70, spa: 115, spd: 115, spe: 67},
		evoLevel: 38
	},
	ivysaur: {
		inherit: true,
		catchRate: 25,
	},
	jolteon: {
		inherit: true,
		abilities: {0: "Static"},
		catchRate: 3,
	},
	jynx: {
		inherit: true,
		heldItems: ["100aspearberry"],
	},
	kadabra: {
		inherit: true,
		catchRate: 25,
		heldItems: ["005twistedspoon"],
	},
	kingdra: {
		inherit: true,
		evoLevel: 55,
		evoType: "level",
		catchRate: 5,
		heldItems: ["005dragonscale"],
	},
	koffing: {
		inherit: true,
		catchRate: 45,
		heldItems: ["005smokeball"],
	},
	lapras: {
		inherit: true,
		baseStats: {hp: 130, atk: 85, def: 80, spa: 95, spd: 105, spe: 60},
		abilities: {0: "Shell Armor"},
		catchRate: 3,
	},
	lickitung: {
		inherit: true,
		catchRate: 65,
	},
	machamp: {
		inherit: true,
		evoLevel: 50,
		evoType: "level",
		catchRate: 5,
	},
	magikarp: {
		inherit: true,
		catchRate: 100,
	},
	magmar: {
		inherit: true,
		heldItems: ["100rawstberry"],
	},
	magnemite: {
		inherit: true,
		heldItems: ["005metalcoat"],
	},
	magneton: {
		inherit: true,
		heldItems: ["005metalcoat"],
	},
	marowak: {
		inherit: true,
		baseStats: {hp: 60, atk: 90, def: 110, spa: 50, spd: 80, spe: 45},
		abilities: {0: "Lightning Rod", 1: "Rock Head"},
		heldItems: ["005thickclub"],
	},
	meowth: {
		inherit: true,
		abilities: {0: "Limber"},
	},
	mew: {
		inherit: true,
		catchRate: 3,
		heldItems: ["100lumberry"],
	},
	mewtwo: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Run Away"},
		catchRate: 1,
		heldItems: ["100lumberry"],
	},
	moltres: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 90, spa: 125, spd: 85, spe: 90},
	},
	mrmime: {
		inherit: true,
		abilities: {0: "Own Tempo"},
	},
	muk: {
		inherit: true,
		abilities: {0: "Poison Point", 1: "Sticky Hold"},
		heldItems: ["005nugget"],
	},
	nidoking: {
		inherit: true,
		baseStats: {hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85},
	},
	nidoqueen: {
		inherit: true,
		baseStats: {hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76},
	},
	ninetales: {
		inherit: true,
		baseStats: {hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Pressure"},
		heldItems: ["100rawstberry"],
	},
	paras: {
		inherit: true,
		heldItems: ["050tinymushroom", "005bigmushroom"],
	},
	parasect: {
		inherit: true,
		heldItems: ["050tinymushroom", "005bigmushroom"],
	},
	pidgeot: {
		inherit: true,
		baseStats: {hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101},
		abilities: {0: "Early Bird"},
		evoLevel: 30
	},
	pidgeotto: {
		inherit: true,
		evoLevel: 16,
	},
	pikachu: {
		inherit: true,
		baseStats: {hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90},
		abilities: {0: "Lightning Rod"},
		catchRate: 45,
		heldItems: ["050oranberry", "005lightball"],
	},
	pinsir: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Hyper Cutter"},
	},
	poliwag: {
		inherit: true,
		abilities: {0: "Swift Swim"},
	},
	poliwhirl: {
		inherit: true,
		abilities: {0: "Swift Swim"},
	},
	poliwrath: {
		inherit: true,
		baseStats: {hp: 90, atk: 95, def: 95, spa: 70, spd: 90, spe: 70},
		abilities: {0: "Swift Swim"},
		heldItems: ["005netball"],
	},
	ponyta: {
		inherit: true,
		abilities: {0: "Flame Body", 1: "Run Away"},
	},
	raichu: {
		inherit: true,
		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110},
		abilities: {0: "Lightning Rod"},
		heldItems: ["005oranberry"],
	},
	rapidash: {
		inherit: true,
		abilities: {0: "Flame Body", 1: "Run Away"},
		evoLevel: 25,
	},
	raticate: {
		inherit: true,
		abilities: {0: "Guts"},
	},
	rattata: {
		inherit: true,
		abilities: {0: "Run Away"},
	},
	rhydon: {
		inherit: true,
		catchRate: 15,
	},
	rhyhorn: {
		inherit: true,
		catchRate: 45,
	},
	seadra: {
		inherit: true,
		evoLevel: 30,
		heldItems: ["005dragonscale"],
	},
	seaking: {
		inherit: true,
		evoLevel: 20,
	},
	shellder: {
		inherit: true,
		heldItems: ["050pearl", "005bigpearl"],
	},
	slowbro: {
		inherit: true,
		abilities: {0: "Shell Armor", 1: "Own Tempo"},
		catchRate: 25,
		heldItems: ["005pearl"],
	},
	slowking: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Own Tempo"},
		evoItem: "Water Stone",
		evoType: "useItem",
		heldItems: ["005kingsrock"],
	},
	slowpoke: {
		inherit: true,
		catchRate: 60,
		heldItems: ["005kingsrock"],
	},
	snorlax: {
		inherit: true,
		abilities: {0: "Guts", 1: "Thick Fat"},
		catchRate: 3,
		heldItems: ["050chestoberry", "005sitrusberry"],
	},
	starmie: {
		inherit: true,
		baseStats: {hp: 60, atk: 75, def: 85, spa: 100, spd: 100, spe: 115},
		abilities: {0: "Natural Cure", 1: "Illuminate"},
		catchRate: 15,
		heldItems: ["050stardust", "005starpiece"],
	},
	staryu: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Illuminate"},
		catchRate: 35,
		heldItems: ["050stardust", "005starpiece"],
	},
	tangela: {
		inherit: true,
		baseStats: {hp: 65, atk: 55, def: 115, spa: 100, spd: 100, spe: 60},
	},
	tauros: {
		inherit: true,
		catchRate: 10,
	},
	tentacruel: {
		inherit: true,
		baseStats: {hp: 80, atk: 70, def: 65, spa: 100, spd: 120, spe: 100},
	},
	vaporeon: {
		inherit: true,
		abilities: {0: "Swift Swim"},
		catchRate: 3,
	},
	venomoth: {
		inherit: true,
		abilities: {0: "Compound Eyes", 1: "Shield Dust"},
	},
	venonat: {
		inherit: true,
		abilities: {0: "Compound Eyes", 1: "Shield Dust"},
	},
	venusaur: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Overgrow"},
		catchRate: 10,
	},
	victreebel: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70},
	},
	vileplume: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50},
		catchRate: 34,
	},
	voltorb: {
		inherit: true,
		abilities: {0: "Static"},
	},
	vulpix: {
		inherit: true,
		baseStats: {hp: 38, atk: 41, def: 40, spa: 65, spd: 65, spe: 65},
		abilities: {0: "Pressure"},
		heldItems: ["100rawstberry"],
	},
	wartortle: {
		inherit: true,
		catchRate: 25,
	},
	weepinbell: {
		inherit: true,
		evoLevel: 16,
	},
	weezing: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 120, spa: 85, spd: 85, spe: 60},
		catchRate: 25,
		heldItems: ["005smokeball"],
	},
	wigglytuff: {
		inherit: true,
		baseStats: {hp: 140, atk: 80, def: 45, spa: 85, spd: 50, spe: 45},
	},
	zapdos: {
		inherit: true,
		baseStats: {hp: 90, atk: 95, def: 90, spa: 125, spd: 95, spe: 105},
	},
	aipom: {
		inherit: true,
		abilities: {0: "Vital Spirit", 1: "Own Tempo"},
	},
	ampharos: {
		inherit: true,
		baseStats: {hp: 90, atk: 75, def: 85, spa: 115, spd: 90, spe: 55},
		catchRate: 25,
	},
	ariados: {
		inherit: true,
		baseStats: {hp: 70, atk: 90, def: 70, spa: 60, spd: 70, spe: 40},
		abilities: {0: "Insomnia", 1: "Swarm"},
	},
	azumarill: {
		inherit: true,
		baseStats: {hp: 100, atk: 60, def: 80, spa: 60, spd: 80, spe: 50},
		abilities: {0: "Huge Power", 1: "Thick Fat"},
		catchRate: 35,
	},
	bayleef: {
		inherit: true,
		catchRate: 25,
	},
	bellossom: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 95, spa: 90, spd: 100, spe: 50},
	},
	blissey: {
		inherit: true,
		baseStats: {hp: 255, atk: 5, def: 35, spa: 75, spd: 115, spe: 55},
		catchRate: 1,
		heldItems: ["005luckyegg"],
	},
	celebi: {
		inherit: true,
		catchRate: 3,
		heldItems: ["100lumberry"],
	},
	chinchou: {
		inherit: true,
		catchRate: 60,
		heldItems: ["005yellowshard"],
	},
	cleffa: {
		inherit: true,
		heldItems: ["050leppaberry", "005moonstone"],
	},
	corsola: {
		inherit: true,
		baseStats: {hp: 65, atk: 55, def: 95, spa: 65, spd: 95, spe: 35},
		abilities: {0: "Natural Cure", 1: "Hustle"},
		catchRate: 230,
		heldItems: ["005redshard"],
	},
	croconaw: {
		inherit: true,
		evoLevel: 16,
		catchRate: 25,
	},
	delibird: {
		inherit: true,
		catchRate: 255,
	},
	donphan: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Sturdy"},
	},
	dunsparce: {
		inherit: true,
		catchRate: 25,
	},
	entei: {
		inherit: true,
		baseStats: {hp: 115, atk: 115, def: 85, spa: 110, spd: 75, spe: 100},
		abilities: {0: "Inner Focus", 1: "Pressure"},
	},
	espeon: {
		inherit: true,
		catchRate: 25,
	},
	feraligatr: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Torrent"},
		catchRate: 10,
	},
	flaaffy: {
		inherit: true,
		catchRate: 55,
	},
	forretress: {
		inherit: true,
		abilities: {0: "Shell Armor", 1: "Sturdy"},
	},
	furret: {
		inherit: true,
		abilities: {0: "Early Bird", 1: "Keen Eye"},
		heldItems: ["050oranberry", "005sitrusberry"],
	},
	girafarig: {
		inherit: true,
		abilities: {0: "Early Bird", 1: "Inner Focus"},
		heldItems: ["005persimberry"],
	},
	heracross: {
		inherit: true,
		abilities: {0: "Guts", 1: "Swarm"},
		catchRate: 5,
	},
	hooh: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Run Away"},
		catchRate: 1,
		heldItems: ["100lumberry"],
	},
	hoppip: {
		inherit: true,
		catchRate: 160,
	},
	houndoom: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 50, spa: 130, spd: 80, spe: 110},
		abilities: {0: "Intimidate", 1: "Early Bird"},
		evoLevel: 66,
		catchRate: 10,
	},
	houndour: {
		inherit: true,
		abilities: {0: "Early Bird"},
	},
	jumpluff: {
		inherit: true,
		baseStats: {hp: 75, atk: 55, def: 70, spa: 55, spd: 95, spe: 110},
		catchRate: 35,
	},
	lanturn: {
		inherit: true,
		baseStats: {hp: 125, atk: 50, def: 66, spa: 76, spd: 76, spe: 67},
		catchRate: 10,
		heldItems: ["005yellowshard"],
	},
	larvitar: {
		inherit: true,
		catchRate: 3,
	},
	ledian: {
		inherit: true,
		abilities: {0: "Early Bird", 1: "Swarm"},
	},
	ledyba: {
		inherit: true,
		abilities: {0: "Early Bird", 1: "Swarm"},
	},
	lugia: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Run Away"},
		catchRate: 1,
		heldItems: ["100lumberry"],
	},
	magby: {
		inherit: true,
		heldItems: ["100rawstberry"],
	},
	magcargo: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 120, spa: 90, spd: 80, spe: 30},
		abilities: {0: "Magma Armor"},
		evoLevel: 16,
	},
	mantine: {
		inherit: true,
		baseStats: {hp: 85, atk: 40, def: 70, spa: 80, spd: 140, spe: 70},
		abilities: {0: "Swift Swim", 1: "Water Veil"},
		catchRate: 65,
	},
	mareep: {
		inherit: true,
		catchRate: 140,
	},
	marill: {
		inherit: true,
		abilities: {0: "Huge Power", 1: "Thick Fat"},
	},
	meganium: {
		inherit: true,
		abilities: {0: "Thick Fat", 1: "Overgrow"},
		catchRate: 5,
	},
	miltank: {
		inherit: true,
		catchRate: 10,
		heldItems: ["100moomoomilk"],
	},
	misdreavus: {
		inherit: true,
		baseStats: {hp: 60, atk: 60, def: 60, spa: 105, spd: 105, spe: 105},
		catchRate: 25,
	},
	natu: {
		inherit: true,
		abilities: {0: "Early Bird", 1: "Synchronize"},
	},
	noctowl: {
		inherit: true,
		baseStats: {hp: 100, atk: 50, def: 50, spa: 86, spd: 96, spe: 70},
	},
	phanpy: {
		inherit: true,
		abilities: {0: "Cute Charm"},
	},
	pichu: {
		inherit: true,
		heldItems: ["005oranberry"],
	},
	piloswine: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 80, spa: 70, spd: 60, spe: 60},
		abilities: {0: "Thick Fat", 1: "Oblivious"},
	},
	pineco: {
		inherit: true,
		abilities: {0: "Rough Skin", 1: "Sturdy"},
	},
	politoed: {
		inherit: true,
		abilities: {0: "Swift Swim"},
		evoLevel: 37,
		evoType: "level",
		catchRate: 35,
		heldItems: ["005mysticwater"],
	},
	porygon2: {
		inherit: true,
		evoLevel: 42,
		evoType: "level",
		catchRate: 15,
	},
	pupitar: {
		inherit: true,
		catchRate: 2,
	},
	quagsire: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Oblivious"},
		catchRate: 20,
	},
	quilava: {
		inherit: true,
		evoLevel: 16,
		catchRate: 25,
	},
	qwilfish: {
		inherit: true,
		baseStats: {hp: 65, atk: 95, def: 85, spa: 75, spd: 65, spe: 85},
		abilities: {0: "Swift Swim", 1: "Poison Point"},
		catchRate: 75,
	},
	raikou: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 95, spa: 115, spd: 100, spe: 115},
		abilities: {0: "Lightning Rod", 1: "Pressure"},
	},
	scizor: {
		inherit: true,
		evoLevel: 50,
		evoType: "level",
	},
	sentret: {
		inherit: true,
		abilities: {0: "Early Bird", 1: "Keen Eye"},
		heldItems: ["005oranberry"],
	},
	shuckle: {
		inherit: true,
		baseStats: {hp: 50, atk: 15, def: 230, spa: 5, spd: 230, spe: 5},
		abilities: {0: "Shell Armor", 1: "Sturdy"},
		catchRate: 3,
		heldItems: ["100oranberry"],
	},
	skarmory: {
		inherit: true,
		catchRate: 3,
	},
	skiploom: {
		inherit: true,
		catchRate: 100,
	},
	slugma: {
		inherit: true,
		abilities: {0: "Flame Body", 1: "Magma Armor"},
		heldItems: ["100firestone"],
	},
	smeargle: {
		inherit: true,
		baseStats: {hp: 60, atk: 60, def: 70, spa: 60, spd: 70, spe: 75},
	},
	smoochum: {
		inherit: true,
		heldItems: ["100aspearberry"],
	},
	sneasel: {
		inherit: true,
		heldItems: ["005quickclaw"],
	},
	spinarak: {
		inherit: true,
		abilities: {0: "Insomnia", 1: "Swarm"},
	},
	steelix: {
		inherit: true,
		evoLevel: 45,
		evoType: "level",
		heldItems: ["005metalcoat"],
	},
	sudowoodo: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Sturdy"},
	},
	suicune: {
		inherit: true,
		baseStats: {hp: 120, atk: 75, def: 115, spa: 90, spd: 115, spe: 85},
		abilities: {0: "Battle Armor", 1: "Pressure"},
	},
	sunflora: {
		inherit: true,
		heldItems: ["100sunstone"],
	},
	sunkern: {
		inherit: true,
		heldItems: ["100sunstone"],
	},
	teddiursa: {
		inherit: true,
		abilities: {0: "Guts"},
	},
	togepi: {
		inherit: true,
		abilities: {0: "Serene Grace", 1: "Hustle"},
	},
	togetic: {
		inherit: true,
		abilities: {0: "Serene Grace", 1: "Hustle"},
	},
	typhlosion: {
		inherit: true,
		catchRate: 10,
	},
	tyranitar: {
		inherit: true,
		abilities: {0: "Intimidate"},
		catchRate: 1,
	},
	umbreon: {
		inherit: true,
		catchRate: 25,
	},
	unown: {
		inherit: true,
		catchRate: 225,
	},
	wobbuffet: {
		inherit: true,
		evoLevel: 64,
		catchRate: 1,
	},
	wooper: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Oblivious"},
		catchRate: 90,
	},
	wynaut: {
		inherit: true,
		catchRate: 6,
	},
	xatu: {
		inherit: true,
		abilities: {0: "Early Bird", 1: "Synchronize"},
	},
	yanma: {
		inherit: true,
		catchRate: 45,
	},
	aggron: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Sturdy"},
		heldItems: ["005hardstone"],
	},
	armaldo: {
		inherit: true,
		catchRate: 25,
	},
	aron: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Sturdy"},
		heldItems: ["005hardstone"],
	},
	azurill: {
		inherit: true,
		abilities: {0: "Huge Power", 1: "Thick Fat"},
	},
	bagon: {
		inherit: true,
		catchRate: 10,
		heldItems: ["005dragonscale"],
	},
	banette: {
		inherit: true,
		catchRate: 35,
		heldItems: ["005spelltag"],
	},
	beautifly: {
		inherit: true,
		baseStats: {hp: 60, atk: 70, def: 50, spa: 100, spd: 50, spe: 65},
		heldItems: ["005silverpowder"],
	},
	beldum: {
		inherit: true,
		catchRate: 9,
		heldItems: ["005metalcoat"],
	},
	blaziken: {
		inherit: true,
		catchRate: 10,
	},
	cacnea: {
		inherit: true,
		catchRate: 160,
		heldItems: ["005poisonbarb"],
	},
	cacturne: {
		inherit: true,
		evoLevel: 29,
		heldItems: ["005poisonbarb"],
	},
	camerupt: {
		inherit: true,
		heldItems: ["100rawstberry"],
	},
	castform: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 75, spa: 110, spd: 75, spe: 100},
		heldItems: ["100mysticwater"],
	},
	castformrainy: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 75, spa: 110, spd: 75, spe: 100},
	},
	castformsnowy: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 75, spa: 110, spd: 75, spe: 100},
	},
	castformsunny: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 75, spa: 110, spd: 75, spe: 100},
	},
	chimecho: {
		inherit: true,
		baseStats: {hp: 75, atk: 50, def: 80, spa: 95, spd: 90, spe: 65},
	},
	clamperl: {
		inherit: true,
		heldItems: ["005blueshard"],
	},
	combusken: {
		inherit: true,
		catchRate: 25,
	},
	corphish: {
		inherit: true,
		abilities: {0: "Shell Armor", 1: "Hyper Cutter"},
		catchRate: 235,
	},
	cradily: {
		inherit: true,
		catchRate: 25,
	},
	crawdaunt: {
		inherit: true,
		abilities: {0: "Shell Armor", 1: "Hyper Cutter"},
		evoLevel: 25,
	},
	delcatty: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 90},
		heldItems: ["005leppaberry"],
	},
	deoxys: {
		inherit: true,
		heldItems: ["100lumberry"],
	},
	dusclops: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 130, spa: 60, spd: 130, spe: 25},
		abilities: {0: "Pressure", 1: "Keen Eye"},
		evoLevel: 65,
		catchRate: 3,
		heldItems: ["005spelltag"],
	},
	duskull: {
		inherit: true,
		catchRate: 45,
		heldItems: ["005spelltag"],
	},
	dustox: {
		inherit: true,
		heldItems: ["005silverpowder"],
	},
	exploud: {
		inherit: true,
		abilities: {0: "Vital Spirit"},
		evoLevel: 36,
		heldItems: ["005chestoberry"],
	},
	flygon: {
		inherit: true,
		catchRate: 3,
	},
	gardevoir: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 75, spa: 125, spd: 115, spe: 90},
		catchRate: 6,
	},
	glalie: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 80, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Intimidate", 1: "Inner Focus"},
		heldItems: ["005nevermeltice"],
	},
	gorebyss: {
		inherit: true,
		evoItem: "Water Stone",
		evoType: "useItem",
		catchRate: 20,
	},
	groudon: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Run Away"},
		catchRate: 1,
		heldItems: ["100lumberry"],
	},
	grovyle: {
		inherit: true,
		catchRate: 25,
	},
	grumpig: {
		inherit: true,
		evoLevel: 27,
	},
	gulpin: {
		inherit: true,
		heldItems: ["005bigpearl"],
	},
	hariyama: {
		inherit: true,
		heldItems: ["005blackbelt"],
	},
	huntail: {
		inherit: true,
		evoLevel: 24,
		evoType: "level",
	},
	illumise: {
		inherit: true,
		baseStats: {hp: 65, atk: 47, def: 75, spa: 73, spd: 85, spe: 85},
		heldItems: ["100berryjuice"],
	},
	jirachi: {
		inherit: true,
		heldItems: ["100lumberry"],
	},
	kecleon: {
		inherit: true,
		heldItems: ["005persimberry"],
	},
	kirlia: {
		inherit: true,
		abilities: {0: "Synchronize"},
		catchRate: 45,
	},
	kyogre: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Run Away"},
		catchRate: 1,
		heldItems: ["100lumberry"],
	},
	lairon: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Sturdy"},
		evoLevel: 25,
		heldItems: ["005hardstone"],
	},
	latias: {
		inherit: true,
		heldItems: ["100lumberry"],
	},
	latios: {
		inherit: true,
		heldItems: ["100lumberry"],
	},
	linoone: {
		inherit: true,
		abilities: {0: "Guts"},
		heldItems: ["050oranberry", "005sitrusberry"],
	},
	lombre: {
		inherit: true,
		catchRate: 20,
	},
	lotad: {
		inherit: true,
		catchRate: 45,
	},
	loudred: {
		inherit: true,
		abilities: {0: "Vital Spirit"},
		heldItems: ["005chestoberry"],
	},
	ludicolo: {
		inherit: true,
		catchRate: 5,
	},
	lunatone: {
		inherit: true,
		baseStats: {hp: 90, atk: 55, def: 65, spa: 95, spd: 85, spe: 70},
		catchRate: 25,
		heldItems: ["005moonstone"],
	},
	manectric: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Lightning Rod"},
	},
	marshtomp: {
		inherit: true,
		catchRate: 25,
	},
	masquerain: {
		inherit: true,
		baseStats: {hp: 70, atk: 60, def: 62, spa: 100, spd: 82, spe: 60},
		catchRate: 90,
		heldItems: ["005silverpowder"],
	},
	mawile: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Hyper Cutter"},
	},
	medicham: {
		inherit: true,
		catchRate: 15,
	},
	meditite: {
		inherit: true,
		catchRate: 80,
	},
	metagross: {
		inherit: true,
		catchRate: 25,
		heldItems: ["005metalcoat"],
	},
	metang: {
		inherit: true,
		heldItems: ["005metalcoat"],
	},
	mightyena: {
		inherit: true,
		heldItems: ["005pechaberry"],
	},
	milotic: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Marvel Scale"},
	},
	mudkip: {
		inherit: true,
		heldItems: ["050oranberry"],
	},
	nincada: {
		inherit: true,
		catchRate: 7,
	},
	ninjask: {
		inherit: true,
		catchRate: 7,
	},
	nosepass: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Sturdy"},
	},
	numel: {
		inherit: true,
		heldItems: ["100rawstberry"],
	},
	pelipper: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 100, spa: 95, spd: 70, spe: 65},
		abilities: {0: "Swift Swim", 1: "Keen Eye"},
	},
	poochyena: {
		inherit: true,
		heldItems: ["005pechaberry"],
	},
	psyduck: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Oblivious"},
	},
	ralts: {
		inherit: true,
		abilities: {0: "Synchronize"},
	},
	rayquaza: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Run Away"},
		catchRate: 1,
		heldItems: ["100lumberry"],
	},
	regice: {
		inherit: true,
		baseStats: {hp: 80, atk: 50, def: 100, spa: 120, spd: 200, spe: 50},
	},
	regirock: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 200, spa: 50, spd: 100, spe: 50},
	},
	registeel: {
		inherit: true,
		baseStats: {hp: 100, atk: 75, def: 150, spa: 75, spd: 150, spe: 50},
	},
	relicanth: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Swift Swim"},
		heldItems: ["005greenshard"],
	},
	roselia: {
		inherit: true,
		heldItems: ["005poisonbarb"],
	},
	sableye: {
		inherit: true,
		baseStats: {hp: 95, atk: 125, def: 125, spa: 65, spd: 115, spe: 20},
		abilities: {0: "Pressure"},
		catchRate: 3,
	},
	salamence: {
		inherit: true,
		catchRate: 2,
		heldItems: ["005dragonscale"],
	},
	sceptile: {
		inherit: true,
		catchRate: 10,
	},
	sealeo: {
		inherit: true,
		evoLevel: 25,
	},
	shedinja: {
		inherit: true,
		baseStats: {hp: 1, atk: 110, def: 35, spa: 30, spd: 20, spe: 40},
		catchRate: 1,
	},
	shelgon: {
		inherit: true,
		catchRate: 4,
		heldItems: ["005dragonscale"],
	},
	shuppet: {
		inherit: true,
		catchRate: 190,
		heldItems: ["005spelltag"],
	},
	skitty: {
		inherit: true,
		heldItems: ["050moonstone", "005leppaberry"],
	},
	slaking: {
		inherit: true,
		catchRate: 3,
	},
	slakoth: {
		inherit: true,
		catchRate: 65,
	},
	solrock: {
		inherit: true,
		baseStats: {hp: 90, atk: 95, def: 85, spa: 55, spd: 65, spe: 70},
		catchRate: 25,
		heldItems: ["005sunstone"],
	},
	spinda: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80},
		heldItems: ["005chestoberry"],
	},
	swalot: {
		inherit: true,
		heldItems: ["005bigpearl"],
	},
	swampert: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Torrent"},
		catchRate: 5,
	},
	swellow: {
		inherit: true,
		baseStats: {hp: 60, atk: 85, def: 60, spa: 75, spd: 50, spe: 125},
	},
	torchic: {
		inherit: true,
		abilities: {0: "Speed Boost", 1: "Blaze"},
		heldItems: ["050oranberry"],
	},
	torkoal: {
		inherit: true,
		abilities: {0: "White Smoke", 1: "Shell Armor"},
	},
	trapinch: {
		inherit: true,
		abilities: {0: "Arena Trap", 1: "Hyper Cutter"},
		catchRate: 20,
		heldItems: ["005softsand"],
	},
	treecko: {
		inherit: true,
		heldItems: ["050oranberry"],
	},
	vibrava: {
		inherit: true,
		catchRate: 6,
	},
	vigoroth: {
		inherit: true,
		catchRate: 35,
	},
	volbeat: {
		inherit: true,
		baseStats: {hp: 65, atk: 73, def: 75, spa: 47, spd: 85, spe: 85},
		abilities: {0: "Swarm"},
		heldItems: ["100berryjuice"],
	},
	wailmer: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Oblivious"},
		catchRate: 2,
	},
	wailord: {
		inherit: true,
		baseStats: {hp: 160, atk: 110, def: 64, spa: 110, spd: 110, spe: 1},
		abilities: {0: "Pressure", 1: "Oblivious"},
		evoLevel: 70,
		catchRate: 1,
	},
	walrein: {
		inherit: true,
		abilities: {0: "Rain Dish", 1: "Thick Fat"},
	},
	whiscash: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Oblivious"},
	},
	whismur: {
		inherit: true,
		abilities: {0: "Vital Spirit"},
		heldItems: ["005chestoberry"],
	},
	zangoose: {
		inherit: true,
		abilities: {0: "Guts", 1: "Immunity"},
	},
	zigzagoon: {
		inherit: true,
		abilities: {0: "Guts"},
		heldItems: ["100berryjuice"],
	},
};
