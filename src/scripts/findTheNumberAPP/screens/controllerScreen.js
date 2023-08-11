import { countdownTime } from './countdown';

const searchClass = (obj, className) => {
	let isUnique = false;

	for (let i = 0; i < obj.length - 1; i++) {
		if (obj[i] === className) {
			isUnique = false;
			return isUnique;
		}
	}

	return isUnique;
};

const toggleClass = (obj, action, className) => {
	if (action === 'add') {
		if (!searchClass(obj.classList, className)) {
			obj.classList.add(className);
		}
	}
	if (action === 'remove') {
		obj.classList.remove(className);
	}
};

export const controllerScreen = (start, timer, game, end) => {
	const screenStart = document.getElementById('screenStart');
	const screenGame = document.getElementById('screenGame');
	const countdown = document.querySelector('.countdown');

	if (start) {
		toggleClass(screenStart, 'remove', 'close');
		toggleClass(screenGame, 'add', 'close');
		toggleClass(screenEnd, 'add', 'close');
		toggleClass(countdown, 'add', 'close');
	}

	if (timer) {
		toggleClass(screenStart, 'add', 'close');
		toggleClass(screenGame, 'add', 'close');
		toggleClass(screenEnd, 'add', 'close');
		toggleClass(countdown, 'remove', 'close');

		countdownTime(3);
	}

	if (game) {
		toggleClass(screenStart, 'add', 'close');
		toggleClass(screenGame, 'remove', 'close');
		toggleClass(screenEnd, 'add', 'close');
		toggleClass(countdown, 'add', 'close');
	}

	if (end) {
		toggleClass(screenStart, 'add', 'close');
		toggleClass(screenGame, 'add', 'close');
		toggleClass(screenEnd, 'remove', 'close');
		toggleClass(countdown, 'add', 'close');
	}
};
