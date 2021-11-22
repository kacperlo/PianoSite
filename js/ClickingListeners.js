import { whiteKeysNaming, blackKeysNaming } from './TableOfKeys.js';
import { pressing, releasing } from './ClickingFunctions.js';

const ClickingListeners = (whiteKeys, blackKeys) => {
	let audio = new Map();
	for (let key of whiteKeysNaming)
		audio.set(key, new Audio(`./sounds/${key}.mp3`));
	for (let key of blackKeysNaming)
		if (key != '-') audio.set(key, new Audio(`./sounds/${key}.mp3`));

	let pressed = [];
	let volumes = [];
	let playingKeys = [];

	document.addEventListener('keydown', (e) => {
		const key = e.code;

		if (!pressed[key]) {
			pressed[key] = true;

			if (whiteKeysNaming.includes(key) || blackKeysNaming.includes(key))
				pressing(
					key,
					volumes,
					audio,
					playingKeys,
					whiteKeys,
					blackKeys
				);
		}
	});

	document.addEventListener('keyup', (e) => {
		const key = e.code;
		pressed[key] = false;

		if (whiteKeysNaming.includes(key) || blackKeysNaming.includes(key))
			releasing(key, volumes, audio, playingKeys, whiteKeys, blackKeys);
	});
};

export default ClickingListeners;
