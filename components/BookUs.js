import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/BookUs.module.css';

export default function BookUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
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
    try {
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Booking submitted:', formData);
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: ''
        });
        alert('Thank you for your booking request. We will contact you soon to discuss your project!');
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  return (
    <section id="book-us" className={styles.bookUsSection}>
      <div className={styles.bookUsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.logoContainer}>
            <Image 
              src="/logo_trans.png" 
              alt="WebDesign Logo" 
              width={200} 
              height={100} 
              objectFit="contain"
              className={styles.logoImage}
            />
          </div>
          <h2 className={styles.bookUsTitle}>Craft Your Digital Presence</h2>
          <p className={styles.bookUsDescription}>
            Transform your vision into a stunning reality. Our expert team is ready to create a website that not only looks great but drives results for your business.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎨</div>
              <div className={styles.featureText}>
                <h3>Bespoke Design</h3>
                <p>Tailored to your brand&apos;s unique identity</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📱</div>
              <div className={styles.featureText}>
                <h3>Responsive Development</h3>
                <p>Flawless on every device</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🚀</div>
              <div className={styles.featureText}>
                <h3>Rapid Delivery</h3>
                <p>Quick turnaround without compromising quality</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={styles.formTitle}>Book Your Project</h3>
          <form onSubmit={handleSubmit} className={styles.bookUsForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Your Name"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Your Email"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your Company (optional)"
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Project Type</option>
                  <option value="website">Website Design</option>
                  <option value="ecommerce">E-commerce Website</option>
                  <option value="webapp">Web Application</option>
                  <option value="redesign">Website Redesign</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Budget Range</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="Desired Timeline (e.g., 2 months, ASAP)"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Book Your Consultation
              <span className={styles.buttonIcon}>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
