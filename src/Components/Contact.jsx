import { useEffect, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".contact-section h1", {
        opacity: 0,
        y: -15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
        },
      });

      // Email button animation, slightly delayed
      gsap.from(".contact-email-link", {
        opacity: 0,
        y: 15,
        duration: .5,
        delay: 0.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={contactRef}>
      <div className="contact-container">
        <h1>Let's Connect</h1>
        <div className="contact-button-wrapper">
          <a
            href="mailto:lee.ranaweer@gmail.com"
            className="contact-email-link"
          >
            <FaEnvelope style={{ marginRight: "0.5rem" }} />
            lee.ranaweer@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
