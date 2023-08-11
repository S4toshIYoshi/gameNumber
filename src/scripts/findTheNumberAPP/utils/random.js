import { COLORS, EFFECT } from '../../../data/randomValue';

export const randomNumber = (max, min = 0) => {
	return Math.floor(Math.random() * (max - min) + min);
};
//принмает: массив по котрому идет поиск, значения которое он ищет, число которе нужно натйи, котрое вставится само, максимальное занчение
// если дубликатов нет возвращает уникальное значение
function generateUniqueNumber(data, value, currentValue, max) {
	if (!data.some(el => el.value === value) && value !== currentValue) {
		return value;
	}
	return generateUniqueNumber(data, randomNumber(max), currentValue, max);
}

export const getRandomValues = (minValue, maxValue, cards, effect) => {
	const data = {
		value: randomNumber(maxValue, minValue),
		searchNumber: [],
	}; //инциализируем объект в которм будет число для поиска и объекты из котрых нужно искать

	const insertCorrectValue = randomNumber(cards - 1); //вставляем правильное число по этому индексу

	//итерируемся по значением котрые нужно вернуть и как только дойдем до нужного индекса всавим нужное число

	for (let i = 0; i < cards; i++) {
		if (i !== insertCorrectValue) {
			data.searchNumber.push({
				value: generateUniqueNumber(
					data.searchNumber,
					randomNumber(maxValue, minValue),
					data.value,
					maxValue
				), // проверка на похожие числа если есть получется новое
				color: COLORS[randomNumber(COLORS.length)],
				effect: effect ? EFFECT[randomNumber(EFFECT.length)] : '',
			});
		} else {
			data.searchNumber.push({
				value: data.value,
				color: COLORS[randomNumber(COLORS.length)],
				effect: effect ? EFFECT[randomNumber(EFFECT.length)] : '',
			});
		}
	}

	return data;
};
