import { COLORS } from '../../../../data/randomValue';
import { endGame } from '../endgameScreen/endGame';
import { InfoBar } from '../../infoBar/infoBar';
import { createLvl } from '../../level/createLvl';
import { mark } from '../mark/mark';

const { randomNumber } = require('../../utils/random');

export const run = () => {
	//init значения которе нужны при первичной загрузке

	//инициализирую класс с информацией о ссесии
	let information = new InfoBar('.game__information', 60, 1, 0, 1);
	information.start(); //запускаю таймер
	information.render(); // рендер начальной информации

	//получаю значение которое надо найти на уровне и createLvl сразу рендерит карточки в DOM
	let value = createLvl(information.get().lvl);

	//это переменная будет равна true как только закончиться время игры
	let isStop = false;

	//таймер который будет работать пока переменная isStop равна false
	let timer;
	timer = setInterval(() => {
		information.render();
		if (information.time < 1) {
			clearInterval(timer);
			isStop = true;
		}
	}, 1000);

	//статистика которая выведиться в конце игры
	const statistic = {
		result: 0,
		correctAnswer: 0,
		allAnswer: 0,
		accuracyAnswer: 0,
	};

	//рандомно меняю цвет поля
	const field = document.querySelector('.field');
	field.style.backgroundColor = COLORS[randomNumber(COLORS.length)];

	//вешаю слушатель на поле с карточками
	const buttons = document.getElementById('fieldGame');
	buttons.addEventListener('click', e => {
		//условие которое не дает пройти дальше если нашатие было не в карточку
		if (e.target.className !== 'game__main') {
			//генерация нового цвета фона
			field.style.backgroundColor = COLORS[randomNumber(COLORS.length)];

			//проверка на правильный выбор карточки
			if (e.target.innerText == value) {
				//обновляю информацию о сесии
				information.setScore();
				information.setBoost(true);
				information.setLvl(true);

				//обновляю статистику
				statistic.result = information.score;
				statistic.correctAnswer++;

				//вызываеться окно с галочкой
				mark(true);
			} else {
				//обновляю информацию о сесии
				information.setLvl(false);
				information.setBoost(false);

				//вызываеться окно с крестиком
				mark(false);
			}
			//генерация нового уровня
			value = createLvl(information.get().lvl);
			information.render();

			statistic.allAnswer++;
		}

		//когда время игры выйдет запуститься экран с концом игры и статистикой
		if (isStop) {
			field.style.backgroundColor = '#fff';
			endGame(statistic);
		}
	});
};
