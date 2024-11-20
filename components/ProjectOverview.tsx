/* eslint-disable */
"use client";
import React, { useState } from 'react';
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
import CADViewer from './CADViewer';

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
    modelPath: '/models/optimization-demo.stl',
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
    modelPath: '/models/conversion-demo.stl',
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
    modelPath: '/models/special-demo.stl',
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

const ServicesOverview: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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
          className={`${styles.serviceSection} ${index % 2 === 0 ? styles.even : styles.odd}`}
          onMouseEnter={() => setActiveService(service.id)}
          onMouseLeave={() => setActiveService(null)}
        >
          <div className={styles.serviceContent}>
            <div className={styles.serviceHeader}>
              <span className={styles.serviceSubtitle}>{service.subtitle}</span>
              <h3 
                className={styles.serviceTitle}
                style={{ color: activeService === service.id ? service.titleColor : undefined }}
              >
                {service.title}
              </h3>
            </div>
            
            <p className={styles.serviceDescription}>
              {service.description}
            </p>
            
            <div className={styles.featureGrid}>
              {service.features.map((feature, i) => (
                <div key={i} className={styles.featureItem}>
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
            <CADViewer
              modelPath={service.modelPath}
              backgroundColor="#1a1a1a"
              modelColor={service.titleColor}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesOverview;
