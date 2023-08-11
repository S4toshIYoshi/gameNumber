import { COLORS } from '../../../data/randomValue';
import { InfoBar } from '../infoBar/infoBar';
import { createLvl } from '../level/createLvl';

const { randomNumber } = require('../random');

export const run = () => {
	//init
	let information = new InfoBar('.game__information', 1, 1, 0, 1);
	information.start();

	let value = createLvl(information.get().lvl);

	let isStop = false;

	let timer;

	information.render();
	timer = setInterval(() => {
		information.render();
		if (information.time < 1) {
			clearInterval(timer);
			isStop = true;
		}
	}, 1000);

	const field = document.querySelector('.field');
	field.style.backgroundColor = COLORS[randomNumber(COLORS.length)];

	const buttons = document.getElementById('fieldGame');
	buttons.addEventListener('click', e => {
		if (e.target.className !== 'game__main') {
			field.style.backgroundColor = COLORS[randomNumber(COLORS.length)];

			if (e.target.innerText == value) {
				information.setScore();
				information.setBoost(true);
				information.setLvl(true);

				value = createLvl(information.get().lvl);
				information.render();
			} else {
				information.setBoost(false);
				value = createLvl(information.get().lvl);
				information.render();
			}
		}

		if (isStop) {
			console.log('STOPED!');
		}
	});
};
