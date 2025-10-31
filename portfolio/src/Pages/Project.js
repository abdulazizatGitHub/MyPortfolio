import '../Assets/CSS/Project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import React, { useRef, useEffect, useState } from 'react';

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
  const swiperRef = useRef(null);

  const sectionClass = useFadeOnScroll(sectionRef);
  const headingClass = useFadeOnScroll(headingRef);
  const swiperClass = useFadeOnScroll(swiperRef);

  return (
    <section className={`projects gradient-bg ${sectionClass}`} id="projects" ref={sectionRef}>
      <h2 className={`section-title ${headingClass}`} ref={headingRef}>
        My <span>Projects</span>
      </h2>
      <div ref={swiperRef} className={swiperClass}>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={32}
          breakpoints={{
            700: { slidesPerView: 2, spaceBetween: 32 },
            1100: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="project-swiper"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="project-card modern-card">
                <div className="project-image-wrapper large-image">
                  <img src={project.image} alt={project.title + ' screenshot'} className="project-image" />
                </div>
                <div className="project-card-content">
                  <h3 className="project-title large-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech tag-list">
                    {project.tech.map((tech, i) => (
                      <span className="tech-badge tag" key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.link && project.link !== '' && project.link !== '#' && (
                      <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                    {project.source && project.source !== '#' && (
                      <a href={project.source} className="btn" target="_blank" rel="noopener noreferrer">Source Code</a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;