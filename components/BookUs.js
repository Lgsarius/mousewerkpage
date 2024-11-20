/* eslint-disable */
import React, { useState, useEffect } from 'react';

import styles from '../styles/BookUs.module.css';
import { 
  FaDrawPolygon, 
  FaFileImport, 
  FaCog, 
  FaRobot,
  FaCheck 
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { init } from '@emailjs/browser';

export default function BookUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    fileFormat: '',
    timeline: '',
    description: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleResize = () => {
      setViewportHeight(`${window.innerHeight}px`);
    };

    checkMobile();
    handleResize();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    init("QhFhCsS9c6-vZ0GBw");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = async (formData) => {
    const formatServiceType = (type) => {
      switch(type) {
        case 'optimization': return 'CAD-Optimierung';
        case 'conversion': return 'Datenkonvertierung';
        case 'special': return 'Spezialfälle';
        case 'consulting': return 'CAD-Beratung';
        default: return type;
      }
    };

    const formatFileFormat = (format) => {
      switch(format) {
        case 'step': return 'STEP';
        case 'iges': return 'IGES';
        case 'stl': return 'STL';
        case 'other': return 'Andere Formate';
        default: return format;
      }
    };

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Nicht angegeben',
        service_type: formatServiceType(formData.serviceType),
        file_format: formatFileFormat(formData.fileFormat),
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

      const adminResponse = await emailjs.send(
        'service_lk7ep3o',
        'template_iyiatr5',
        templateParams,
        'QhFhCsS9c6-vZ0GBw'
      );

      if (adminResponse.status !== 200) {
        throw new Error('Failed to send admin notification');
      }

      return true;
    } catch (error) {
      console.error('EmailJS Error:', error.text || error.message || 'Unknown error');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isMobile) {
      document.activeElement?.blur();
    }

    const loadingToast = toast.loading('Ihre Anfrage wird gesendet...', { duration: 3000 });
    setIsLoading(true);

    try {
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Database error: ${response.status}`);
      }

      const emailSent = await sendEmail(formData);
      
      if (!emailSent) {
        throw new Error('Failed to send emails');
      }

      toast.success(
        <div className={styles.toastMessage}>
          <h4>Anfrage erfolgreich gesendet!</h4>
          <p>Wir haben Ihre Projektanfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
        </div>,
        { duration: 5000 }
      );

      setFormData({
        name: '',
        email: '',
        company: '',
        serviceType: '',
        fileFormat: '',
        timeline: '',
        description: ''
      });

    } catch (error) {
      console.error('Error details:', error);
      toast.error(
        <div className={styles.toastMessage}>
          <h4>Ein Fehler ist aufgetreten</h4>
          <p>Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.</p>
        </div>,
        { duration: 5000 }
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
      <div className={styles.bookUsContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.bookUsTitle}>Optimieren Sie Ihre CAD-Daten</h2>
          <p className={styles.bookUsDescription}>
            Verwandeln Sie Ihre CAD-Modelle in optimierte, effiziente Daten. Unser Expertenteam steht bereit, 
            um Ihre technischen Zeichnungen und 3D-Modelle zu optimieren und in die gewünschten Formate zu konvertieren.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <FaDrawPolygon className={styles.icon} />
              </div>
              <div className={styles.featureText}>
                <h3>CAD-Optimierung</h3>
                <p>Effiziente Geometrie und optimierte Dateigrößen</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <FaFileImport className={styles.icon} />
              </div>
              <div className={styles.featureText}>
                <h3>Datenkonvertierung</h3>
                <p>Alle gängigen CAD-Formate</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <FaRobot className={styles.icon} />
              </div>
              <div className={styles.featureText}>
                <h3>Automatisierung</h3>
                <p>Effiziente Verarbeitung großer Datenmengen</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <FaCog className={styles.icon} />
              </div>
              <div className={styles.featureText}>
                <h3>Spezialanpassungen</h3>
                <p>Maßgeschneiderte Lösungen für komplexe Anforderungen</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={styles.formTitle}>CAD-Projektanfrage</h3>
          <form onSubmit={handleSubmit} className={styles.bookUsForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
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
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                 
                  <option value="optimization">CAD-Optimierung</option>
                  <option value="conversion">Datenkonvertierung</option>
                  <option value="special">Spezialfälle</option>
                  <option value="consulting">CAD-Beratung</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <select
                  name="fileFormat"
                  value={formData.fileFormat}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                
                  <option value="step">STEP</option>
                  <option value="iges">IGES</option>
                  <option value="stl">STL</option>
                  <option value="stl">PRT</option>
                  <option value="stl">JT</option>
                  <option value="stl">DWG</option>
                  <option value="stl">DXF</option>
                  <option value="other">Andere</option>
                </select>
              </div>
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="Gewünschter Zeitrahmen (z.B. 1 Woche, ASAP)"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder="Beschreiben Sie Ihr CAD-Projekt (Anzahl der Dateien, aktuelle Formate, spezielle Anforderungen...)"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Wird gesendet...' : 'Angebot anfordern'}
              {!isLoading && <span className={styles.buttonIcon}>→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
