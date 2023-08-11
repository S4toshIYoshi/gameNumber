const { run } = require('./pointEntry/gaming');

export const startGame = () => {
	const button = document.getElementById('buttonNext');
	const screenStart = document.getElementById('screenStart');
	const screenGame = document.getElementById('screenGame');

	button.addEventListener('click', () => {
		screenStart.classList.add('close');
		screenGame.classList.remove('close');

		setTimeout(() => {
			run();
		}, 3000);
	});
};
