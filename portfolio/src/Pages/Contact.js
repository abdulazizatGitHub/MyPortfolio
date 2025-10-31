import React, { useRef, useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import '../Assets/CSS/Contact.css';

function useFadeOnScroll(ref) {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.unobserve(node);
    }, [ref]);
    return isVisible ? 'fade-in' : 'fade-out';
}

function Contact() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

    const sectionClass = useFadeOnScroll(sectionRef);
    const headingClass = useFadeOnScroll(headingRef);
    const formClass = useFadeOnScroll(formRef);
    const infoClass = useFadeOnScroll(infoRef);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        
        if (!form.name.trim()) {
            newErrors.name = 'Full Name is required.';
        }
        
        if (!form.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        
        if (!form.phone.trim()) {
            newErrors.phone = 'Phone Number is required.';
        } else if (!/^\d{11,14}$/.test(form.phone)) {
            newErrors.phone = 'Phone Number must be 11-14 digits.';
        }
        
        if (!form.subject.trim()) {
            newErrors.subject = 'Email Subject is required.';
        }
        
        if (!form.message.trim()) {
            newErrors.message = 'Message is required.';
        } else if (form.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters.';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            setForm(f => ({ ...f, [name]: value.replace(/[^\d]/g, '') }));
        } else {
            setForm(f => ({ ...f, [name]: value }));
        }
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            
            // Simulate form submission
            setTimeout(() => {
                setIsSubmitted(true);
                setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                setErrors({});
                setIsSubmitting(false);
                
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <section className={`contact ${sectionClass}`} id="contact" ref={sectionRef}>
            <h2 ref={headingRef} className={`heading ${headingClass}`}>
                Get In <span>Touch</span>
            </h2>
            
            <p className="contact-subtitle">Let's discuss your project and build something amazing together!</p>

            <div className="contact-container">
                {/* Contact Information */}
                <div ref={infoRef} className={`contact-info ${infoClass}`}>
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to me through any of the following channels:</p>
                    
                    <div className="contact-info-items">
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <a href="mailto:abdulazizk1430@gmail.com">abdulazizk1430@gmail.com</a>
                            </div>
                        </div>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <FaPhone />
                            </div>
                            <div className="contact-details">
                                <h4>Phone</h4>
                                <a href="tel:+923416988051">+92 341 6988051</a>
                            </div>
                        </div>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-details">
                                <h4>Location</h4>
                                <span>G15 Islamabad, Pakistan</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="social-links">
                        <h4>Follow Me</h4>
                        <div className="social-icons">
                            <a href='https://www.linkedin.com/in/abdulaziz-dev/' target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin />
                            </a>
                            <a href='https://github.com/abdulazizatGitHub' target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div ref={formRef} className={`contact-form-container ${formClass}`}>
                    {isSubmitted ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. I'll get back to you soon!</p>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="btn btn-secondary"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="input-box">
                                <div className="input-field">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Full Name" 
                                        value={form.name} 
                                        onChange={handleChange} 
                                        required 
                                        className={errors.name ? 'error' : ''}
                                    />
                                    <span className="focus"></span>
                                    {errors.name && <div className="error-msg">{errors.name}</div>}
                                </div>
                                <div className="input-field">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email Address" 
                                        value={form.email} 
                                        onChange={handleChange} 
                                        required 
                                        className={errors.email ? 'error' : ''}
                                    />
                                    <span className="focus"></span>
                                    {errors.email && <div className="error-msg">{errors.email}</div>}
                                </div>
                            </div>
                            
                            <div className="input-box">
                                <div className="input-field">
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        placeholder="Phone Number" 
                                        value={form.phone} 
                                        onChange={handleChange} 
                                        required 
                                        maxLength={14} 
                                        className={errors.phone ? 'error' : ''}
                                    />
                                    <span className="focus"></span>
                                    {errors.phone && <div className="error-msg">{errors.phone}</div>}
                                </div>
                                <div className="input-field">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Email Subject" 
                                        value={form.subject} 
                                        onChange={handleChange} 
                                        required 
                                        className={errors.subject ? 'error' : ''}
                                    />
                                    <span className="focus"></span>
                                    {errors.subject && <div className="error-msg">{errors.subject}</div>}
                                </div>
                            </div>
                            
                            <div className="textarea-field">
                                <textarea 
                                    name="message" 
                                    cols={30} 
                                    rows={6} 
                                    placeholder="Your Message..." 
                                    value={form.message} 
                                    onChange={handleChange} 
                                    required
                                    className={errors.message ? 'error' : ''}
                                ></textarea>
                                <span className="focus"></span>
                                {errors.message && <div className="error-msg">{errors.message}</div>}
                            </div>
                            
                            <div className="btn-box">
                                <button 
                                    type="submit" 
                                    className="btn submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="btn-icon" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;