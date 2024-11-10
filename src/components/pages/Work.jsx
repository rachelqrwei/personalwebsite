import React from 'react';
import '../../index.css' // Import Tailwind CSS file
import { motion } from 'framer-motion'; // Import Framer Motionle
import '/images/workexp-front.png';
import '/images/workexp-back.png';
import '/images/resume.png';

const WorkModal = () => {
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className=" h-full w-auto flex flex-col justify-center items-center relative"
    >
      <img
        src='/images/workexp-back.png'
        className="max-h-[46vh] md:max-w-[100vw] lg:max-h-[56vh] object-cover md:mt-2 pointer-events-none"
      />


  <motion.div
    whileHover={{ y: '-2vh' }}
    transition={{ duration: 0.08, ease: 'easeOut' }}
    className="absolute w-full h-full"
  >
    <a href="/images/F24_Resume.pdf" target="_blank" rel="noopener noreferrer">
    <motion.img
      src='/images/resume.png'
      className="absolute rounded-sm mt-[4vh] portrait:ml-[10%] ml-[12vw] landscape:ml-[3vw] md:mt-[4vh] md:ml-[4vw] lg:mt-[5vh] lg:ml-[3vw] max-h-[53vh] md:max-h-[62vh] lg:max-h-[70vh] object-cover"
      whileHover={{
        boxShadow: '0px 0px 15px 0px #dac18c', // Glowing effect on hover
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    />
    </a>
  </motion.div>


      <img
        src='/images/workexp-front.png'
        className="max-h-[23vh] z-10 md:max-w-[100vw] lg:max-h-[27.8vh] object-cover pointer-events-none"
      />
    </motion.div>

  );
};

export default WorkModal;