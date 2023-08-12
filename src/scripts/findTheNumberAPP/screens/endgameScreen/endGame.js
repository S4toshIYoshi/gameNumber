import { procentNumber } from '../../utils/arefmetic';
import { controllerScreen } from '../controllerScreen';

//примает объект со статистикой
export const endGame = statistic => {
	let { result, correctAnswer, allAnswer, accuracyAnswer } = statistic;

	//считаю какой прцоент карточек угадан
	accuracyAnswer = procentNumber(correctAnswer, allAnswer);

	const resultScreen = document.getElementById('result');
	const correctScreen = document.getElementById('correctAnswer');
	const accuracyScreen = document.getElementById('accuracyAnswer');

	resultScreen.innerText = result;
	correctScreen.innerText = `${correctAnswer} из ${allAnswer}`;
	accuracyScreen.innerText = `${Math.floor(accuracyAnswer)}%`;

	const button = document.getElementById('buttonDown');

	controllerScreen(false, false, false, true);

	//как только будет нажата кнопка произойдет перезагрузка
	button.addEventListener('click', () => {
		window.location.reload();
	});
};
