import about from '../Assets/Images/about.png';
import '../Assets/CSS/About.css';
function About() {
    return (
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span><span className='animate scroll' style={{"--i":1}}></span></h2>

            <div className="about-img">
                <img src={about} alt="" />
                <span className='circle-spin'></span>
                <span className='animate scroll' style={{"--i":2}}></span>
            </div>
            
            <div className='about-content'>
                <h3>Web Developer! <span className='animate scroll' style={{"--i":3}}></span></h3>
                <p>Thank you for visiting my portfolio website. Get ready to embark on a visual and interactive journey that reflects the essence of Abdul Aziz a creative visionary in the world of web development.
                <br />
                🚀 Let's create something extraordinary together! 🚀
                <span className='animate scroll' style={{"--i":5}}></span>
                </p>

                {/* <div className='btn-box btns'>
                    <a href='#' className='btn'>Read More</a>
                    <span className='animate scroll' style={{"--i":6}}></span>
                </div> */}
            </div>
        </section>
    );
}

export default About;