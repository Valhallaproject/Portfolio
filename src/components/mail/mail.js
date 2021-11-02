import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from "../../components/header/headerSite";
import Footer from '../../components/footer/footer'; 
import './mail.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z9wnzml', 'service_z9wnzml', form.current)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <Header/>
    <div className="contenu">
    <h1 className="h1Mail">Me contacter</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="send" type="submit" value="Send" />
    </form>
    </div>
    <Footer/>
    </>
  );
};

export default Contact