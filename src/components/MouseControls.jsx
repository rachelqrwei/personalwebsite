import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function applyOrbitControls(camera, renderer) {
    //now the model materials and scenes are established, set controls
    const controls = new OrbitControls(camera, renderer.domElement); //orbitcontrols
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.maxPolarAngle = Math.PI / 2; // Limit rotation to prevent looking below the floor
return controls
}
