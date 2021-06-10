const ImportModels = (scene) => {
   const loader = new THREE.GLTFLoader();

   //* === Piano Model ===
   let pianoModel;
   loader.load(
      './models/Piano.glb',
      (gltf) => {
         pianoModel = gltf.scene;
         pianoModel.traverse((o) => {
            if (o.isMesh) {
               let prevMaterial = o.material;
               o.material = new THREE.MeshPhongMaterial();
               THREE.MeshBasicMaterial.prototype.copy.call(
                  o.material,
                  prevMaterial
               );
            }
         });
         scene.add(pianoModel);
      },

      undefined,
      (error) => {
         console.error(error);
      }
   );

   //* === White Key Model ===
   let whiteKeyModel;
   let whiteKeys = [];

   loader.load(
      './models/WhiteKey.glb',
      (gltf) => {
         whiteKeyModel = gltf.scene;

         whiteKeyModel.traverse((o) => {
            if (o.isMesh) {
               let prevMaterial = o.material;
               o.material = new THREE.MeshPhongMaterial();
               THREE.MeshBasicMaterial.prototype.copy.call(
                  o.material,
                  prevMaterial
               );
            }
         });

         for (let i = 0; i < 52; i++) {
            whiteKeys.push(whiteKeyModel.clone());
            whiteKeys[i].position.set(0 + i * 0.0902, 0, 0);

            scene.add(whiteKeys[i]);
         }
      },
      undefined,
      (error) => {
         console.error(error);
      }
   );

   //* === Black Key Model ===
   let blackKeyModel;
   let blackKeys = [];

   loader.load(
      './models/BlackKey.glb',
      (gltf) => {
         blackKeyModel = gltf.scene;

         blackKeyModel.traverse((o) => {
            if (o.isMesh) {
               let prevMaterial = o.material;
               o.material = new THREE.MeshPhongMaterial();
               THREE.MeshBasicMaterial.prototype.copy.call(
                  o.material,
                  prevMaterial
               );
            }
         });

         for (let i = 0; i < 50; i++) {
            if ((i - 1) % 7 != 0 && (i - 4) % 7 != 0) {
               blackKeys[i] = blackKeyModel.clone();
               blackKeys[i].position.set(0 + i * 0.0902, 0, 0);

               scene.add(blackKeys[i]);
            }
         }
      },
      undefined,
      (error) => {
         console.error(error);
      }
   );
   return [whiteKeys, blackKeys];
};

export default ImportModels;
