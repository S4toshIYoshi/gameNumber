import { progressBar } from './progressBar';

export class InfoBar {
	constructor(layout, time, lvl, score, boost) {
		(this.time = time),
			(this.lvl = lvl),
			(this.score = score),
			(this.boost = boost),
			(this.layout = layout);
	}

	get() {
		return {
			time: this.time,
			lvl: this.lvl,
			score: this.score,
			boost: this.boost,
		};
	}

	start() {
		const interval = setInterval(() => {
			this.time--;
			if (this.time < 1) {
				clearInterval(interval);
			}
		}, 1000);
	}

	setLvl() {
		if (this.lvl < 9) {
			this.lvl++;
		}
	}

	setScore() {
		this.score += 44 * this.boost;
	}

	setBoost(set) {
		if (set) {
			if (this.boost <= 5) {
				this.boost++;
			}
		} else {
			if (this.boost > 1) {
				this.boost--;
			}
		}
	}

	initTimer(value) {
		const sec = Math.trunc(value % 60);
		const min = Math.trunc((value / 60) % 60);

		const minDoubleZero = min < 10 ? '0' + min : min;
		const secDoubleZero = sec < 10 ? '0' + sec : sec;

		return `${minDoubleZero}:${secDoubleZero}`;
	}

	render() {
		const gameInformation = document.querySelector(this.layout);

		const time = document.createElement('div');
		time.className = 'item';
		const lvl = document.createElement('div');
		lvl.className = 'item';
		const score = document.createElement('div');
		score.className = 'item';

		const boost = document.createElement('div');
		boost.className = 'item wrapper__progress-bar';

		gameInformation.innerHTML = '';

		time.innerHTML = `<p class='information__description'>ВРЕМЯ</p> <p>${this.initTimer(
			this.time
		)}</p>`;
		lvl.innerHTML = `<p class='information__description'>УРОВЕНЬ</p> <p>${this.lvl}-9</p>`;
		score.innerHTML = `<p class='information__description'>ОЧКИ</p> <p>${this.score}</p>`;

		boost.innerHTML = `<p class='information__description'>БОНУС</p>${progressBar(
			this.boost,
			5
		)}`;

		gameInformation.append(time);
		gameInformation.append(lvl);
		gameInformation.append(score);
		gameInformation.append(boost);
	}
}
