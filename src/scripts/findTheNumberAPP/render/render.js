export const render = (value, searchNumber) => {
	const number = document.getElementById('searchItem');
	const fieldGame = document.querySelector('.game__main');

	number.innerHTML = '';
	fieldGame.innerHTML = '';

	number.innerText = value;

	if (searchNumber) {
		searchNumber.map((el, idx) => {
			const div = document.createElement('div');

			div.className = `cardNumber ${el.effect}`;
			div.innerHTML = `<p>${el.value}</p>`;
			div.style = `background: ${el.color}`;
			div.id = `cardValue${idx}`;

			fieldGame.append(div);
		});
	}

	const gameMain = document.querySelector('.game__main');

	if (searchNumber.length > 16) {
		gameMain.classList.add('_grid25');
	} else if (searchNumber.length > 6) {
		gameMain.classList.add('_grid12');
	}
};
