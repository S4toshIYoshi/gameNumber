import { controllerScreen } from './controllerScreen';

const { run } = require('./gaming');

export const startGame = () => {
	const button = document.getElementById('buttonNext');

	button.addEventListener('click', () => {
		controllerScreen(false, true, false, false);

		setTimeout(() => {
			controllerScreen(false, false, true, false);

			run();
		}, 3000);
	});
};
