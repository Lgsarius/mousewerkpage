/* eslint-disable */
"use client";
import styles from '@/styles/services.module.css';
import { FaCheck, FaFileImport, FaExchangeAlt, FaSearchPlus, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function DataConversionPage() {
  const features = [
    {
      title: "Format-Konvertierung",
      description: "Zuverlässige Umwandlung zwischen allen gängigen CAD-Formaten",
      icon: <FaExchangeAlt className={styles.featureIcon} />
    },
    {
      title: "Datenaufbereitung",
      description: "Professionelle Aufbereitung und Optimierung der konvertierten Daten",
      icon: <FaFileImport className={styles.featureIcon} />
    },
    {
      title: "Qualitätskontrolle",
      description: "Gründliche Prüfung aller konvertierten Daten auf Genauigkeit",
      icon: <FaSearchPlus className={styles.featureIcon} />
    }
  ];

  const benefits = [
    "Unterstützung aller gängigen CAD-Formate",
    "Erhalt der Modellqualität bei der Konvertierung",
    "Schnelle Bearbeitung auch großer Datenmengen",
    "Sicherstellung der Datenintegrität",
    "Anpassung an Ihre Systemanforderungen",
    "Kosteneffiziente Formatumwandlung"
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Datenkonvertierung</h1>
              <p className={styles.subtitle}>Professionelle CAD-Formatumwandlung</p>
              <p className={styles.description}>
                Wir konvertieren Ihre CAD-Daten zuverlässig in alle gewünschten Formate. 
                Unsere Experten sorgen für eine präzise Umwandlung bei maximaler Datenqualität.
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
              Datenkonvertierungsanforderungen.
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