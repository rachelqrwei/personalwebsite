//main file for viewing the model.
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

//import all the other files
import Modal from './Modal';
import addReflector from './Reflector';
import applyPostProcessing from './PostProcessing';
import setupScene from './SceneSetup';
import { applyOrbitControls } from './MouseControls';
import { applyOutlineEffect } from './OutlineEffect';

import AboutMeModal from './pages/aboutme';
import ProjectsModal from './pages/Projects';
import WorkModal from './pages/Work';
import EducationModal from './pages/Education';
import ContactModal from './pages/Contact';
import LoadingScreen from './LoadingScreen';
const images = [
  '/images/aboutme-art.png',
  '/images/aboutme-baby.png',
  '/images/aboutme-cat.png',
  '/images/aboutme-concert.png',
  '/images/aboutme-grad.png',
  '/images/aboutme-star.png',
  '/images/aboutme-star2.png',
  '/images/education-mmhs-logo.jpg',
  '/images/education-mmhs.jpg',
  '/images/education-uw-logo.png',
  '/images/education-uw.png',
  '/images/education-wlu-logo.jpg',
  '/images/education-wlu.jpg',
  '/images/folder-back.png',
  '/images/folder-front-open.png',
  '/images/folder-front.png',
  '/images/icon-devpost.png',
  '/images/icon-github.png',
  '/images/icon-linkedin.png',
  '/images/icon-mail.png',
  '/images/icon-resume.png',
  '/images/monitor-bases.png',
  '/images/papertexture-22.png',
  '/images/papertexture.jpg',
  '/images/project-arcademy-thumbnail.jpg',
  '/images/project-arcademy.png',
  '/images/project-missing-thumbnail.png',
  '/images/project-missing.png',
  '/images/project-proteintial-thumbnail.jpg',
  '/images/project-proteintial.jpg',
  '/images/project-website-thumbnail.png',
  '/images/project-website.png',
  '/images/resume.png',
  '/images/workexp-back.png',
  '/images/workexp-front.png'
];

//__________________________________________________________________________________________________________

function ModelViewer() {
  const mountRef = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const hoveredMesh = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [pos, setPos] = useState('middle');
  const [loading, setLoading] = useState(true);  //start with loading as true

  useEffect(() => {
    //call SceneSetup.jsx
    const { scene, camera, renderer, navigationMeshes, outlinedMeshes, defaultOutlines, outlinePairs } = setupScene(mountRef, setLoading)
    //call MouseControls.jsx
    const controls = applyOrbitControls(camera, renderer)
    //call PostProcessing.jsx
    const { outlinePass, composer } = applyPostProcessing(renderer, scene, camera, outlinedMeshes)
    //call Reflector.jsx
    addReflector(scene)

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log(`Preloaded: ${src}`);
      img.onerror = () => console.error(`Failed to load: ${src}`);
    });

    const animate = () => {   // animation loop
      requestAnimationFrame(animate);
      controls.update();
      raycaster.current.setFromCamera(mouse.current, camera);
      //call OutlineEffect.jsx
      applyOutlineEffect(raycaster, outlinePairs, outlinePass, navigationMeshes, hoveredMesh, outlinedMeshes, defaultOutlines);
      composer.render();
    };
    animate();

    //__________________________________________________________________________________________________________

    // handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // handle mouse movement
    const onMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    document.querySelector("canvas").addEventListener('mousemove', onMouseMove);

    //__________________________________________________________________________________________________________
    // handle click event
    const onClick = () => {
      if (hoveredMesh.current && !isModalOpen) {
        if (hoveredMesh.current.name === 'frames' || hoveredMesh.current.name === 'aboutmehitbox') {
          setPos('center');
          setIsModalOpen(true)
          setModalText(<AboutMeModal />);
        }
        if (hoveredMesh.current.name === 'computer' || hoveredMesh.current.name === 'projectshitbox') {
          setPos('end');
          setIsModalOpen(true)
          setModalText(<ProjectsModal />);
        }
        if (hoveredMesh.current.name === 'briefcase' || hoveredMesh.current.name === 'workhitbox') {
          setPos('end');
          setIsModalOpen(true)
          setModalText(<WorkModal />);
        }
        if (hoveredMesh.current.name === 'gradcap' || hoveredMesh.current.name === 'educationhitbox') {
          setPos('center');
          setIsModalOpen(true)
          setModalText(<EducationModal />);
        }
        if (hoveredMesh.current.name === 'contact' || hoveredMesh.current.name === 'contacthitbox') {
          setPos('center');
          setIsModalOpen(true)
          setModalText(<ContactModal />);
        }
      }
    };
    document.querySelector("canvas").addEventListener('click', onClick);
    //__________________________________________________________________________________________________________

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <>
      {loading && <LoadingScreen />}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} pos={pos}>{modalText}</Modal>}
      <div ref={mountRef} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
}

export default ModelViewer;