import { getRandomValues } from '../utils/random';
import { render } from '../render/render';
import { getDifficulty } from './settingDifficulty';

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
