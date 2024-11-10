//opens popups when meshes are clicked on.
export default function Modal({ children, onClose, pos = 'center' }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: pos,
      }}
    >


      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          bottom: 0,
          position: 'relative',
          backgroundColor: 'transparent',
          padding: '1rem',
        }}
      >
        <div
          className='absolute text-[#d9d9d9] portrait:text-[2.2vh] text-[2.3vh] font-jua portrait:top-[-2vh] top-[-5vh] md:top-[-4.5vh]lg:top-[-5vh]'
          style={{
            left: '51%',
            opacity: '0.9',
            transform: 'translateX(-50%)', // Center the text horizontally
            pointerEvents: 'none', // Makes the text unclickable
          }}
        >
          click anywhere to close!
        </div>
        {/*           
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '0.5rem',
              backgroundColor: 'transparent',
              top: '-0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.3rem',
              fontWeight: '500',
              color: '#d9d9d9',
            }}
          >
            ⨉
          </button> */}
        {children}
      </div>
    </div>
  );
}