import React, { useState, useEffect } from 'react';
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

  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    // Handle mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Handle viewport height for mobile browsers
    const handleResize = () => {
      setViewportHeight(`${window.innerHeight}px`);
    };

    // Initial checks
    checkMobile();
    handleResize();

    // Event listeners
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isMobile) {
      // Blur active element to hide keyboard
      document.activeElement?.blur();
    }

    setIsLoading(true);
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
        alert('Vielen Dank für Ihre Projektanfrage. Wir werden uns in Kürze mit Ihnen in Verbindung setzen!');
      } else {
        throw new Error('Fehler beim Senden der Anfrage');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Bei der Übermittlung Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="book-us" 
      className={styles.bookUsSection} 
      style={{ minHeight: viewportHeight }}
    >
      <div className={styles.bookUsContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.bookUsTitle}>Gestalten Sie Ihre digitale Präsenz</h2>
          <p className={styles.bookUsDescription}>
            Verwandeln Sie Ihre Vision in eine beeindruckende Realität. Unser Expertenteam ist bereit, eine Website zu erstellen, die nicht nur großartig aussieht, sondern auch Ergebnisse für Ihr Unternehmen liefert.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎨</div>
              <div className={styles.featureText}>
                <h3>Maßgeschneidertes Design</h3>
                <p>Angepasst an die einzigartige Identität Ihrer Marke</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📱</div>
              <div className={styles.featureText}>
                <h3>Responsive Entwicklung</h3>
                <p>Perfekt auf jedem Gerät</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🚀</div>
              <div className={styles.featureText}>
                <h3>Schnelle Lieferung</h3>
                <p>Kurze Bearbeitungszeit ohne Qualitätseinbußen</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔒</div>
              <div className={styles.featureText}>
                <h3>Sicherheit zuerst</h3>
                <p>Entwickelt nach modernsten Sicherheitsstandards</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={styles.formTitle}>Projektanfrage</h3>
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
                placeholder="Ihr Name"
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
                placeholder="Ihre E-Mail"
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
                placeholder="Ihr Unternehmen (optional)"
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
                  <option value="">Projekttyp</option>
                  <option value="website">Website-Design</option>
                  <option value="ecommerce">E-Commerce Website</option>
                  <option value="webapp">Web-Anwendung</option>
                  <option value="redesign">Website-Redesign</option>
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
                  <option value="">Budgetrahmen</option>
                  <option value="0-1000">0€ - 1.000€</option>
                  <option value="1000-5000">1.000€ - 5.000€</option>
                  <option value="5000-10000">5.000€ - 10.000€</option>
                  <option value="10000+">über 10.000€</option>
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
                placeholder="Gewünschter Zeitrahmen (z.B. 2 Monate, ASAP)"
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
                placeholder="Erzählen Sie uns von Ihrem Projekt..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Wird gesendet...' : 'Beratung anfragen'}
              {!isLoading && <span className={styles.buttonIcon}>→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
