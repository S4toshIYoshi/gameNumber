export const render = (value, searchNumber) => {
	const number = document.getElementById('searchItem');
	const fieldGame = document.querySelector('.game__main');

	number.innerHTML = '';
	fieldGame.innerHTML = '';

	number.innerText = value;

	//рендер сработает если будет передан массив
	if (searchNumber) {
		searchNumber.map((el, idx) => {
			const div = document.createElement('div');

			//делаю провери на модификатор rotate чтобы присвоить его только к дочернему элементу а остальные к каротчке
			div.className = `cardNumber ${el.effect !== 'rotate' ? el.effect : ''}`;
			div.innerHTML = `<p class=${el.effect === 'rotate' ? 'rotate' : ''}>${
				el.value
			}</p>`;
			div.style = `background: ${el.color}`;
			div.id = `cardValue${idx}`;

			fieldGame.append(div);
		});
	}

	const gameMain = document.querySelector('.game__main');

	//в зависимости от уровня меняю стили стетки
	if (searchNumber.length <= 6) {
		gameMain.classList.remove('_grid12');
	}

	if (searchNumber.length <= 16) {
		gameMain.classList.remove('_grid25');
	}

	if (searchNumber.length > 16) {
		gameMain.classList.add('_grid25');
	}

	if (searchNumber.length > 6) {
		gameMain.classList.add('_grid12');
	}
};
