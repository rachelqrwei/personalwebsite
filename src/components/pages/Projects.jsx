import React from 'react';
import '../../index.css' // Import Tailwind CSS fi
import { motion } from 'framer-motion'; // Import Framer Motionle

import '/images/monitor-bases.png';
import FolderGrid from './FolderGrid';
//__________________________________________________________________________________________________________

const ProjectsModal = () => {
    return (
        <div className="portrait:aspect-[9/9.5] portrait:min-h-[70vh] min-h-[65vh] md:min-h-[80vh] w-auto aspect-[3/2] flex justify-center items-end bg-transparent ">
            <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className=" h-full w-full flex flex-col justify-center items-center "
            >
                {/*__________________________________________________________________________________________________________*/}
                {/* monitor*/}
                <div className=" portrait:w-[80%] w-[100%] h-[93%] rounded-2xl bg-gradient-to-b from-[#A8A08C] to-[#72746A] z-50 flex flex-col justify-start items-start border-l-2 border-t-2 border-t-[#FFD3B6] border-l-[#FFD3B6]">
                    {/* glare*/}
                    <div className=" absolute w-0 h-0 mr-[63.5%] mb-[32%] rounded-tl-2xl border-l-[240px] border-b-[210px] border-l-[#FFD1A6]/10 border-b-transparent z-100"></div>
                    {/* screen */}
                    <div className="portrait:h-[88%] w-[94%] h-[84%] rounded-t-2xl bg-[#2C2925] mt-[2%] ml-[3.1%] z-90 border-r-4  border-l-4 border-t-4 border-[#4d4941] border-r-[#5a554e] border-y-[#312e2b]"> 
                        {/* screen cols storage */}
                        <div className=' h-full w-full flex flex-row justify-start items-start'> 
                            {/* leftcol */}
                            <div className='portrait:hidden w-[23%] h-full bg-[#403B37] rounded-tl-xl flex flex-col content-start items-center'> 
                            <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1 mt-10'></div>
                            {/* all the horizontal lines go here */}
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1'></div>
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1'></div>
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1'></div>
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1'></div>
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1 mt-10'></div>
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1'></div>
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1'></div>
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1'></div>
                                <div className='w-5/6 h-6 bg-[#35322E] rounded-md mb-1'></div>
                            </div>
                            {/* rightcol-storage*/}
                            <div className='h-[100%] w-[100%] flex flex-col justify-center items-center'> 
                                {/* rightcol-top*/}
                                <div className='ml-[2.5px] w-[99.7%] h-[9%] bg-[#403B37] rounded-tr-xl flex flex-row content-start items-center'>
                                    <div className='portrait:w-[60%] w-[40%] h-[63%] bg-[#35322E] ml-2 rounded-md'>
                                        <p className='ml-2 m-y-2 text-[#d9d9d9] text-[2vh] md:text-[2vh]'>desktop &gt; my-projects</p>
                                    </div>
                                </div>
                            {/* rightcol-bot (screen) */}
                                <div className='w-full h-full rounded bg-transparent overflow-y-auto mr-3 scrollbar-thin scrollbar-thumb-[#C2B8A8] scrollbar-track-transparent'> 
                                    {FolderGrid()}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* navbar */}
                    <div className='portrait:bg-[#2C2925] w-[94%] h-[8%] mb-[2%] rounded-b-2xl bg-[#bfb6a8] flex flex-row justify-start ml-[3.1%] items-center shadow-md border-l-4 border-r-4 border-r-[#5a554e] border-y-[#47433d] border-b-4 border-[#5a554e] shadow-md'> 
                        {/* navbar elements */}
                        <div className='portrait:hidden h-[55%] w-[15%] ml-10 rounded-2xl bg-[#E0DACF] '></div>
                        <div className='portrait:hidden h-[55%] w-[2.5%] ml-2 rounded-2xl bg-[#E0DACF] '></div>
                        <div className='portrait:hidden h-[55%] w-[2.5%] ml-1.5 rounded bg-[#E0DACF] '></div>
                        <div className='portrait:hidden h-[55%] w-[2.5%] ml-1.5 rounded bg-[#E0DACF] '></div>
                        <div className='portrait:hidden h-[55%] w-[2.5%] ml-1.5 rounded bg-[#E0DACF] '></div>
                        <div className='portrait:hidden h-[55%] w-[2.5%] ml-1.5 rounded-2xl bg-[#E0DACF] '></div>
                        <div className='portrait:hidden h-[55%] w-[2.5%] ml-1.5 rounded-2xl bg-[#E0DACF] ml-[50%]'></div>
                        <div className='portrait:hidden h-[55%] w-[2.5%] ml-1.5 mr-4 rounded bg-[#E0DACF] '></div>
                    </div>
                </div>
                {/* monitor-base */}
                <img
                    src='/images/monitor-bases.png'
                    alt="Middle Image"
                    className="h-[17%] portrait:hidden w-auto object-cover"
                />
            </motion.div>

        </div>
    );
};

export default ProjectsModal;