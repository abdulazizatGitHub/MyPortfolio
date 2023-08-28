import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import '../Assets/CSS/Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionName = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionName);
        setIsMenuOpen(false);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const MenuIcon = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className='header'>
      <Link to="home" smooth={true} duration={500} className="logo">
        Abdul Aziz.
      </Link>

      {isMenuOpen ? (
        <RxCross2 onClick={MenuIcon} id='menu-icon' />
      ) : (
        <FiMenu onClick={MenuIcon} id='menu-icon' />
      )}

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={activeSection === 'home' ? 'a active' : 'a'}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className={activeSection === 'about' ? 'a active' : 'a'}
        >
          About
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={1}
          className={activeSection === 'education' ? 'a active' : 'a'}
        >
          Education
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={1}
          className={activeSection === 'skills' ? 'a active' : 'a'}
        >
          Skills
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1}
          className={activeSection === 'contact' ? 'a active' : 'a'}
        >
          Contact
        </Link>

        <span className='active-nav' ></span>
      </nav>
    </header>
  );
}

export default Header;
