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

export const progressBar = (value, max) => {
	const status = initStatus(value, max);

	let result = '';
	status.forEach(el => {
		result += `<div class='${
			!!el ? 'progress-bar_active' : 'progress-bar_passive'
		}'></div>`;
	});

	return `<div class='progress-bar'>${result}<p>X${max}</p></div>`;
};
