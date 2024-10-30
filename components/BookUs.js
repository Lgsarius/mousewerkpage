import React, { useState, useEffect } from 'react';
import styles from '../styles/BookUs.module.css';
import { 
  MdOutlineDesignServices, 
  MdOutlineDevices, 
  MdOutlineRocketLaunch, 
  MdOutlineSecurity 
} from 'react-icons/md';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

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

  const sendEmail = async (formData) => {
    // Format the budget range nicely
    const formatBudget = (budget) => {
      switch(budget) {
        case '0-1000': return 'bis 1.000€';
        case '1000-5000': return '1.000€ - 5.000€';
        case '5000-10000': return '5.000€ - 10.000€';
        case '10000+': return 'über 10.000€';
        default: return budget;
      }
    };

    // Format the project type nicely
    const formatProjectType = (type) => {
      switch(type) {
        case 'website': return 'Website-Design';
        case 'ecommerce': return 'E-Commerce Website';
        case 'webapp': return 'Web-Anwendung';
        case 'redesign': return 'Website-Redesign';
        default: return type;
      }
    };

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Nicht angegeben',
      project_type: formatProjectType(formData.projectType),
      budget: formatBudget(formData.budget),
      timeline: formData.timeline,
      description: formData.description,
      submission_date: new Date().toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await emailjs.send(
        'service_7pyloyq',
        'template_6q1cpwg',
        templateParams,
        'QhFhCsS9c6-vZ0GBw'
      );
      return true;
    } catch (error) {
      console.error('EmailJS Error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isMobile) {
      document.activeElement?.blur();
    }

    const loadingToast = toast.loading('Ihre Anfrage wird gesendet...');
    setIsLoading(true);

    try {
      // Send to your API
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('API Error');
      }

      // Send emails via EmailJS
      const emailSent = await sendEmail(formData);
      
      if (!emailSent) {
        throw new Error('Email Error');
      }

      // Success
      toast.success(
        <div className={styles.toastMessage}>
          <h4>Anfrage erfolgreich gesendet!</h4>
          <p>Wir haben Ihre Projektanfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
        </div>,
        {
          duration: 5000,
          style: {
            background: '#1B1B1B',
            color: '#ffffff',
            border: '1px solid rgba(150, 171, 194, 0.1)',
          }
        }
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error(
        <div className={styles.toastMessage}>
          <h4>Ein Fehler ist aufgetreten</h4>
          <p>Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.</p>
        </div>,
        {
          duration: 5000,
          style: {
            background: '#1B1B1B',
            color: '#ffffff',
            border: '1px solid rgba(255, 71, 87, 0.2)',
          }
        }
      );
    } finally {
      toast.dismiss(loadingToast);
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="book-us" 
      className={styles.bookUsSection} 
      style={{ minHeight: viewportHeight }}
    >
      <Toaster position="top-center" />
      <div className={styles.bookUsContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.bookUsTitle}>Gestalten Sie Ihre digitale Präsenz</h2>
          <p className={styles.bookUsDescription}>
            Verwandeln Sie Ihre Vision in eine beeindruckende Realität. Unser Expertenteam ist bereit, eine Website zu erstellen, die nicht nur großartig aussieht, sondern auch Ergebnisse für Ihr Unternehmen liefert.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <MdOutlineDesignServices className={styles.icon} />
              </div>
              <div className={styles.featureText}>
                <h3>Maßgeschneidertes Design</h3>
                <p>Angepasst an die einzigartige Identität Ihrer Marke</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <MdOutlineDevices className={styles.icon} />
              </div>
              <div className={styles.featureText}>
                <h3>Responsive Entwicklung</h3>
                <p>Perfekt auf jedem Gerät</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <MdOutlineRocketLaunch className={styles.icon} />
              </div>
              <div className={styles.featureText}>
                <h3>Schnelle Lieferung</h3>
                <p>Kurze Bearbeitungszeit ohne Qualitätseinbußen</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <MdOutlineSecurity className={styles.icon} />
              </div>
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
                  <option value="" disabled>Projekttyp</option>
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
                  <option value="" disabled>Budgetrahmen</option>
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
