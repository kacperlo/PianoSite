import { whiteKeysNaming, blackKeysNaming } from './TableOfKeys.js';
import { playAudio, fadeOut } from './AudioFunctions.js';

export const pressing = (
	key,
	volumes,
	audio,
	playingKeys,
	whiteKeys,
	blackKeys
) => {
	playAudio(key, volumes, audio, playingKeys);

	let keysNaming;
	let idName;
	let keysModels;

	if (whiteKeysNaming.includes(key)) {
		keysNaming = whiteKeysNaming;
		idName = 'whiteKeys';
		keysModels = whiteKeys;
	} else {
		keysNaming = blackKeysNaming;
		idName = 'blackKeys';
		keysModels = blackKeys;
	}

	keysModels[keysNaming.indexOf(key) + 16].position.y = -0.03;

	document
		.getElementById(idName)
		.childNodes[keysNaming.indexOf(key)].classList.add('pressed');
};

export const releasing = (
	key,
	volumes,
	audio,
	playingKeys,
	whiteKeys,
	blackKeys
) => {
	playingKeys[key] = setInterval(() => {
		fadeOut(key, volumes, audio, playingKeys);
	}, 5);

	let keysNaming;
	let idName;
	let keysModels;

	if (whiteKeysNaming.includes(key)) {
		keysNaming = whiteKeysNaming;
		idName = 'whiteKeys';
		keysModels = whiteKeys;
	} else {
		keysNaming = blackKeysNaming;
		idName = 'blackKeys';
		keysModels = blackKeys;
	}

	keysModels[keysNaming.indexOf(key) + 16].position.y = 0;

	document
		.getElementById(idName)
		.childNodes[keysNaming.indexOf(key)].classList.remove('pressed');
};
