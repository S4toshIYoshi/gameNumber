const { run } = require('./gaming');

const button = document.getElementById('buttonNext');
const screenStart = document.getElementById('screenStart');
const screenGame = document.getElementById('screenGame');

button.addEventListener('click', () => {
	screenStart.classList.add('close');
	screenGame.classList.remove('close');

	run();
});
