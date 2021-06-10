import ImportModels from './ImportModels.js';
import ClickingListeners from './ClickingListeners.js';
import SetupCamera from './SetupCamera.js';

const Render = () => {
	const scene = new THREE.Scene();

	const camera = SetupCamera();

	let [whiteKeys, blackKeys] = ImportModels(scene);

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	renderer.render(scene, camera);

	ClickingListeners(whiteKeys, blackKeys);

	const onWindowResize = () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	};
	window.addEventListener('resize', onWindowResize);

	const animate = function () {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	};
	animate();
};

export default Render;
