/* eslint-disable */
"use client";
import styles from '@/styles/services.module.css';
import { FaCheck, FaTools, FaCog, FaArrowRight, FaRobot } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function SpecialCasesPage() {
  const features = [
    {
      title: "Reverse Engineering",
      description: "Professionelle Rekonstruktion und Optimierung von CAD-Modellen",
      icon: <FaRobot className={styles.featureIcon} />
    },
    {
      title: "Legacy-Daten",
      description: "Aufbereitung und Modernisierung alter CAD-Daten",
      icon: <FaCog className={styles.featureIcon} />
    },
    {
      title: "Sonderanfertigungen",
      description: "Individuelle Lösungen für spezielle technische Anforderungen",
      icon: <FaTools className={styles.featureIcon} />
    }
  ];

  const benefits = [
    "Maßgeschneiderte Lösungen für komplexe Anforderungen",
    "Erfahrung mit Legacy-Systemen und -Daten",
    "Flexible Anpassung an Ihre Bedürfnisse",
    "Umfassende technische Beratung",
    "Innovative Lösungsansätze",
    "Hohe Präzision bei Sonderanfertigungen"
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Spezialfälle</h1>
              <p className={styles.subtitle}>Komplexe CAD-Herausforderungen meistern</p>
              <p className={styles.description}>
                Wir bieten maßgeschneiderte Lösungen für besondere CAD-Anforderungen. 
                Von Reverse Engineering bis zur Aufbereitung von Legacy-Daten – 
                wir finden die optimale Lösung für Ihre speziellen Herausforderungen.
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
              speziellen CAD-Anforderungen. Wir entwickeln die passende Lösung für Sie.
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