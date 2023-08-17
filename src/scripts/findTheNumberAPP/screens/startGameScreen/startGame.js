import { controllerScreen } from '../controllerScreen';
import { countdownTime } from '../countdownScreen/countdown';

const { run } = require('../gameScreen/game');

export const startGame = () => {
	const button = document.getElementById('buttonNext');

	button.addEventListener('click', () => {
		controllerScreen('.countdown', [
			'.start-menu',
			'.end-menu',
			'.field__game',
		]);

		countdownTime(3);

		setTimeout(() => {
			controllerScreen('.field__game', [
				'.start-menu',
				'.end-menu',
				'.countdown',
			]);

			run();
		}, 3000);
	});
};
