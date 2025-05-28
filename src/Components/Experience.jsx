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
    description: "Assisted in teaching programming courses...."
  },
];

const minYear = Math.min(...experiences.map(e => e.start));
const maxYear = Math.max(...experiences.map(e => e.end));
const totalYears = maxYear - minYear;

const Experience = () => (
  <section className="experience">
    <h1>Experience</h1>
    <ul className="timeline">
      {experiences.map((exp, idx) => {
        const duration = exp.end - exp.start;
        // Proportional height: min 60px, max 180px
        const height = 60 + ((duration / totalYears) * 120);
        return (
          <li
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
            style={{ minHeight: `${height}px` }}
          >
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-title">{exp.title}</div>
              <div className="timeline-period">{exp.start} – {exp.end}</div>
              <div className="timeline-desc">{exp.description}</div>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);
export default Experience;