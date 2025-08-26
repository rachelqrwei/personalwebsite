import React, { useEffect } from 'react';
import ModelViewer from './components/ModelViewer';
import SocialIcons from './components/SocialIcons';


function App() {

  return (
    <div>
      <ModelViewer />
      <SocialIcons />
      {/* Visual overlay with blend mode that doesn't interfere with clicks */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#82ADED',
          opacity: 0.45,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
          zIndex: 1000
        }}
      />
    </div>
  );
}

export default App;
