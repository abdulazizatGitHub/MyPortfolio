import about from '../Assets/Images/about.png';
import '../Assets/CSS/About.css';
import React, { useRef, useEffect, useState } from 'react';

function useFadeOnScroll(ref) {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );
        observer.observe(node);
        return () => observer.unobserve(node);
    }, [ref]);
    return isVisible ? 'fade-in' : 'fade-out';
}

function About() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const imgRef = useRef(null);
    const contentRef = useRef(null);

    const sectionClass = useFadeOnScroll(sectionRef);
    const headingClass = useFadeOnScroll(headingRef);
    const imgClass = useFadeOnScroll(imgRef);
    const contentClass = useFadeOnScroll(contentRef);

    return (
        <section className={`about ${sectionClass}`} id="about" ref={sectionRef}>
            <h2 className={`heading ${headingClass}`} ref={headingRef}>
                About <span>Me</span>
            </h2>

            <div className={`about-img ${imgClass}`} ref={imgRef}>
                <img src={about} alt="Abdul Aziz" />
                <span className='circle-spin'></span>
            </div>
            
            <div className={`about-content ${contentClass}`} ref={contentRef}>
                <h3>AI/ML Engineer & Full-Stack Developer</h3>
                <p>
                    I'm a passionate Software Engineer with expertise in Artificial Intelligence, Machine Learning, 
                    and Full-Stack Web Development. Currently working as a Frontend Developer at Inara Technologies, 
                    I bring a unique blend of AI/ML knowledge and web development skills.
                </p>
                <p>
                    My journey includes groundbreaking research on GAN-based intrusion detection systems for IoT networks, 
                    developing computer vision applications like Virtual Try-On systems, and building scalable web solutions 
                    using the MERN stack. I'm proficient in Python, PyTorch, TensorFlow, and modern web technologies.
                </p>
                <p>
                    With a CGPA of 3.52 from COMSATS University and hands-on experience in AI/ML projects, I'm dedicated 
                    to creating innovative solutions that make a real impact. Let's collaborate and build the future together!
                </p>
                <div className="about-stats">
                    <div className="stat-item">
                        <span className="stat-number">3.52</span>
                        <span className="stat-label">CGPA</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">2+</span>
                        <span className="stat-label">Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;