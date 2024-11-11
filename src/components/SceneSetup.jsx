// yay! works
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//__________________________________________________________________________________________________________

function setupScene(mountRef, setLoading) {
    //scene
    const scene = new THREE.Scene();
    //camera
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
        if (window.innerWidth <= 768) {  // Adjust this threshold as needed for your mobile breakpoint
            camera.position.set(26, 34, 36);  // Mobile-specific camera position
        } else {
            camera.position.set(15, 18, 19);  // Desktop camera position
        }
    camera.rotation.y = THREE.MathUtils.degToRad(30); // rotate 30 degrees to the left
    //renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    //__________________________________________________________________________________________________________
    //arrays n stuff
    const outlinedMeshes = [];
    const defaultOutlines = [];
    const navigationMeshes = {};
    const navigationMeshesNames = ['contact', 'aboutme', 'work', 'education', 'projects'];
    const defaultOutlineNames = ['frames', 'briefcase', 'gradcap', 'computer',];
    const hitboxes = ['contacthitbox', 'aboutmehitbox', 'workhitbox', 'educationhitbox', 'projectshitbox',];
    const outlinePairs = {
        'frames': ['aboutme'], 'aboutme': ['frames'], 'aboutmehitbox': ['aboutme'],
        'briefcase': ['work'], 'workhitbox': ['work'], 'work': ['briefcase'],
        'gradcap': ['education'], 'educationhitbox': ['education'], 'education': ['gradcap'],
        'computer': ['projects'], 'projects': ['computer'], 'projectshitbox': ['projects'],
        'contacthitbox': ['contact']
    };
    //__________________________________________________________________________________________________________
    //loader
    const loader = new GLTFLoader();
    loader.load('/models/roommerged.glb', (gltf) => {
        scene.add(gltf.scene);
        renderer.setClearColor(new THREE.Color(0x201910).convertSRGBToLinear());
        renderer.setPixelRatio(2);
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(0, -3, 0);

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                //add stuff to arrays
                if (outlinePairs.hasOwnProperty(child.name)) { //if mesh is in outlinePairs, add an outline. 
                    outlinedMeshes.push(child);
                }
                if (defaultOutlineNames.includes(child.name)) { //add the names to defaultOutlines array.
                    defaultOutlines.push(child);
                }
                if (navigationMeshesNames.includes(child.name)) {
                    navigationMeshes[child.name] = child;
                }

                //add materials
                if (hitboxes.includes(child.name)) { //make the hitbox meshes not visible
                    child.visible = false
                }

                if (child.name === 'glow') {
                    const pointLight = new THREE.PointLight(0xffd4a6, 2, 5);
                    pointLight.position.copy(child.position);
                    scene.add(pointLight);
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0xffdea1,
                        emissive: 0xffdea1,
                        emissiveIntensity: 1,
                    });
                }
            }
        });
        console.log('done Loading model')
        setLoading(false);
    });
    //__________________________________________________________________________________________________________
    //ambient lighting
    const ambientLight = new THREE.AmbientLight(0xFFE7BF, 2);
    scene.add(ambientLight);

    return { scene, camera, renderer, ambientLight, navigationMeshes, outlinedMeshes, outlinePairs, defaultOutlines, };
}

export default setupScene;
