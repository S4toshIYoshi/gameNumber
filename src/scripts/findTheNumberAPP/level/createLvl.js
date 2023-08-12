import { getRandomValues } from '../utils/random';
import { render } from '../render/render';
import { getDifficulty } from './settingDifficulty';

//принимает уровень который надо сгенерировать
//гегрирует в зависимости от сложности переданного уровня от 1 до 9
//сразу рнедерит карточки
//возвращает заначение которое нужно найтйи
export const createLvl = lvl => {
	const { minValue, maxValue, cards, effect } = getDifficulty(lvl);
	const { value, searchNumber } = getRandomValues(
		minValue,
		maxValue,
		cards,
		effect
	);
	render(value, searchNumber);

	return value;
};
