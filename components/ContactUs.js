import React, { useState, useRef } from 'react';
import styles from '../styles/Contact.module.css';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

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
    
    const loadingToast = toast.loading('Ihre Nachricht wird gesendet...', { duration: 3000 });

    try {
      const result = await emailjs.sendForm(
        'service_lk7ep3o',
        'template_iyiatr5',
        form.current,
        'QhFhCsS9c6-vZ0GBw'
      );

      console.log(result.text);
      setFormData({ user_name: '', user_email: '', message: '' });
      
      toast.success(
        <div className={styles.toastMessage}>
          <h4>Nachricht erfolgreich gesendet!</h4>
          <p>Vielen Dank für Ihre Nachricht.</p>
        </div>,
        { duration: 5000 }
      );
    } catch (error) {
      console.error(error.text);
      toast.error(
        <div className={styles.toastMessage}>
          <h4>Ein Fehler ist aufgetreten</h4>
          <p>Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.</p>
        </div>,
        { duration: 5000 }
      );
    } finally {
      toast.dismiss(loadingToast);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: 'transparent',
            boxShadow: 'none',
            padding: 0,
          },
        }}
      />
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
