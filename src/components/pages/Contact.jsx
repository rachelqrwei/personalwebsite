import React from 'react';
import '../../index.css'
import { motion } from "framer-motion";

//import app icons
import '/images/papertexture.jpg';
import '/images/icon-github.png';
import '/images/icon-linkedin.png';
import '/images/icon-mail.png';
import '/images/icon-resume.png';
import '/images/icon-devpost.png';


const ContactModal = () => {
    const cardVariants = {
        hidden: { scale: 0, opacity: 0, rotateX: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 360,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 1.5,
            },
        },
    }
    return (
        <div className="md:p-2 max-h-[90%] flex items-center justify-center">
            <div className=" w-[21rem] h-[13rem]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    style={{ transformStyle: "preserve-3d" }}
                    className="w-full h-full"
                >
                    {/* text, info */}
                    <div className="absolute w-full h-full bg-[url('/images/papertexture.jpg')] bg-cover bg-center rounded-lg shadow-xl p-6 flex justify-between">
                        <div className="flex-grow">
                            <h2 className="text-2xl font-bold text-[#393229]">Rachel Wei</h2>
                            <p className="text-md text-[#52483b]">CS/BBA Student at UW/WLU.</p>
                            <div className="mt-4">
                                <p className="text-md text-[#52483b]">rachelqingranwei@gmail.com</p>
                                <p className="text-md text-[#52483b]">+1 (647) 643-8802</p>
                                <p className="text-md text-[#52483b]">www.rachelqrwei.ca</p>
                            </div>
                        </div>

                        {/* vertical bar with icons */}
                        <div className="flex flex-col justify-between items-center h-[100%] bg-transparent mt-0">
                            <a href='https://www.linkedin.com/in/rachelqrwei/' target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/images/icon-linkedin.png'
                                    alt='linkedin'
                                    className="w-6 h-6"
                                />
                            </a>
                            <a href='https://devpost.com/rachelqingranwei?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/images/icon-devpost.png'
                                    alt='devpost'
                                    className="w-6 h-6 "
                                />
                            </a>
                            <a href='mailto:rachelqingranwei@gmail.com' target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/images/icon-mail.png'
                                    alt='mail'
                                    className="w-6 h-5"
                                />
                            </a>
                            <a href='https://github.com/rachelqrwei' target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/images/icon-github.png'
                                    alt='github'
                                    className="w-6 h-6 "
                                />
                            </a>
                            <a href="/images/F24_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/images/icon-resume.png'
                                    alt='resume'
                                    className="w-6 h-7"
                                />
                            </a>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ContactModal;
