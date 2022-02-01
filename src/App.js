import React, { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
 import { Main } from './components/Main';

import Particles from "react-tsparticles";
function App() {
  
  
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  // const res = useFetch(api.base, {});
  const particlesLoaded = (container) => {
    console.log(container);
   
  };
  
  

  // if (!res.response) {
  //   return <div>Loading...</div>;
  // }

 

  return (
    <div className="App">
      <Header className="Headers"/>
      <Main />
      
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#232741"
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "20%"
        },
        fullScreen: {
          zIndex: 1
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse"
            },
            onHover: {
              enable: true,
              mode: "attract"
            }
          },
          modes: {
            attract: {
              duration: 0.1
            },
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0
            },
            grab: {
              distance: 400
            },
            repulse: {
              distance: 400
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: {
              value: "#ffffff"
            },
            distance: 150,
            opacity: 0.4
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600
              }
            },
            enable: true,
            path: {},
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out"
            },
            random: true,
            speed: 1,
            spin: {}
          },
          number: {
            density: {
              enable: true
            },
            value: 160
          },
          opacity: {
            random: {
              enable: true
            },
            value: {
              min: 0,
              max: 1
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0
            }
          },
          size: {
            random: {
              enable: true
            },
            value: {
              min: 1,
              max: 3
            },
            animation: {
              speed: 4,
              minimumValue: 0.3
            }
          }
        }
      }}
    />
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
