'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/CookieSettingsModal.module.css';
import { FaTimes, FaCheck } from 'react-icons/fa';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required?: boolean;
}

const cookieCategories: CookieCategory[] = [
  {
    id: 'essential',
    name: 'Essenzielle Cookies',
    description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
    required: true
  },
  {
    id: 'functional',
    name: 'Funktionale Cookies',
    description: 'Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung.',
  },
  {
    id: 'analytics',
    name: 'Analyse Cookies',
    description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'Diese Cookies werden verwendet, um Werbung relevanter für Sie zu machen.',
  }
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: Record<string, boolean>) => void;
}

export default function CookieSettingsModal({ isOpen, onClose, onSave }: Props) {
  const [settings, setSettings] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Load saved settings or set defaults
    const savedSettings = localStorage.getItem('cookieSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    } else {
      const defaults = cookieCategories.reduce((acc, category) => ({
        ...acc,
        [category.id]: category.required || false
      }), {});
      setSettings(defaults);
    }
  }, []);

  const handleToggle = (categoryId: string) => {
    if (categoryId === 'essential') return; // Can't toggle essential cookies
    setSettings(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    onSave(settings);
    onClose();
  };

  const handleAcceptAll = () => {
    const allEnabled = cookieCategories.reduce((acc, category) => ({
      ...acc,
      [category.id]: true
    }), {});
    setSettings(allEnabled);
    localStorage.setItem('cookieSettings', JSON.stringify(allEnabled));
    onSave(allEnabled);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Cookie-Einstellungen</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.description}>
            Hier können Sie Ihre Cookie-Präferenzen für unsere Website festlegen. 
            Sie können diese Einstellungen jederzeit ändern, indem Sie den Cookie-Link 
            in unserer Fußzeile aufrufen.
          </p>

          <div className={styles.categories}>
            {cookieCategories.map(category => (
              <div key={category.id} className={styles.category}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryInfo}>
                    <h3 className={styles.categoryTitle}>{category.name}</h3>
                    {category.required && (
                      <span className={styles.requiredBadge}>Erforderlich</span>
                    )}
                  </div>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={settings[category.id]}
                      onChange={() => handleToggle(category.id)}
                      disabled={category.required}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <button onClick={handleAcceptAll} className={styles.primaryButton}>
            <FaCheck className={styles.buttonIcon} />
            Alle akzeptieren
          </button>
          <button onClick={handleSave} className={styles.secondaryButton}>
            Auswahl speichern
          </button>
        </div>
      </div>
    </div>
  );
} 