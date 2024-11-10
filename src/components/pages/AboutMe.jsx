import React from 'react';
import '../../index.css'
import { motion } from 'framer-motion';

import '/images/papertexture-22.png'
import '/images/aboutme-baby.png'
import '/images/aboutme-grad.png'
import '/images/aboutme-cat.png'
import '/images/aboutme-art.png'
import '/images/aboutme-concert.png'
import '/images/aboutme-star.png'
import '/images/aboutme-star2.png'

const AboutMeModal = () => {
    // common styles
    const imageBoxShadow = "shadow-[0_5px_4px_0px_rgba(0,0,0,0.25)] pointer-events-none bg-contain rounded-[4px] bg-center";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="md:landscape:mt-0 flex justify-center items-center bg-transparent 
                        overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#837b69] scrollbar-track-transparent"
        >
            <div className="portrait:h-[70vh] landscape:h-[60vh] landscape:md:h-[78vh] mr-2">
                <div className="relative w-[22rem] h-[33rem] bg-center rounded-[3px] p-5 bg-[url('/images/papertexture-22.png')] bg-cover">
                    {/* title */}
                    <div className='absolute text-[18px] text-[#634838] font-jua ml-[10rem] mt-[3px] '>
                        about me !!
                    </div>

                    {/* introductory text box */}
                    <div className="absolute text-xs text-[#745C4E] ml-[10.2rem] mt-[2.1rem] p-2  w-[7.8rem] h-[4.7rem] bg-[#F8E6D4] rounded-[1px]">
                        Hi! I'm Rachel Wei, and I'm a CS BBA student from Toronto!
                    </div>
                    <div className="absolute text-xs text-[#745C4E] ml-[8.8rem] mt-[16.6rem] p-2 w-[10.3rem] h-[5rem]  bg-[#F8E6D4] rounded-[1px]">
                        I'm passionate about combining technical skills with my artistic flair to bring ideas to life.
                    </div>
                    <div className="absolute ml-[0.6rem] mt-[23rem] w-[6rem] h-[5rem] pt-2 px-3 text-xs text-[#745C4E] bg-[#F8E6D4] rounded-[1px]">
                        Thanks for checking out my website!
                    </div>

                    {/* image elements */}
                    <div className={`absolute ml-[16.6rem] mt-[5.2rem] w-[2.1rem] h-[2.1rem] bg-[url('/images/aboutme-star.png')] pointer-events-none bg-center bg-contain z-50`}></div>
                    <div className={`absolute ml-[2.4rem] mt-[1.6rem] w-[7rem] h-[7rem] bg-[url('/images/aboutme-grad.png')] ${imageBoxShadow}`}></div>
                    <div className={`absolute ml-[0.4rem] mt-[9.5rem] w-[10rem] h-[6.3rem] bg-[url('/images/aboutme-baby.png')] ${imageBoxShadow}`}></div>
                    <div className={`absolute ml-[11.2rem] mt-[7.8rem] w-[6.3rem] h-[7.7rem] bg-[url('/images/aboutme-art.png')] ${imageBoxShadow}`}></div>
                    <div className={`absolute ml-[2rem] mt-[16.4rem] w-[6rem] h-[5.5rem] bg-[url('/images/aboutme-cat.png')] ${imageBoxShadow}`}></div>
                    <div className={`absolute ml-[7.2rem] mt-[22.5rem] w-[11.5rem] h-[7rem] bg-[url('/images/aboutme-concert.png')] ${imageBoxShadow}`}></div>
                    <div className={`absolute mt-[23.1rem] w-[1.6rem] h-[1.8rem] bg-[url('/images/aboutme-star2.png')] pointer-events-none bg-center bg-contain z-50`}></div>

                </div>
            </div>
        </motion.div>
    );
};

export default AboutMeModal;
