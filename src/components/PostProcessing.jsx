// PostProcessing.jsx
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
//__________________________________________________________________________________________________________

function applyPostProcessing(renderer, scene, camera, outlinedMeshes) {
    // Create the composer and render pass
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Add outline pass
    const outlinePass = new OutlinePass(
        new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
        outlinePass.selectedObjects = outlinedMeshes; // apply outline to specified meshes
        outlinePass.edgeStrength = 1;
        outlinePass.edgeGlow = 1;
        outlinePass.edgeThickness = 0.1;
        outlinePass.visibleEdgeColor.set('#FFDE85');
        outlinePass.hiddenEdgeColor.set('#755D19');
        outlinePass.blending = THREE.AdditiveBlending;
    composer.addPass(outlinePass);

    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
    composer.addPass(gammaCorrectionPass);

    return { outlinePass, composer };
}

export default applyPostProcessing;

