//примает уровень и в зависимости от уровня возвращает его настройки
export const getDifficulty = lvl => {
	switch (lvl) {
		case 1:
			return {
				minValue: 0,
				maxValue: 10,
				cards: 6,
				effect: false,
			};
		case 2:
			return {
				minValue: 10,
				maxValue: 100,
				cards: 6,
				effect: false,
			};
		case 3:
			return {
				minValue: 100,
				maxValue: 1000,
				cards: 6,
				effect: true,
			};
		case 4:
		case 5:
			return {
				minValue: 100,
				maxValue: 1000,
				cards: 12,
				effect: true,
			};
		case 6:
			return {
				minValue: 100,
				maxValue: 1000,
				cards: 16,
				effect: true,
			};
		case 7:
			return {
				minValue: 1000,
				maxValue: 10000,
				cards: 16,
				effect: true,
			};
		case 8:
		case 9:
			return {
				minValue: 1000,
				maxValue: 10000,
				cards: 25,
				effect: true,
			};
		default:
			return {
				maxValue: 0,
				cards: 0,
				effect: false,
			};
	}
};
