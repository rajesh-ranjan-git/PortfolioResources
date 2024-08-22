import React from 'react';
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";
import { Engine } from "tsparticles-engine";



export default function MyParticles() {

    const particlesInit =async (engine)=> {
        // this adds the preset to tsParticles, you can safely use the
        await loadSnowPreset(engine);
      }

      const options = {
        preset: "snow",
        background: {
            "color": "transparent",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        },
        interactivity: {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },

        particles: {
            color: { value: "#fff" },
     
            opacity: {
              value: 0.2
            },
            shape: {
                type: ["circle", "star", "edge"],
            },
            size: {
              value: 10
            },
            wobble: {
                enable: true,
                distance: 20,
                speed: 10
              },
              zIndex: {
                value: { min: 0, max: 100 }
              },
            number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 90
              },
            move: {
                // direction: "top",
                enable: true,
                outModes: "out",
                // speed: 0
              },
          }
      };
  return (
    <Particles options={options} init={particlesInit}/>
  )
}
