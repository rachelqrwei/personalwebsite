import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../../index.css'; // Import Tailwind CSS file

import folderBack from '/images/folder-back.png';
import folderFront from '/images/folder-front.png';
import folderFrontOpen from '/images/folder-front-open.png';
import '/images/project-website.png';
import '/images/project-website-thumbnail.png';
import '/images/project-arcademy-thumbnail.jpg';
import '/images/project-arcademy.png';
import '/images/project-proteintial-thumbnail.jpg';
import '/images/project-proteintial.jpg';
import '/images/project-missing.png'
//__________________________________________________________________________________________________________

const FolderGrid = () => {
  const projects = [
    {
      name: "Portfolio",
      link: '',
      preview: '/images/project-website.png',
      description: 'Welcome to my website! \n This space is more than just a portfolio — it showcases not only my technical skills but also who I am in an immersive 3D experience. The 3D room you see was modeled by me in Blender, complete with materials, UV painting, and texture baking. I then brought it to the web using Three.js, a tool I learned from scratch, pushing myself to master new skills. \n I designed the layout of each modal in Figma, then transformed it into a fully functional React website with HTML and CSS. Just like how someone\'\s room reflects its inhabitant, this website serves as a glimpse into my learning journey and a creative representation of me. I hope you enjoy your stay!',
      thumbnail: '/images/project-website-thumbnail.png',
      madewith: ['Three.js', 'Javascript', 'React', 'TailwindCSS', 'html', 'Framer', 'Figma', 'Blender']
    },
    {
      name: "Protential",
      link: '',
      preview: '/images/project-proteintial.jpg',
      description: '(Second Place Overall, RythmHacks 2023) \n Protential combines AI and healthcare to generate models of protein structures in 3D and provides a reserve for patient data, guiding researchers towards a more efficient pathway to finding a cure! \n Our web app builds 3d models of proteins, which allow for visualization of them in their folded state, a process that would normally be very time-intensive with x-ray crystallography.  Proteintial also provides an AI chat bot that is able to provide more information about protein inhibition for drug development. Lastly, we used blockchain technology to allow researchers to securely access patient data using smart contracts. \n We built this using streamlit to deploy the generative AI for the 3d models, and added a chat bot assistant using the ChatGPT API. We integrated blockchain technology and smart contracts by deploying it on a Sepolia test network and coding it on Solidity. ',
      thumbnail: '/images/project-proteintial-thumbnail.jpg',
      madewith: ['AlphaFold2', 'ChatGPT API', 'Ethereum', 'React', 'Solidity', 'Python', 'Javascript', 'TailwindCSS', 'html']
    },
    {
      name: "ARcademy",
      preview: '/images/project-arcademy.png',
      description: '(First Place Overall, IgnitionHacks 2023) \n ARcademy is an innovative AR-based learning platform designed to make education more accessible and engaging for kinesthetic learners, providing interactive 3D simulations and gesture-controlled lessons in the web. \n In this application we used WebXR for easy AR integration. We built the website using react and cite styled with tailwind CSS. The pose and gesture detection was built using Mobilenet-SSD model and deployed in react. We then used transfer learning to load our own custom gestures. We also used the Chatgpt API for our virtual chatbot, and Arduino was linked to React app for control of AR. 3D models were created from scratch using NomadSculpt and Blender, and imported into Echo3D to connect to the AR component. \n This app makes learning more affordable, engaging, and accessible, especially for subjects like engineering, which typically require expensive materials or hands-on experience. ARcademy brings a dynamic, interactive learning experience directly to students, breaking down barriers to education.',
      thumbnail: '/images/project-arcademy-thumbnail.jpg',
      madewith: ['Arduino', 'C++', 'ChatGPT API', 'Echo3D', 'Javascript', 'Mobilenet-SSD', 'NomadSculpt', 'React', 'TailwindCSS', 'Transfer-learning', 'WebXR']
    },
    {
      name: "",
      preview: '/images/project-missing.png',
      description: 'Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      thumbnail: '/images/project-missing-thumbnail.png',
      madewith: ['Coming Soon...']
    },
    {
      name: "",
      preview: '/images/project-missing.png',
      thumbnail: '/images/project-missing-thumbnail.png',
      description: 'Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

      madewith: ['Coming Soon...']
    },
    {
      name: "",
      preview: '/images/project-missing.png',
      thumbnail: '/images/project-missing-thumbnail.png',
      description: 'Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      madewith: ['Coming Soon...']
    },
    {
      name: "",
      preview: '/images/project-missing.png',
      description: 'Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      thumbnail: '/images/project-missing-thumbnail.png',
      madewith: ['Coming Soon...']
    },
    {
      name: "",
      preview: '/images/project-missing.png',
      thumbnail: '/images/project-missing-thumbnail.png',
      description: 'Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      madewith: ['Coming Soon...']
    },
    {
      name: "",
      preview: '/images/project-missing.png',
      thumbnail: '/images/project-missing-thumbnail.png',
      description: 'Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      madewith: ['Coming Soon...']
    },
  ]
  //__________________________________________________________________________________________________________

  const [selectedProject, setSelectedProject] = useState(null);
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  const closeModal = () => {
    setSelectedProject(null);
  };

  //__________________________________________________________________________________________________________

  return (
    <div className="grid portrait:grid-cols-3 grid-cols-3 ml-[9%] mt-4 flex justify-center items-center">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className=" relative cursor-pointer flex justify-center items-center w-[77%] h-[80%] mb-6 max-w-[20vw] max-h-[20vh]"
          whileHover={{ y: -8 }}
          onClick={() => handleProjectClick(project)}
        >
          {/* folder back image */}
          <img src={folderBack} className="absolute w-full max-w-[20vw] pointer-events-none" alt="folder back" />

          {/* project preview */}
          <motion.img
            src={project.preview}
            className="absolute z-10  mb-[12%] w-auto h-[50%] max-w-[10vw]  border-2 border-color-[#bfb6a8]"
            alt={project.name}
          />

          {/* folder front image (hover effect switches to open folder) */}
          <motion.img
            src={folderFront}
            className="absolute w-full z-20 max-w-[20vw] user-select: none;" 
            alt="folder front"
            onHoverStart={(e) => (e.target.src = folderFrontOpen)}
            onHoverEnd={(e) => (e.target.src = folderFront)}
          />
          <p className=' portrait:mt-[99%] portrait:text-[1.8vh] text-[#DED9CF]  text-[2.5vh] mt-[93%]  '>{project.name}</p>
        </motion.div>
      ))}

      {/*__________________________________________________________________________________________________________*/}

      {/* Modal */}
      {selectedProject && (
        <div className="absolute bg-transparent flex justify-start items-start z-50 ">
          <div className="
              portrait:max-w-[85%] portrait:max-h-[80%] portrait:mt-[1%] portrait:ml-[-4vw] 
              max-w-[100%] ml-[-6%] mt-[-5%] max-h-[10%]
              md:max-w-[95%] md:ml-[-5%] md:mt-[0%] md:max-h-[100%] 
              bg-[#d1cbbd] mb-[22%] pl-4 pb-4 pt-2 pr-2 rounded-lg shadow-lg flex items-center shadow-m">
            <div className='rounded'>
              <div className='overflow-y-auto overflow-x-hidden portrait:max-h-[45vh] portrait:min-h-[45vh]
              max-h-[38vh] min-h-[38vh]
              md:max-h-[48vh] md:min-h-[48vh] px-2 scrollbar-thin scrollbar-thumb-[#bfb6a8] scrollbar-track-transparent'>

                <div className='flex flex-row justify-between sticky h-[2%] bg-[#d1cbbd] top-0'>
                  <h2 className=" portrait:text-[3vh] text-[4vh] text-[#393229] font-bold mt-1 ">{selectedProject.name}</h2>
                  <button
                    onClick={closeModal}
                    className="portrait:text-[3vh] text-[4vh] text-[#52483b] mb-1 mr-3"
                  >
                    ⨉
                  </button>
                </div>

                <div className=' w-[100%] portrait: h-[20vh] rounded h-[28vh] bg-cover' style={{ backgroundImage: `url(${selectedProject.thumbnail})`, backgroundPosition: 'center 50%' }}> </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.madewith.map((madewith, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#c4bcb0] text-[#52483b] rounded-md portrait:text-[1.8vh] text-[2.7vh]"
                    >
                      {madewith}
                    </span>
                  ))}
                </div>
                <div className='mt-3 h-[15vw]'>
                  {selectedProject.description.split('\n').map((line, index) => (
                    <p className=' w-[99%] portrait:text-[1.8vh] px-4 text-[2.7vh] text-[#52483b] mt-2' key={index}>{line}</p>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FolderGrid;

