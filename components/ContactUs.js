import React, { useState, useRef } from 'react';
import styles from '../styles/Contact.module.css';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_7pyloyq',  // Replace with your Service ID
        'template_iyiatr5', // Replace with your Template ID
        form.current,
        'QhFhCsS9c6-vZ0GBw'   // Replace with your Public Key
      );

      console.log(result.text);
      setFormData({ user_name: '', user_email: '', message: '' });
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error(error.text);
      alert('Oops! Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="user_name" className={styles.label}>Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="user_email" className={styles.label}>Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? (
              'Sending...'
            ) : (
              <>
                Send Message <FaPaperPlane style={{ marginLeft: '8px' }} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
