//works yay
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

//__________________________________________________________________________________________________________

function addReflector(scene) {
  const geometry = new THREE.PlaneGeometry(100, 100);
  
//make color filter for reflector
  const planeMat = new THREE.MeshLambertMaterial({
    color: 0x302c27,
    transparent: true,
    opacity: 0.75,
    reflectivity: 2,
  });

//make reflector
  const reflectorColor = new THREE.Mesh(geometry, planeMat);
  reflectorColor.rotation.x = -Math.PI / 2;
  reflectorColor.position.y = -3;
  scene.add(reflectorColor);

  const reflector = new Reflector(geometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio * 0.3, // reduce resolution to 30%
    textureHeight: window.innerHeight * window.devicePixelRatio * 0.3, 
    color: 0x777777,
    recursion: 0,
  });
  reflector.rotation.x = -Math.PI / 2;
  reflector.position.y = -3.01;
  scene.add(reflector);
}

export default addReflector;

