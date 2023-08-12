//отрусует крестик или галочку в середине экрана
//true галочка
//false крестик
export const mark = answer => {
	const wrapperSuccses = document.getElementById('succsess');
	const wrapperCross = document.getElementById('cross');

	if (answer) {
		wrapperSuccses.classList.remove('close');
	} else {
		wrapperCross.classList.remove('close');
	}

	setTimeout(() => {
		if (answer) {
			wrapperSuccses.classList.add('close');
		} else {
			wrapperCross.classList.add('close');
		}
	}, 500);
};
