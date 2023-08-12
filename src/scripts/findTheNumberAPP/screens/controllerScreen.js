import { countdownTime } from './countdownScreen/countdown';

//примает объект и класс котрый нужно найти если совпадения есть вернет false если нету true
const searchClass = (obj, className) => {
	let isUnique = false;

	for (let i = 0; i < obj.length - 1; i++) {
		if (obj[i] === className) {
			isUnique = false;
			return isUnique;
		}
	}

	return isUnique;
};

//чтобы не получилось ситуация где класс выглядит так element close close..., сделана эта функция
//на вход принимает объект в который нужно добавить определенный класс, action это действия remove или add
//производит поиск и если значения нет то добовляет класс елси есть то нет, remove класса происходит без условий
const toggleClass = (obj, action, className) => {
	if (action === 'add') {
		if (!searchClass(obj.classList, className)) {
			obj.classList.add(className);
		}
	}
	if (action === 'remove') {
		obj.classList.remove(className);
	}
};

//на вход принимает 4 экрана и выводит те в какие переданно true значение
//контроль производиться просто по добовлению класса close с атрибутом display: none; в экраны которое передан false
export const controllerScreen = (start, timer, game, end) => {
	const screenStart = document.getElementById('screenStart');
	const screenGame = document.getElementById('screenGame');
	const countdown = document.querySelector('.countdown');

	if (start) {
		toggleClass(screenStart, 'remove', 'close');
		toggleClass(screenGame, 'add', 'close');
		toggleClass(screenEnd, 'add', 'close');
		toggleClass(countdown, 'add', 'close');
	}

	if (timer) {
		toggleClass(screenStart, 'add', 'close');
		toggleClass(screenGame, 'add', 'close');
		toggleClass(screenEnd, 'add', 'close');
		toggleClass(countdown, 'remove', 'close');

		countdownTime(3);
	}

	if (game) {
		toggleClass(screenStart, 'add', 'close');
		toggleClass(screenGame, 'remove', 'close');
		toggleClass(screenEnd, 'add', 'close');
		toggleClass(countdown, 'add', 'close');
	}

	if (end) {
		toggleClass(screenStart, 'add', 'close');
		toggleClass(screenGame, 'add', 'close');
		toggleClass(screenEnd, 'remove', 'close');
		toggleClass(countdown, 'add', 'close');
	}
};
