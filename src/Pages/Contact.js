import '../Assets/CSS/Contact.css';

function Contact() {
    return (
        <section className='contact' id='contact'>
            <h2 className='heading'>Contact <span>Me!</span></h2>

            <form action='#'>
                <div className='input-box'>
                    <div className='input-field'>
                        <input type='text' placeholder='Full Name' required />
                        <span className='focus'></span>
                    </div>

                    <div className='input-field'>
                        <input type='text' placeholder='Email Adress' required />
                        <span className='focus'></span>
                    </div>

                </div>

                <div className='input-box'>
                    <div className='input-field'>
                        <input type='text' placeholder='Phone Number' required />
                        <span className='focus'></span>
                    </div>

                    <div className='input-field'>
                        <input type='text' placeholder='Email Subject' required />
                        <span className='focus'></span>
                    </div>
                </div>

                <div className='textarea-field'>
                    <textarea name='' id='' cols={30} rows={10} placeholder='Your Message' required></textarea>
                    <span className='focus'></span>
                </div>

                <div className='btn-box btns'>
                    <button type='submit' className='btn'>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;