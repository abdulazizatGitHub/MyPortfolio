import React from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import '../Assets/CSS/Header.css';
function Header() {
  return (
    <header className='header'>
      <Link to="home" smooth={true} duration={500} className="logo">
        Abdul Aziz.
      </Link>

      <FiMenu id='menu-icon' />

      <nav className="navbar">
        <Link to="home" smooth={true} duration={500} className='a'>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className='a'>
          About
        </Link>
        <Link to="education" smooth={true} duration={500} className='a'>
          Education
        </Link>
        <Link to="skills" smooth={true} duration={500} className='a'>
          Skills
        </Link>
        <Link to="contact" smooth={true} duration={500} className='a'>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
