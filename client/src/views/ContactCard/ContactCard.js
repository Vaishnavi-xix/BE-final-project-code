import React from "react";
import "./ContactCard.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ContactCard() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="back-color contact-form">
        <p className="massage-contact"> - Send us message</p>
        <p className="back-color welcome-line">
          WE WELCOME YOU , VISIT US ANYTIME
        </p>
         <form 
         action="https://formspree.io/f/xjvnwgel"
         method="POST"
         >
          
        <input type="text" className="input-1" name="username" required placeholder="Your Name" />
        <input type="email" className="input-2" name="Email" autoComplete="off" required placeholder="Your Email" />
        <input type="text" className="input-3" name="message" required autoComplete="off" placeholder="Message" />
        <br />

        <button type="submit" className="msg-btn">
          Send Message{" "}
        </button>
         </form>
      </div>

      <Footer />
    </div>
  );
}

export default ContactCard;
