import '../Assets/CSS/Project.css';
import { useRef, useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Laboratory Management System',
    description: 'Full-stack web application with role-based authentication for Admin, Staff, and Patients. Features include CRUD operations for inventory, lab users, and secure JWT authentication with scalable architecture.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    link: 'https://laboratory-management-system.vercel.app/',
    image: require('../Assets/Images/LMS.png'),
    source: 'https://github.com/abdulazizatGitHub/Laboratory-Management-System',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with product browsing, cart management, checkout flow, and comprehensive admin panel. Implemented RESTful APIs and structured database design for scalability.',
    tech: ['MERN Stack', 'REST APIs', 'Firebase'],
    link: '',
    image: require('../Assets/Images/E-Commerce.png'),
    source: 'https://github.com/abdulazizatGitHub/E-Commerce-Application',
  },
  {
    title: 'IoT Intrusion Detection System',
    description: 'Designed Dynamic Class-Weighted GAN (DCSW-GAN) to address class imbalance in IoT intrusion detection. Implemented log-based adaptive loss weighting strategy achieving improved minority-class recall on UNSW-NB15 and CICIDS-2017 datasets.',
    tech: ['PyTorch', 'Deep Learning', 'GANs', 'Python'],
    link: '',
    image: require('../Assets/Images/IDS.png'),
    source: '#',
  },
  {
    title: 'Virtual Try-On System',
    description: 'Deep learning-based virtual outfit try-on system using CP-VTON for realistic clothing simulation. Implemented image segmentation and computer vision techniques for accurate fitting visualization.',
    tech: ['PyTorch', 'OpenCV', 'Computer Vision', 'Python'],
    link: '',
    image: require('../Assets/Images/VTryon.png'),
    source: 'https://github.com/abdulazizatGitHub/virtual-try-on',
  },
  {
    title: 'PantryMind',
    description: 'AI-powered pantry and recipe management platform using NLP for ingredient parsing and ML-based recommendation system for personalized recipe generation and meal planning.',
    tech: ['Python', 'Flask', 'NLP', 'ML'],
    link: '',
    image: require('../Assets/Images/PantryMind.png'),
    source: 'https://github.com/abdulazizatGitHub/PantryMind',
  },
];

function useFadeOnScroll(ref) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [ref]);
  return isVisible ? 'fade-in' : 'fade-out';
}

function Project() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectRefs = useRef([]);

  const sectionClass = useFadeOnScroll(sectionRef);
  const headingClass = useFadeOnScroll(headingRef);

  const [cardVisibilities, setCardVisibilities] = useState(
    Array(projects.length).fill(false)
  );

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
    const observers = projectRefs.current.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          setCardVisibilities((vis) => {
            const updated = [...vis];
            updated[idx] = entry.isIntersecting;
            return updated;
          });
        },
        { threshold: 0.2 }
      );
    });
    projectRefs.current.forEach((refObj, idx) => {
      if (refObj && observers[idx]) observers[idx].observe(refObj);
    });
    return () => {
      projectRefs.current.forEach((refObj, idx) => {
        if (refObj && observers[idx]) observers[idx].unobserve(refObj);
      });
    };
  }, []);

  return (
    <section className={`projects ${sectionClass}`} id="projects" ref={sectionRef}>
      <h2 className={`section-title ${headingClass}`} ref={headingRef}>
        My <span>Projects</span>
      </h2>
      
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`project-card ${cardVisibilities[idx] ? 'fade-in' : 'fade-out'}`}
            ref={el => (projectRefs.current[idx] = el)}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <div className="overlay-links">
                  {project.link && project.link !== '' && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      className="overlay-btn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.source && project.source !== '#' && (
                    <a 
                      href={project.source} 
                      className="overlay-btn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech-tags">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;