import { COLORS, EFFECT } from '../data/randomValue';

export const randomNumber = max => {
	return Math.round(Math.random() * max);
};
//принмает: массив по котрому идет поиск, значения которое он ищет, число которе нужно натйи, котрое вставится само, максимальное занчение
// если дубликатов нет возвращает уникальное значение
function generateUniqueNumber(data, value, currentValue, max) {
	if (!data.some(el => el.value === value) && value !== currentValue) {
		return value;
	}
	return generateUniqueNumber(data, randomNumber(max), currentValue, max);
}

export const getRandomValues = (lengthValue, max, effect) => {
	const data = {
		value: randomNumber(max),
		searchNumber: [],
	}; //инциализируем объект в которм будет число для поиска и объекты из котрых нужно искать

	const insertCorrectValue = randomNumber(lengthValue); //вставляем правильное число по этому индексу

	//итерируемся по значением котрые нужно вернуть и как только дойдем до нужного индекса всавим нужное число

	for (let i = 0; i < lengthValue; i++) {
		if (i !== insertCorrectValue) {
			data.searchNumber.push({
				value: generateUniqueNumber(
					data.searchNumber,
					randomNumber(max),
					data.value,
					max
				), // проверка на похожие числа если есть получется новое
				color: COLORS[randomNumber(COLORS.length - 1)],
				effect: effect ? EFFECT[randomNumber(EFFECT.length - 1)] : '',
			});
		} else {
			data.searchNumber.push({
				value: data.value,
				color: COLORS[randomNumber(COLORS.length - 1)],
				effect: effect ? EFFECT[randomNumber(EFFECT.length - 1)] : '',
			});
		}
	}

	return data;
};
