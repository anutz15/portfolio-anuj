"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 90,
              duration: 0.3,
            },
          },
        },

        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          size: { value: 4, random: true },

          links: {
            enable: true,
            distance: 140,
            color: "#ffffff",
            opacity: 0.35,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.5,
            outModes: { default: "out" },
          },

          opacity: { value: 0.5 },
        },
      }}
    />
  );
}
