export const Moves: {[k: string]: ModdedMoveData} = {
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
		basePower: 100,
	},
	rollingKick: {
		inherit: true,
		basePower: 100,
		pp: 24
	},
	sandattack: {
		inherit: true,
		pp: 5
	},
	drillrun: {
		inherit: true,
		num: 356,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		name: "Drill Run",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		gen: 3,
	}
};
