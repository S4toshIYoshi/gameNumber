//генерирует массив похожий на прогресс например [1,0,0,0]
//примает какое сейчас значение прогресса и максимальное колличесвто прогресса
export const initStatus = (value, max) => {
	const result = [];

	for (let i = 0; i < max; i++) {
		if (value <= i) {
			result.push(0);
		} else {
			result.push(1);
		}
	}

	return result;
};

//возвращает строку html элемента с прогрессом например ***oo - где звездочка это закрашенная точка, а о нет
export const progressBar = (value, max) => {
	const status = initStatus(value, max);

	let result = '';
	status.forEach(el => {
		result += `<div class='${
			!!el ? 'progress-bar_active' : 'progress-bar_passive'
		}'></div>`;
	});

	return `<div class='progress-bar'>${result}<p>X${value}</p></div>`;
};
