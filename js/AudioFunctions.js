export const playAudio = (key, volumes, audio, playingKeys) => {
	clearInterval(playingKeys[key]);
	volumes[key] = 100;
	audio.get(key).volume = 1;
	audio.get(key).currentTime = 0;

	audio.get(key).play();
};

export const fadeOut = (key, volumes, audio, playingKeys) => {
	if (volumes[key] > 0) {
		volumes[key] -= 1;
		audio.get(key).volume = volumes[key] / 100;
	} else {
		clearInterval(playingKeys[key]);
		audio.get(key).pause();
	}
};
