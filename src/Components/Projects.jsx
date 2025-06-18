import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiDocker, SiFlutter, SiDart, SiFirebase, SiVite, SiExpress, SiJavascript, SiTypescript, SiSqlite, SiSpring, SiMysql, SiPython, SiC, SiBlender, SiScikitlearn, SiAwsamplify } from "react-icons/si";
import {
  FaGithub, FaFire, FaGoogle, FaUnity, FaReact, FaCss3Alt, FaNodeJs, FaJava, FaHtml5, FaAndroid, FaApple
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Icons
const techIcons = {
  "Flutter": <SiFlutter />,
  "Dart": <SiDart />,
  "Firebase": <SiFirebase />,
  "Firestore": <FaFire />,
  "API": <FaGoogle />,
  "REST": <FaGoogle />,
  "Unity": <FaUnity />,
  "Python": <SiPython />,
  "Java": <FaJava />,
  "React": <FaReact />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "Vite": <SiVite />,
  "NodeJS": <FaNodeJs />,
  "Express": <SiExpress />,
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "SQLite": <SiSqlite />,
  "Springboot": <SiSpring />,
  "MySQL": <SiMysql />,
  "Blender": <SiBlender />,
  "Scikit learn": <SiScikitlearn />,
  "AWS": <SiAwsamplify />,
  "Docker": <SiDocker />,
  "Android": <FaAndroid />,
  "iOS": <FaApple />,
};

const projects = [
  {
    name: "Holo",
    description: "A cross-platform mobile app for managing your personal Pokémon TCG collection. It uses the Pokémon TCG API to deliver real-time market prices, card rarities, and set details. Features include custom deck building, wishlists, advanced filtering, and portfolio value tracking.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Android", "iOS", "Pokemon TCG API"],
    github: "https://github.com/lee-ranaweer/holo"
  },
  {
    name: "GeoJobSearch",
    description: "A fullstack app that streamlines your job search by aggregating listings from multiple online job boards into one user-friendly platform. Features include advanced searching and filtering, as well as Google Maps integration to view job postings relative to your location.",
    tech: ["Docker", "Springboot", "MySQL", "Python", "Java", "React", "HTML", "CSS", "JavaScript", "Google Maps API"],
    github: "https://github.com/lee-ranaweer/geo-job-search"
  },
  {
    name: "Molecule Visualizer",
    description: "A fullstack app that converts SDF files of molecular structures into interactive 3D models using a custom-built library. You can upload files to visualize molecules directly in the web browser. Uploaded molecules are saved in a local database for easy management.",
    tech: ["C", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/lee-ranaweer/molecule-visualizer"
  },
  {
    name: "Battlesnake Machine Learning",
    description: "A machine learning project that replicates the behavior of a top-performing Battlesnake by training models such as SVMs, Decision Trees, and Neural Networks on gameplay data. The goal was to compare these training methods in mimicking strategic decision-making. The final model achieved a 90% accuracy in replicating the original models behaviour.",
    tech: ["Python", "Scikit learn", "AWS"],
    github: "https://github.com/lee-ranaweer/battlesnake-machine-learning"
  },
  {
    name: "Slashimi",
    description: "A Unity fishing game demo featuring slashing mechanics inspired by Metal Gear Solid. Players explore a custom rendered island with a variety of fish differing in value, rarity, and difficulty. The demo features expressive player animations, dynamic facial expressions, ambient sound effects, and engaging fishing minigames.",
    tech: ["Unity", "C#", "Blender"],
    github: "https://github.com/lee-ranaweer/slashimi"
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

      // Header animation
      gsap.from(".projects h1", {
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
    <section className="projects" ref={projectsGridRef}>
      <h1>Projects</h1>
      <div className="projects-grid" >
        {projects.map((proj, index) => (
          <div key={index} className="project-card card">
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
