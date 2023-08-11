import { COLORS } from '../../../data/randomValue';
import { endGame } from './endGame';
import { InfoBar } from '../infoBar/infoBar';
import { createLvl } from '../level/createLvl';
import { mark } from './mark';

const { randomNumber } = require('../utils/random');

export const run = () => {
	//init
	let information = new InfoBar('.game__information', 10, 1, 0, 1);
	information.start();

	let value = createLvl(information.get().lvl);

	let isStop = false;

	let timer;

	const statistic = {
		result: 0,
		correctAnswer: 0,
		allAnswer: 0,
		accuracyAnswer: 0,
	};

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

				statistic.result = information.score;
				statistic.correctAnswer++;
				mark(true);
			} else {
				information.setBoost(false);
				mark(false);
			}

			value = createLvl(information.get().lvl);
			information.render();
			statistic.allAnswer++;
		}

		if (isStop) {
			field.style.backgroundColor = '#fff';
			endGame(statistic);
		}
	});
};
