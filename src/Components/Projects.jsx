import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaReact, FaCss3Alt, FaNodeJs, FaUnity, FaGoogle, FaFire } from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase, SiVite, SiTypescript, SiJavascript, SiSqlite, SiExpress } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const techIcons = {
  Flutter: <SiFlutter />,
  Dart: <SiDart />,
  Firebase: <SiFirebase />,
  Firestore: <FaFire />,
  API: <FaGoogle />,
  REST: <FaGoogle />,
  Unity: <FaUnity />,
  "C#": <span>C#</span>,
  React: <FaReact />,
  CSS: <FaCss3Alt />,
  Vite: <SiVite />,
  NodeJS: <FaNodeJs />,
  Express: <SiExpress />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  SQLite: <SiSqlite />
};

const projects = [
  {
    name: "Holo",
    description: "Cross-platform mobile app for managing Pokémon TCG collections with real-time data sync and market pricing.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Pokemon TCG API", "REST", "Android", "iOS"],
    github: "https://github.com/lee-ranaweer/holo"
  },
  {
    name: "GeoJobSearch",
    description: "A web application designed to assist users job search by aggregating information from various online job boards into one comprehensive, efficient, and easy-to-navigate application.",
    tech: ["Unity", "C#"],
    github: "https://github.com/lee-ranaweer/geo-job-search"
  },
  {
    name: "Molecule Visualizer",
    description: "Modern, animated dev portfolio featuring smooth scroll, reusable components, and GSAP animations.",
    tech: ["React", "CSS", "Vite"],
    github: "https://github.com/lee-ranaweer/molecule-visualizer"
  },
  {
    name: "Battlesnake Machine Learning",
    description: "ML agent for competitive Battlesnake game play.",
    tech: ["React", "CSS", "Vite"],
    github: "https://github.com/yourusername/portfolio"
  },
  {
    name: "Slashimi",
    description: "A Unity fishing game demo with slashing mechanics, inspired by Metal Gear Solid.",
    tech: ["React", "CSS", "Vite"],
    github: "https://github.com/yourusername/portfolio"
  }
];

const Projects = () => {
  const projectsGridRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    // Animate project cards individually as they scroll into view
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.from(card, {
opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animate the section title
    gsap.from(".projects-section h1", {
      opacity: 0,
      y: -30,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: projectsGridRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, projectsGridRef);

  return () => ctx.revert();
}, []);

  return (
    <section className="projects-section" ref={projectsGridRef}>
      <h1>Projects</h1>
      <div className="projects-grid" >
        {projects.map((proj, index) => (
          <div key={index} className="project-card sleek-card">
            <div className="project-info">
              <h2>{proj.name}</h2>
              <p className="project-desc">{proj.description}</p>

              <div className="tech-icons">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {techIcons[tech] || null} {tech}
                  </span>
                ))}
              </div>

              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub size={20} /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
