import React, { useState } from "react"
import { motion } from "framer-motion" // Import Framer Motion
import "../../index.css" // Import Tailwind CSS file

import folderBack from "/images/folder-back.png"
import folderFront from "/images/folder-front.png"
import folderFrontOpen from "/images/folder-front-open.png"

import "/images/project-bloomscroll-thumbnail.png"
import "/images/project-bloomscroll.png"
import "/images/project-website.png"
import "/images/project-website-thumbnail.png"
import "/images/project-arcademy-thumbnail.jpg"
import "/images/project-arcademy.png"
import "/images/project-proteintial-thumbnail.jpg"
import "/images/project-proteintial.jpg"
import "/images/project-missing.png"
import "/images/project-polypace.png"
import "/images/project-polypace-thumbnail.png"
import "/images/project-watguessr-thumbnail.png"
import "/images/project-watguessr.png"

//__________________________________________________________________________________________________________

const FolderGrid = () => {
  const projects = [
    {
      name: "Watguessr.io",
      preview: "/images/project-watguessr.png",
      link: "https://watguessr.io",
      thumbnail: "/images/project-watguessr-thumbnail.png",
      description:
          "**Real-time multiplayer project for the University of Waterloo!** \n WatGuessr.io is a **real-time multiplayer web game** inspired by GeoGuessr, built specifically for the **University of Waterloo campus**. \n I designed and developed the full-stack platform, using Vue/Vuex and websockets for frontend game state management in multiplayer and ranked game modes. The frontend also integrates **Mapbox API** to provide an interactive guessing experience where players can compete to identify locations around campus. \n I implemented **JWT authentication, Google OAuth, and secure HTTP cookies** to protect user data. We ensured backend security with **IP-based rate limiting**, essential in an application made for students where DDoSing is common. \n Images are stored in an AWS S3 bucket, with scene information stored in our database, so streamline deployment, I automated the image upload pipeline with **Python and AWS S3**, cutting deployment preparation time by over **80%**. I deployed the frontend with Cloudflare, configuring workers to ensure security, and the backend with **Kubernetes** for scalability. \n The result is a polished, secure, and interactive platform where students can challenge their geography knowledge in real-time.",
      madewith: ["Java", "Spring Boot", "PostgreSQL", "Vue/Vuex", "Websockets (STOMP.js)", "Mapbox API", "Kubernetes", "AWS S3", "Python", "Node.js", "Cloudflare"],
    },
    {
      name: "PolyPace",
      preview: "/images/project-polypace.png",
      link: "https://devpost.com/software/polypace",
      thumbnail: "/images/project-polypace-thumbnail.png",
      description:
          "(Submitted to GeeseHacks 2025) \n PolyPace is a **first-person VR fitness game** that blends exercise and entertainment into a seamless, engaging experience. Players progress through immersive obstacle courses where their **real-world movements are tracked using OpenCV and OpenXR**, and translated into precise in-game actions on the **MetaQuest 3**. \n To enhance immersion, the game features **stunning custom-designed environments modeled in Blender**, seamlessly integrated with **Unity** for polished visuals and smooth gameplay. A **bespoke soundtrack** ties the entire experience together, making fitness both fun and rewarding. At the end of each level, players can track calories burned, creating a measurable and personalized fitness journey!",
      madewith: ["Unity", "OpenXR", "OpenCV", "Blender"],
    },
    {
      name: "BloomScroll",
      preview: "/images/project-bloomscroll.png",
      link: "https://devpost.com/software/bloomscroll-c78udn",
      description:
          "(Submitted to DeltaHacks 2025) \n BloomScroll reimagines the **infinite scroll format** of TikTok and Instagram Reels as a tool for learning. It generates **AI-powered educational videos** on user-selected topics, complete with **AI narrations, subtitles, and engaging visuals**. \n The frontend was designed in **Figma** and developed in **React**, ensuring smooth performance across devices. Behind the scenes, I built an automated video generation pipeline: **Groq generates scripts**, **Pexels provides visuals**, **ElevenLabs creates narrations**, **Whisper handles timestamping**, and **MoviePy/ffmpeg stitches the content** into polished videos, with MongoDB for storing data. \n To optimize performance, I implemented **video preloading on scroll**, cutting wait times by over **65%**. BloomScroll blends AI, design, and mobile development into a platform that makes education as engaging as social media. \n After the hackathon, this idea was later adapted into a mobile app version using Expo and React Native.",
      thumbnail: "/images/project-bloomscroll-thumbnail.png",
      madewith: ["React", "TypeScript", "React Native (Expo)", "Python", "Groq", "MoviePy/ffmpeg", "ElevenLabs", "Whisper", "MongoDB", "Pexels API"],
    },
    {
      name: "Portfolio",
      link: "https://rachelqrwei.ca/",
      preview: "/images/project-website.png",
      description:
        "Welcome to my website! \n This space showcases not only my technical skills, but also who I am as a person in an immersive 3D experience. I modeled the entire 3D room in Blender from scratch, complete with **materials design, UV painting, and texture baking**. I then brought it to the web using THREE.js. \n I designed the layout of each modal in Figma, then transformed it into a fully functional and **mobile-responsive React website**. \n Just like how someone's room reflects its inhabitant, this website serves as a glimpse into my learning journey and a creative representation of myself as a creator. This portfolio's design resonated with over 200 000 viewers on LinkedIn, and over **25,000+ unique visitors!**",
      thumbnail: "/images/project-website-thumbnail.png",
      madewith: ["THREE.js", "React", "Blender", "Figma", "TailwindCSS", "Framer"],
    },
    {
      name: "Protential",
      link: "https://devpost.com/software/protential",
      preview: "/images/project-proteintial.jpg",
      description:
          "(Second Place Overall, RythmHacks 2023) \n Protential is a **healthcare-focused web platform** that merges **AI, biotechnology, and blockchain** to accelerate protein research and drug discovery. Using **AlphaFold2**, the system rapidly generates and visualizes **3D protein folding structures**, significantly reducing the reliance on traditional x-ray crystallography. \n To improve accessibility for researchers, I integrated a **ChatGPT-powered assistant** capable of explaining protein inhibition and related biochemical processes. Patient data security was ensured through **Ethereum-based smart contracts**, allowing controlled access and privacy-preserving collaboration. The application was built with **React, TailwindCSS, and Python**, uniting complex technologies into a single streamlined research tool. \n Protential earned **Second Place Overall** for its innovative use of AI and blockchain in advancing scientific discovery.",
      thumbnail: "/images/project-proteintial-thumbnail.jpg",
      madewith: ["AlphaFold2", "Python", "React", "Ethereum (Solidity)", "ChatGPT API", "TailwindCSS", "JavaScript"],
    },
    {
      name: "ARcademy",
      link: "https://devpost.com/software/arcademy-5oq17w",
      preview: "/images/project-arcademy.png",
      description:
          "(First Place Overall, IgnitionHacks 2023) \n ARcademy is an **award-winning AR learning platform** built to make education more engaging for **kinesthetic learners**. The system allows users to interact with **gesture-controlled 3D simulations**, making traditionally expensive, hands-on lessons accessible through augmented reality. \n Gesture recognition was powered by the **Mobilenet-SSD model with custom transfer learning**, while **WebXR** enabled seamless AR deployment in the browser. On the frontend, I designed and developed interactive components with **Figma, React, TailwindCSS, and Blender**, integrating them with **Echo3D** for asset hosting. The platform also includes a **ChatGPT-powered AI assistant** and real-time input through **Arduino**, bridging physical gestures with digital simulations. \n Out of over 300 participants, ARcademy won **First Place Overall**, demonstrating both the technical strength and transformative potential of AR in education.",
      thumbnail: "/images/project-arcademy-thumbnail.jpg",
      madewith: ["WebXR", "Mobilenet-SSD (Transfer Learning)", "React", "Arduino (C++)", "Blender", "Echo3D", "ChatGPT API", "TailwindCSS"],
    },
    {
      name: "",
      preview: "/images/project-missing.png",
      thumbnail: "/images/project-missing-thumbnail.png",
      description:
        "Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      madewith: ["Coming Soon..."],
    },
    {
      name: "",
      preview: "/images/project-missing.png",
      description:
        "Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      thumbnail: "/images/project-missing-thumbnail.png",
      madewith: ["Coming Soon..."],
    },
    {
      name: "",
      preview: "/images/project-missing.png",
      thumbnail: "/images/project-missing-thumbnail.png",
      description:
        "Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      madewith: ["Coming Soon..."],
    },
  ]
  //__________________________________________________________________________________________________________

  const [selectedProject, setSelectedProject] = useState(null)
  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }
  const closeModal = () => {
    setSelectedProject(null)
  }

  const parseBoldText = (text) => {
    if (!text) return text
    
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2)
        return <strong key={index}>{boldText}</strong>
      }
      return part
    })
  }

  //__________________________________________________________________________________________________________

  return (
    <div className="grid portrait:grid-cols-3 grid-cols-3 ml-[6%] mt-2 flex justify-center items-center">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className=" relative cursor-pointer flex justify-center items-center w-[77%] h-[80%] mb-6 max-w-[20vw] max-h-[20vh]"
          whileHover={{ y: -8 }}
          onClick={() => handleProjectClick(project)}
        >
          {/* folder back image */}
          <img
            src={folderBack || "/placeholder.svg"}
            className="absolute w-full max-w-[20vw] pointer-events-none"
            alt="folder back"
          />

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
          <p className=" portrait:mt-[99%] portrait:text-[1.8vh] text-[#DED9CF]  text-[2vh] mt-[93%]  ">
            {project.name}
          </p>
        </motion.div>
      ))}

      {/*__________________________________________________________________________________________________________*/}

      {/* Modal */}
      {selectedProject && (
        <div className="absolute bg-transparent flex justify-start items-start z-50 ">
          <div
            className="
              portrait:max-w-[83%] portrait:max-h-[70%] portrait:mt-[0%] portrait:ml-[0.5vw] 
              max-w-[100%] ml-[-2%] mt-[-5%] max-h-[10%]
              md:max-w-[95%] md:ml-[-4%] md:mt-[0%] md:max-h-[100%] 
              bg-[#d1cbbd] mb-[22%] pl-4 pb-3 pt-2 pr-2 rounded-lg shadow-lg flex flex-col shadow-m"
          >
            <div className="flex flex-row justify-between sticky h-[2%] bg-[#d1cbbd] top-0">
              <h2 className="portrait:text-[2.5vh] text-[3vh] text-[#393229] font-bold mt-1">{selectedProject.name}</h2>
              <button onClick={closeModal} className="portrait:text-[2.5vh] text-[3vh] text-[#52483b] mb-1 mr-3">
                ⨉
              </button>
            </div>
            <div className="rounded flex-grow overflow-hidden">
              <div
                className="overflow-y-auto overflow-x-hidden portrait:max-h-[45vh] portrait:min-h-[45vh]
              max-h-[38vh] min-h-[38vh]
              md:max-h-[48vh] md:min-h-[48vh] px-2 scrollbar-thin scrollbar-thumb-[#bfb6a8] scrollbar-track-transparent"
              >
                <div
                  className="w-[100%] portrait:h-[20vh] rounded h-[28vh] bg-cover"
                  style={{ backgroundImage: `url(${selectedProject.thumbnail})`, backgroundPosition: "center 50%" }}
                >
                  {" "}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.madewith.map((madewith, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#c4bcb0] text-[#52483b] rounded-md portrait:text-[1.8vh] text-[2vh]"
                    >
                      {madewith}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  {selectedProject.description.split("\n").map((line, index) => (
                    <p className=" w-[99%] portrait:text-[1.8vh] px-4 text-[2vh] text-[#52483b] mt-2" key={index}>
                      {parseBoldText(line)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-right mt-2 text-[1.6vh] font-bold underline">
              <a
                href={selectedProject.link}
                className=" text-[#393229] hover:text-[#52483b]"
                target="_blank"
                rel="noopener noreferrer"
              >
                View this Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FolderGrid

