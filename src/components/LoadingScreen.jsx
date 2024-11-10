// LoadingScreen.jsx
import React from 'react';
import 'ldrs/lineWobble'; 

const LoadingScreen = () => {     
    return (
      <div className='fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#2B2719] to-[#201910] flex items-center justify-center z-1000'>
        <div className='flex flex-col items-center justify-center'>
          <l-line-wobble stroke='9' size="80" speed="2" color="wheat"></l-line-wobble>
          <div className='text-[wheat] opacity-75 font-jua text-center mt-3 portrait:text-[3vh] text-[5vh]'>
            Setting things up...
          </div>
          <div className='text-[wheat] font-jua opacity-75 mt-1 text-center portrait:text-[2.5vh] text-[4vh]'>
            TIP: view on desktop for best experience!
          </div>
        </div>
      </div>
    );
  };
export default LoadingScreen;

