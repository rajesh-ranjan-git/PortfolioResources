import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      preset: "snow",
      background: {
        color: "transparent",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: ["grab"],
          },
          onclick: {
            enable: false,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },

      particles: {
        color: { value: "#fff" },

        opacity: {
          value: 0.2,
        },
        shape: {
          type: ["circle", "star", "edge"],
        },
        size: {
          value: 10,
        },
        wobble: {
          enable: true,
          distance: 20,
          speed: 10,
        },
        zIndex: {
          value: { min: 0, max: 100 },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 90,
        },
        move: {
          // direction: "top",
          enable: true,
          outModes: "out",
          // speed: 0
        },
      },
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
