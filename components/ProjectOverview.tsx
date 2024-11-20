/* eslint-disable */
"use client";
import React, { useState, useEffect, lazy, Suspense } from 'react';
import styles from '@/styles/ProjectOverview.module.css';
import { 
  FaDrawPolygon, 
  FaFileImport, 
  FaTools, 
  FaCog, 
  FaCheck, 
  FaArrowRight,
  FaRobot,
  FaDatabase,
  FaSearch
} from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  modelPath: string;
  link: string;
  titleColor: string;
  features: Feature[];
  benefits: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'CAD-Optimierung',
    subtitle: 'Maximale Effizienz durch optimierte Daten',
    description: 'Wir optimieren Ihre CAD-Modelle für bessere Performance und Qualität. Durch professionelle Fehlerbereinigung und Geometrieoptimierung erreichen wir maximale Effizienz bei minimaler Dateigröße.',
    modelPath: '/static/models/optimization-demo.stl',
    link: '/services/cad-optimization',
    titleColor: '#96ABC2',
    features: [
      { icon: <FaDrawPolygon />, text: 'Geometrieoptimierung' },
      { icon: <FaCog />, text: 'Fehlerbereinigung' },
      { icon: <FaTools />, text: 'Datenkomprimierung' },
      { icon: <FaSearch />, text: 'Qualitätskontrolle' }
    ],
    benefits: [
      'Reduzierte Dateigrößen',
      'Verbesserte Performance',
      'Fehlerfreie Geometrie',
      'Optimierte Verarbeitungszeit'
    ]
  },
  {
    id: 2,
    title: 'Datenkonvertierung',
    subtitle: 'Nahtlose Formatumwandlung',
    description: 'Professionelle Konvertierung Ihrer CAD-Daten in alle gängigen Formate. Wir gewährleisten dabei höchste Präzision und Datenqualität bei der Umwandlung.',
    modelPath: '/static/models/conversion-demo.stl',
    link: '/services/data-conversion',
    titleColor: '#4A90E2',
    features: [
      { icon: <FaFileImport />, text: 'Format-Konvertierung' },
      { icon: <FaDatabase />, text: 'Datenaufbereitung' },
      { icon: <FaCheck />, text: 'Qualitätssicherung' },
      { icon: <FaCog />, text: 'Format-Anpassung' }
    ],
    benefits: [
      'Alle gängigen Formate',
      'Erhalt der Modellqualität',
      'Schnelle Bearbeitung',
      'Zuverlässige Konvertierung'
    ]
  },
  {
    id: 3,
    title: 'Spezialfälle',
    subtitle: 'Maßgeschneiderte Lösungen',
    description: 'Individuelle Lösungen für komplexe CAD-Herausforderungen. Von Reverse Engineering bis zur Aufbereitung von Legacy-Daten finden wir die optimale Lösung für Ihre speziellen Anforderungen.',
    modelPath: '/static/models/special-demo.stl',
    link: '/services/special-cases',
    titleColor: '#FF7B00',
    features: [
      { icon: <FaRobot />, text: 'Reverse Engineering' },
      { icon: <FaDatabase />, text: 'Legacy-Daten' },
      { icon: <FaTools />, text: 'Sonderanfertigungen' },
      { icon: <FaCog />, text: 'Spezialanpassungen' }
    ],
    benefits: [
      'Individuelle Lösungen',
      'Flexible Anpassung',
      'Technische Beratung',
      'Innovative Ansätze'
    ]
  }
];

const ModelLoader = ({ color = '#4A90E2' }) => (
  <div className={styles.modelLoader} style={{ backgroundColor: '#1a1a1a' }}>
    <div className={styles.blueprint} style={{ borderColor: color }}>
      <div className={styles.gears}>
        <div className={styles.gear} style={{ borderColor: color }}></div>
        <div className={styles.gear} style={{ borderColor: color }}></div>
      </div>
      <span style={{ color }}>Loading 3D Model...</span>
    </div>
  </div>
);

// Lazy load the CADViewer component
const CADViewer = lazy(() => import('./CADViewer'));

const ServicesOverview: React.FC = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const serviceId = Number(entry.target.getAttribute('data-service-id'));
            setVisibleServices(prev => [...prev, serviceId]);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    document.querySelectorAll('[data-service-id]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.servicesOverview}>
      <div className={styles.titleContainer}>
        <span className={styles.preTitle}>Unsere Expertise</span>
        <h2 className={styles.sectionTitle}>CAD-Dienstleistungen</h2>
        <div className={styles.titleUnderline}></div>
      </div>

      {services.map((service, index) => (
        <div 
          key={service.id}
          data-service-id={service.id}
          className={`${styles.serviceSection} ${index % 2 === 0 ? styles.even : styles.odd}`}
        >
          <div className={styles.serviceContent}>
            <div className={styles.serviceHeader}>
              <span className={styles.serviceSubtitle}>{service.subtitle}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
            </div>
            
            <p className={styles.serviceDescription}>
              {service.description}
            </p>
            
            <div className={styles.featureGrid}>
              {service.features.map((feature, i) => (
                <div 
                  key={i} 
                  className={styles.featureItem}
                  role="button"
                  tabIndex={0}
                >
                  <div 
                    className={styles.featureIcon}
                    style={{ color: service.titleColor }}
                  >
                    {feature.icon}
                  </div>
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.benefitsList}>
              {service.benefits.map((benefit, i) => (
                <div key={i} className={styles.benefitItem}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link 
              href={service.link} 
              className={styles.serviceLink}
              style={{ backgroundColor: service.titleColor }}
            >
              <span>Mehr erfahren</span>
              <FaArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          <div className={styles.serviceImageWrapper}>
            {visibleServices.includes(service.id) ? (
              <Suspense fallback={<ModelLoader color={service.titleColor} />}>
                <CADViewer
                  modelPath={service.modelPath}
                  backgroundColor="#1a1a1a"
                  modelColor={service.titleColor}
                />
              </Suspense>
            ) : (
              <ModelLoader color={service.titleColor} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesOverview;
