import React, { useEffect } from 'react';
import { gsap } from 'gsap';

gsap.registerPlugin();

const RisingMoon = () => {
  useEffect(() => {
    gsap.from('.LandingMoon', {
      rotate: 50,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  useEffect(() => {
    gsap.fromTo('.PageTitle h1', {
      x: -100,
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5
    });
  }, []);

  return (
    <>
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Floating Objects */}
        <div style={{ position: 'absolute', left: '10%', height: '100vh', width: '6vh' }}>
          <img className='LandingProps' src="/src/assets/FloatingStuff/eraser.png" alt="" style={{ position: 'absolute', top: '23%' }} />
          <img className='LandingProps' src="/src/assets/FloatingStuff/notepad.png" alt="" style={{ position: 'absolute', top: '63%' }} />
        </div>
        <div style={{ position: 'absolute', left: '30%', height: '100vh', width: '6vh' }}>
          <img className='LandingProps' src="/src/assets/FloatingStuff/pencil.png" alt="" style={{ position: 'absolute', top: '13%' }} />
          <img className='LandingProps' src="/src/assets/FloatingStuff/ruler.png" alt="" style={{ position: 'absolute', top: '43%' }} />
        </div>
        <div style={{ position: 'absolute', left: '50%', height: '100vh', width: '6vh' }}>
          <img className='LandingProps' src="/src/assets/FloatingStuff/eraser.png" alt="" style={{ position: 'absolute', top: '23%' }} />
        </div>
        <div style={{ position: 'absolute', left: '70%', height: '100vh', width: '6vh' }}>
          <img className='LandingProps' src="/src/assets/FloatingStuff/spell-book.png" alt="" style={{ position: 'absolute', top: '23%' }} />
        </div>
        <div style={{ position: 'absolute', left: '90%', height: '100vh', width: '6vh' }}>
          <img className='LandingProps' src="/src/assets/FloatingStuff/pencil.png" alt="" style={{ position: 'absolute', top: '23%' }} />
          <img className='LandingProps' src="/src/assets/FloatingStuff/eraser.png" alt="" style={{ position: 'absolute', top: '63%' }} />
        </div>
        
        <img className="LandingMoon" src="/src/assets/moonRealistic.webp" alt="Moon Realistic" style={{
          position: 'absolute',
          top: '50%',
          width: '75%',
          transform: 'translateY(-50%)',
          zIndex: '-1'
        }} />

        <div style={{
          position: 'absolute',
          textAlign: 'center',
          color: 'white',
          fontSize: 'clamp(2rem, 5vw, 5rem)',
          fontWeight: 'bold'
        }}>
          <div>GLOW WITH KNOWLEDGE</div>
          <div>LIKE THE MOON</div>
        </div>
      </div>

      {/* Information Section */}
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '5vh 2vw'
      }}>
        <div className='PageTitle' style={{
          border: '1px solid white',
          borderRadius: '20px',
          padding: '2vh',
          textAlign: 'center',
          fontSize: 'clamp(2rem, 4vw, 4rem)',
          color: 'white',
          width: '90%',
          maxWidth: '600px'
        }}>
          <h1>Moon Beam</h1>
          <h1>Academy</h1>
        </div>
        <div className='Description' style={{
          border: '1px solid white',
          borderRadius: '20px',
          padding: '2vh',
          textAlign: 'center',
          fontSize: 'clamp(1rem, 2vw, 2rem)',
          color: 'white',
          width: '90%',
          maxWidth: '800px'
        }}>
          <p>
            MoonBeam is a captivating and interactive E-tutoring platform designed to make learning enjoyable for children. Packed with engaging animations and educational content, it transforms lessons into fun and visually appealing experiences. 
          </p>
        </div>
      </div>
    </>
  );
};

export default RisingMoon;
