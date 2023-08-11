export const render = (value, cards) => {
	const number = document.getElementById('searchItem');
	number.innerHTML = '';
	number.innerText = value;

	const fieldGame = document.getElementById('fieldGame');

	fieldGame.innerHTML = '';

	cards.map((el, idx) => {
		const div = document.createElement('div');
		div.className = `cardNumber ${el.effect}`;
		div.innerText = el.value;
		div.style = `background: ${el.color}`;
		div.id = `cardValue${idx}`;

		fieldGame.append(div);
	});
};
