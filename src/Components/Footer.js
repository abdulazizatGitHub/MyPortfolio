import '../Assets/CSS/Footer.css';
import {BiUpArrowAlt} from 'react-icons/bi';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-text'>
                <p>Copyright &copy; 2023 by Abdu Aziz | All Rights Reserved.</p>
            </div>

            <div className='footer-iconTop'>
                <a href=''><BiUpArrowAlt className='uparrow' /></a>
            </div>

        </footer>
    );
}

export default Footer;
