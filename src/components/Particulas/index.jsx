import { Particles } from "@blackbox-vision/react-particles";

export default function Particulas() {
  return (
    <Particles
      id="simple"
      width="100%"
      height="100%"
      style={{ position: "fixed" }}
      className="NASA"
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}
