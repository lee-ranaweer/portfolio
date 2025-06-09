import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    // Animate gradient angle
    gsap.to(bgRef.current, {
      "--angle": "495deg", // gives some extra range
      duration: 30,
      repeat: -1,
      ease: "none"
    });

    // Animate color stops in a smooth loop
    gsap.to(bgRef.current, {
      "--color1": "#19181A",
      "--color2": "#2C2B30",
      "--color3": "#3E7C6A",
      "--color4": "#8FA3B0",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return <div ref={bgRef} className="animated-bg" />;
};

export default AnimatedBackground;
