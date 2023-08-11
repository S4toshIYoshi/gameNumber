export const renderInfo = lvl => {
	switch (lvl) {
		case 1:
			return {
				maxValue: 10,
				cards: 6,
				effect: false,
			};
		case 2:
			return {
				maxValue: 100,
				cards: 6,
				effect: false,
			};
		case 3:
			return {
				maxValue: 1000,
				cards: 6,
				effect: true,
			};
		case 4:
		case 5:
			return {
				maxValue: 1000,
				cards: 12,
				effect: true,
			};
		case 6:
			return {
				maxValue: 1000,
				cards: 16,
				effect: true,
			};
		case 7:
			return {
				maxValue: 10000,
				cards: 16,
				effect: true,
			};
		case 8:
		case 9:
			return {
				maxValue: 10000,
				cards: 25,
				effect: true,
			};
	}
};
