import about from '../Assets/Images/about.png';
import '../Assets/CSS/About.css';
function About() {
    return (
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>

            <div className="about-img">
                <img src={about} alt="" />
                <span className='circle-spin'></span>
            </div>
            
            <div className='about-content'>
                <h3>Web Developer!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className='btn-box btns'>
                    <a href='#' className='btn'>Read More</a>
                </div>
            </div>
        </section>
    );
}

export default About;