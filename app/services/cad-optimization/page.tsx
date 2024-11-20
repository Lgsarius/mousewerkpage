/* eslint-disable */
"use client";
import styles from '@/styles/services.module.css';
import { FaCheck, FaCog, FaTools, FaArrowRight, FaDrawPolygon } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function CADOptimizationPage() {
  const features = [
    {
      title: "Fehlerbereinigung",
      description: "Identifikation und Korrektur von geometrischen Fehlern in CAD-Modellen",
      icon: <FaDrawPolygon className={styles.featureIcon} />
    },
    {
      title: "Geometrieoptimierung",
      description: "Optimierung der Modellstruktur für bessere Performance",
      icon: <FaCog className={styles.featureIcon} />
    },
    {
      title: "Datenkomprimierung",
      description: "Effiziente Reduktion der Dateigröße ohne Qualitätsverlust",
      icon: <FaTools className={styles.featureIcon} />
    }
  ];

  const benefits = [
    "Reduzierung der Dateigrößen bei gleichbleibender Qualität",
    "Beseitigung von Geometriefehlern und Inkonsistenzen",
    "Optimierung für verschiedene Fertigungsprozesse",
    "Verbesserte Performance in CAD-Systemen",
    "Qualitätssicherung durch automatisierte Prüfprozesse",
    "Schnellere Ladezeiten in CAD-Programmen"
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>CAD-Optimierung</h1>
              <p className={styles.subtitle}>Maximale Effizienz durch optimierte CAD-Daten</p>
              <p className={styles.description}>
                Unsere CAD-Optimierung verbessert die Qualität und Effizienz Ihrer technischen Daten. 
                Wir analysieren Ihre CAD-Modelle, beseitigen Fehler und optimieren die Geometrie für 
                Ihre spezifischen Anforderungen.
              </p>
            </div>
          </section>

          <section className={styles.featuresSection}>
            <div className={styles.featureGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  {feature.icon}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.benefitsSection}>
            <h2>Ihre Vorteile</h2>
            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Starten Sie Ihr Projekt</h2>
            <p>
              Kontaktieren Sie uns für eine individuelle Beratung zu Ihren 
              CAD-Optimierungsbedürfnissen. Wir finden die perfekte Lösung für Sie.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Projekt anfragen <FaArrowRight />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 