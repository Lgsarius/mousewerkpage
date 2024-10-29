'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/CookieBanner.module.css';
import Link from 'next/link';
import CookieSettingsModal from './CookieSettingsModal';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allSettings = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieSettings', JSON.stringify(allSettings));
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
  };

  const acceptEssential = () => {
    const essentialSettings = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieSettings', JSON.stringify(essentialSettings));
    localStorage.setItem('cookieConsent', 'essential');
    setShowBanner(false);
  };

  const handleSaveSettings = (settings: Record<string, boolean>) => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className={styles.cookieBanner}>
        <div className={styles.content}>
          <h2 className={styles.title}>Datenschutzeinstellungen</h2>
          
          <p className={styles.description}>
            Wir verwenden Cookies und ähnliche Technologien, um Ihnen ein optimales Webseiten-Erlebnis zu bieten. 
            Dazu gehören Cookies, die für den Betrieb der Seite notwendig sind, sowie solche, die nur zu 
            anonymen Statistikzwecken genutzt werden. Sie können selbst entscheiden, welche Kategorien Sie 
            zulassen möchten. Bitte beachten Sie, dass auf Basis Ihrer Einstellungen womöglich nicht mehr 
            alle Funktionalitäten der Seite zur Verfügung stehen.{' '}
            <Link href="/privacy-policy" className={styles.link}>
              Weitere Informationen
            </Link>
          </p>

          <div className={styles.buttons}>
            <button onClick={acceptEssential} className={styles.secondaryButton}>
              Nur Essenzielle
            </button>
            <button 
              onClick={() => setShowSettings(true)} 
              className={styles.secondaryButton}
            >
              Einstellungen
            </button>
            <button onClick={acceptAll} className={styles.primaryButton}>
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>

      <CookieSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSaveSettings}
      />
    </>
  );
};

export default CookieBanner; 