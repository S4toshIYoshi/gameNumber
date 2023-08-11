export const countdownTime = value => {
	const count = document.querySelector('.count');
	count.innerText = value;
	const interval = setInterval(() => {
		value--;
		if (value === 0) {
			clearInterval(interval);
		}
		count.innerText = value;
	}, 1000);
};
