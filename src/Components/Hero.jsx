import { useRef, useEffect } from "react";
import gsap from "gsap";
import Links from "./Subcomponents/Links";
import Resume from "./Subcomponents/Resume";

const name = "Nelith Ranaweera";
const subtitle = "I like building things that work—and work well. Currently working at the University of Guelph's SVI Lab, developing software to help test the limits of human colour vision";

const Hero = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  // Name animation
  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: 30, letterSpacing: "0.2em" },
      {
        opacity: 1,
        y: 0,
        letterSpacing: "0.01em",
        duration: 3,
        ease: "power3.out"
      }
    );

    // Subtitle animation
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        delay: 0.5,
        ease: "power3.out"
      }
    );

    // Icon animations
    gsap.fromTo(
      ".icon",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 1.5,
        stagger: 0.15,
        ease: "power3.out"
      }
    );

    // Resume button animation
    gsap.fromTo(
      ".resume",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 2.1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="hero">
      <h1 ref={h1Ref}>{name} </h1>
      <p ref={pRef}>{subtitle}</p>
      <Links />
      <Resume/>
    </section>
  );
};

export default Hero;