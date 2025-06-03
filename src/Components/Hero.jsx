import { useRef, useEffect } from "react";
import gsap from "gsap";
import Links from "./Links"; 

const name = "Hi, I'm Nelith";
const subtitle = "I like building things that work—and work well. Mostly fullstack apps";

const Hero = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

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

    gsap.fromTo(
    ".icon", // Target all elements with class 'icon'
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 1.5, // Start after hero text
      stagger: 0.15,
      ease: "power3.out"
    }
  );
  }, []);

  return (
    <section className="hero" style={{ textAlign: "center" }}>
      <h1
        ref={h1Ref}
        style={{
          display: "inline-block",
          fontWeight: 700,
          letterSpacing: "0.01em",
          marginBottom: "0.5em",
          color: "#F0EBD8"
        }}
      >
        {name}
      </h1>
      <p
        ref={pRef}
        style={{
          color: "#B7C9E2",
          fontWeight: 400,
          fontSize: "1.25rem",
          marginTop: "0.5em"
        }}
      >
        {subtitle}
      </p>
      <Links /> {/* Add Links here */}
    </section>
  );
};

export default Hero;