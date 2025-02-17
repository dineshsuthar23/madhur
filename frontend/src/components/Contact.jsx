import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Information Submitted:', contactInfo);
    alert('Your message has been sent!');
    setContactInfo({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={contactInfo.name} onChange={handleChange} placeholder="Enter your name" required
          /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={contactInfo.email} onChange={handleChange} placeholder="Enter your email" required
          /><br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={contactInfo.message} onChange={handleChange} placeholder="Write your message" required
          ></textarea><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
