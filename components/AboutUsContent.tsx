/* eslint-disable */
import styles from "@/styles/AboutUsContent.module.css";
import {  FaArrowRight, FaCog, FaDrawPolygon, FaFileImport, FaTools, FaCheck } from "react-icons/fa";
import Link from "next/link";
import dynamic from 'next/dynamic';
import HeroModel from './HeroModel';

export default function AboutUsContent() {
  const features = [
    { 
      icon: <FaDrawPolygon />, 
      title: "CAD-Expertise",
      description: "Erfahrung in der Optimierung und Reparatur von CAD-Modellen verschiedenster Formate.",
      benefits: ["3D Modellierung", "Technische Zeichnungen", "Reverse Engineering"]
    },
    { 
      icon: <FaFileImport />, 
      title: "Datenkonvertierung",
      description: "Professionelle Umwandlung und Aufbereitung Ihrer CAD-Daten in alle gängigen Formate.",
      benefits: ["Alle CAD Formate", "Qualitätssicherung", "Schnelle Bearbeitung"]
    },
    { 
      icon: <FaCog />, 
      title: "Technische Präzision",
      description: "Höchste Genauigkeit bei der Bearbeitung Ihrer CAD-Modelle und technischen Zeichnungen.",
      benefits: ["Maßgenau", "Normgerecht", "Qualitätsgeprüft"]
    },
    { 
      icon: <FaTools />, 
      title: "Individuelle Lösungen",
      description: "Maßgeschneiderte CAD-Dienstleistungen für Ihre spezifischen technischen Anforderungen.",
      benefits: ["Kundenspezifisch", "Flexibel", "Innovativ"]
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Über Mousewerk</h1>
            <p className={styles.subtitle}>Ihr Spezialist für CAD-Optimierung</p>
            <div className={styles.heroDescription}>
              <p>
                Bei Mousewerk sind wir Experten für CAD-Datenaufbereitung und -Optimierung. 
                Unsere Mission ist es, technische Zeichnungen und 3D-Modelle zu optimieren 
                und an Ihre spezifischen Anforderungen anzupassen.
              </p>
            </div>
          </div>
          <HeroModel />
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2>Unsere Mission</h2>
            <p>
              Als spezialisiertes Team für CAD-Dienstleistungen verbinden wir technisches 
              Know-how mit effizienten Prozessen. Unser Ziel ist es, Ihre CAD-Daten zu 
              optimieren und Ihre Produktentwicklung zu beschleunigen.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2>Was uns auszeichnet</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureHeader}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
              <ul className={styles.benefitsList}>
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <FaCheck className={styles.checkIcon} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Bereit für Ihr nächstes Projekt?</h2>
          <p className={styles.ctaDescription}>
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            <div className={styles.buttonContent}>
              <span>Projekt anfragen</span>
              <FaArrowRight className={styles.arrowIcon} />
            </div>
            <div className={styles.buttonHighlight} />
          </Link>
        </div>
      </section>
    </div>
  );
}
