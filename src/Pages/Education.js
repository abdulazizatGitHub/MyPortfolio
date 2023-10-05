import '../Assets/CSS/Education.css';
import {FaCalendarAlt} from 'react-icons/fa';
function Education() {
    return ( 
        <section className='education' id='education'>
            <h2 className='heading'>My <span>Journey</span><span className='animate scroll' style={{"--i":1}}></span></h2>

            <div className='education-row'>
                <div className='education-column'>
                    <h3 className='title'>Education<span className='animate scroll' style={{"--i":2}}></span></h3>

                    <div className='education-box'>
                        <div className='education-content'>
                            <div className='content'>
                                <div className='year'><FaCalendarAlt className='calender' /> 2018 - 2020</div>
                                <h3>FSC - College</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        <div className='education-content'>
                            <div className='content'>
                                <div className='year'><FaCalendarAlt className='calender' /> 2021 - 2025</div>
                                <h3>Bachelor's Degree - University</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <span className='animate scroll' style={{"--i":3}}></span>
                    </div>
                </div>

                <div className='education-column'>
                    <h3 className='title'>Experiance<span className='animate scroll' style={{"--i":5}}></span></h3>

                    <div className='education-box'>
                        <div className='education-content'>
                            <div className='content'>
                                <div className='year'><FaCalendarAlt className='calender' /> 0000 - 0000</div>
                                <h3>None</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                           
                        </div>
                        <span className='animate scroll' style={{"--i":6}}></span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;