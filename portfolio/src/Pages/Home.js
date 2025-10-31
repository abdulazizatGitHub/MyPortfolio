import '../Assets/CSS/Home.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import ProfileImg from '../Assets/Images/MyImage.jpeg';
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
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.unobserve(node);
    }, [ref]);
    return isVisible ? 'fade-in' : 'fade-out';
}

function Home() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imgRef = useRef(null);

    const sectionClass = useFadeOnScroll(sectionRef);
    const contentClass = useFadeOnScroll(contentRef);
    const imgClass = useFadeOnScroll(imgRef);

    const [displayText, setDisplayText] = useState('');
    const roles = ['AI/ML Engineer', 'Software Engineer', 'Full-Stack Developer', 'Frontend Developer'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
            return;
        }

        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayText(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex, roles]);

    // Function to handle CV download
    const handleDownloadCV = () => {
        // Correct path for files in public folder
        const cvUrl = '/My CV (Updated).pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Abdul-Aziz-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Function to handle navigation to contact section
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={`home ${sectionClass}`} id="home" ref={sectionRef}>
            <div className="home-hero-container">
                <div className={`home-content ${contentClass}`} ref={contentRef}>
                    <h1 className="hero-title">Hi, I'm <span>Abdul Aziz</span></h1>
                    <div className="text-animate">
                        <h3 className="hero-subtitle">{displayText}<span className="cursor">|</span></h3>
                    </div>
                    <p className="hero-desc">
                        Passionate Software Engineer specializing in AI/ML, Deep Learning, and Full-Stack Development. 
                        Experienced in GAN-based intrusion detection systems, computer vision applications, and building 
                        scalable web solutions with MERN stack. Let's build something extraordinary together.
                    </p>
                    <div className="btn-box">
                        <button onClick={handleDownloadCV} className="btn">Download CV</button>
                        <button onClick={handleContactClick} className="btn">Let's Talk</button>
                    </div>
                    <div className="home-sci">
                        <a href='https://www.linkedin.com/in/abdulaziz-dev/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href='https://github.com/abdulazizatGitHub' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>
                <div className="home-image-container">
                    <img src={ProfileImg} alt="Abdul Aziz" className={`home-profile-img ${imgClass}`} ref={imgRef} />
                </div>
            </div>
        </section>
    );
}

export default Home;