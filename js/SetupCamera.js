const SetupCamera = () => {
	const camera = new THREE.PerspectiveCamera(
		25,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	camera.position.z = 16;
	camera.position.y = 4.7;
	camera.rotation.x = 6;

	return camera;
};

export default SetupCamera;
