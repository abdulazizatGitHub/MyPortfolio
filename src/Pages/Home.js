import '../Assets/CSS/Home.css'
import {FaFacebookF, FaTwitter} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
function Home() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>Hi, I'm <span>Abdul Aziz</span></h1>
                <div className="text-animate">
                    <h3>Web Developer</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className="btn-box">
                    <button className="btn">Hire Me</button>
                    <button className="btn">Lets Talk</button>
                </div>

                <div className='home-sci'>
                    <a className='a' href=''><FaFacebookF /></a>
                    <a className='a' href=''><FaTwitter /></a>
                    <a className='a' href=''><BsInstagram /></a>
                </div>

            </div>

            <div className='home-imghover'></div>
            
        </section>
    );
}

export default Home;