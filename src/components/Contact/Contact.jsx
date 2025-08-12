import React, { useRef } from 'react';
import './Contact.css';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const YOUR_SERVICE_ID = "service_8kyfh1j";
const YOUR_TEMPLATE_ID = "template_89qxra1";
const YOUR_PUBLIC_KEY = "x7QkaqMuBqW18sTUE";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Your message has been sent!', {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
          });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.', {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      <div className="contact-flex-container">
        {/* Left - Contact Info */}
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={emailIcon} alt="Email" className="icon contact-icon" />
            <p>
              <a href="mailto:jaisudharsh@gmail.com">jaisudharsh@gmail.com</a>
              <br />
              <a href="mailto:2200032246cseh@gmail.com">2200032246cseh@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="icon contact-icon"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/mattupalli-jai-sudharsh/',
                  '_blank'
                )
              }
            />
            <p>
              <a href="https://www.linkedin.com/in/mattupalli-jai-sudharsh">LinkedIn</a>
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="mailservice-container">
          <form ref={form} onSubmit={sendEmail} className="mailservice-form">
            <label>Name</label>
            <input type="text" name="user_name" required />

            <label>Email</label>
            <input type="email" name="user_email" required />

            <label>Message</label>
            <textarea name="message" rows="5" required />

            <input type="submit" value="Send Message" className="mailservice-submit" />
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}

export default Contact;
