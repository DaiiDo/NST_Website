import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ei6i2l2', 'template_tybmu8k', form.current, 'm7gSRaT5rA6ySDX8m')
      .then(
        () => {
          toast.success('Message envoyé avec succès!', {
            position: "top-center",
            autoClose: 3000, 
          });
      
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          toast.error('Échec de l\'envoi du message. Veuillez réessayer.', {
            position: "top-center",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contactez-Nous</h2>
      <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Tél.</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Contact;
