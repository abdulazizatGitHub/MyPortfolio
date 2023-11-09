import '../Assets/CSS/Home.css'
import {FaLinkedin, FaTwitter} from 'react-icons/fa';

function Home() {
    return (
        <section className="home show-animate" id="home">
            <div className="home-content">
                <h1>Hi, I'm <span>Abdul Aziz</span><span className='animate'></span></h1>
                <div className="text-animate">
                    <h3>Web Developer</h3>
                    <span className='animate'></span>
                </div>
                <p>Welcome to my world of web development! I specialize in crafting digital experiences that blend artistry with technology. With a passion for innovation and a commitment to excellence, I turn ideas into interactive realities. Let's build something extraordinary together.
                <span className='animate'></span>
                </p>

                <div className="btn-box">
                    <button className="btn">Hire Me</button>
                    <button className="btn">Lets Talk</button>
                    <span className='animate'></span>
                </div>

                <div className='home-sci'>
                    <a className='a' href='https://www.linkedin.com/in/abdul-aziz-41364728a/'><FaLinkedin /></a>
                    <a className='a' href='https://twitter.com/AbdulAziz19280'><FaTwitter /></a>
                    <span className='animate'></span>
                </div>

            </div>

            <div className='home-imghover'></div>
            <span className='animate home-img'></span>
            
        </section>
    );
}

export default Home;