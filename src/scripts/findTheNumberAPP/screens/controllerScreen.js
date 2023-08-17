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

/**
 *
 * @param {*openScreen экран который должен быть с параметром open*} openScreen
 * @param {*closeScreen колекция экранов которые должны быть спараметром close*} closeScreen
 */
export const controllerScreen = (openScreen, closeScreen = []) => {
	const screenOpen = document.querySelector(openScreen);
	toggleClass(screenOpen, 'remove', 'close');

	closeScreen.forEach(value => {
		toggleClass(document.querySelector(value), 'add', 'close');
		console.log(value);

		console.log(document.querySelector(value));
	});
};
