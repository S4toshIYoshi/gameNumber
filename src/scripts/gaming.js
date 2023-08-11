import { COLORS } from '../data/randomValue';
import { render } from './render';

const { getRandomValues, randomNumber } = require('./random');

export const run = () => {
	const { value, searchNumber } = getRandomValues(6, 100, false);

	const field = document.getElementById('field');
	field.style.backgroundColor = COLORS[randomNumber(COLORS.length)];

	const fieldGame = document.getElementById('fieldGame');

	fieldGame.addEventListener('click', e => {
		if (e.target.childNodes[0].data == value) {
			console.log('yes');
			run();
		} else {
			run();
		}
	});

	render(value, searchNumber);
};
