import { Link } from 'react-scroll';
import '../Assets/CSS/Footer.css';
import {BiUpArrowAlt} from 'react-icons/bi';
import React, { useEffect } from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-text'>
                <p>Copyright &copy; 2023 by Abdu Aziz | All Rights Reserved.</p>
            </div>

            <div className='footer-iconTop'>
                <Link
                className='uparrow' 
                smooth={true}
                duration={1} 
                to='home'><BiUpArrowAlt className='uparrow-icon' /></Link>
            </div>

        </footer>
    );
}

export default Footer;
