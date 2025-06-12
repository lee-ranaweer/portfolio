import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    start: 2025,
    end: "Present",
    description: "Worked on research projects involving..."
  },
  {
    title: "Undergraduate Teaching Assistant",
    start: 2024,
    end: 2025,
    description: "Providing academic support and clarifying course material for students through email and office hours.• Grading course deliverables, ensuring consistent and fair application of grading rubrics. • Leading lab sessions to provide hands-on guidance, reinforcing key concepts taught in lectures."
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-entry", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".experience h1", {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience" ref={sectionRef}>
      <h1>Experience</h1>
      <div className="timeline-container">
        <div className="timeline-line" />
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`timeline-entry ${idx % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <div className="timeline-year">
                {exp.start} {exp.end !== exp.start && `– ${exp.end}`}
              </div>
              <div className="timeline-box">
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-desc">{exp.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
