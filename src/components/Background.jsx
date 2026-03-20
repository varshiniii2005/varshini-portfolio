import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#020617" },
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#38bdf8" },
        },
      }}
      style={{
        position: "fixed",
        zIndex: -1,
      }}
    />
  );
}