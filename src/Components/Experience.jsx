import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const experiences = [
  {
    title: "Undergraduate Research Assistant",
    employer: "University of Guelph – SVI Lab",
    start: 2025,
    end: "Present",
    description: [
      "Documented, developed, and maintained a Node.js application for assessing human color differentiation in controlled experiments",
      "Built and consumed REST APIs to handle experiment configuration, data collection, and results storage in a SQLite database",
      "Contributed in weekly lab meetings and code reviews, aligning development efforts with broader research objectives and experimental protocols.",
      "Collaborated with Ph.D. students to iterate on experimental tools, improving usability and reliability across multiple research projects.",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    employer: "University of Guelph – CS Department",
    start: 2024,
    end: 2025,
    description: [
      "Providing academic support and clarifying course material for students through email and office hours.",
      "Grading course deliverables, ensuring consistent and fair application of grading rubrics.",
      "Leading lab sessions to provide hands-on guidance, reinforcing key concepts taught in lectures.",
    ],
  },
];



const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-entry", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".experience h1", {
        opacity: 0,
        y: -30,
        duration: 1.5,
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
  <div className="timeline-employer">{exp.employer}</div>
  <ul className="timeline-desc">
    {exp.description.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
