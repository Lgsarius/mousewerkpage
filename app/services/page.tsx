"use client";
import styles from '@/styles/services.module.css';
import { 
  FaDrawPolygon, 
  FaFileImport, 
  FaTools, 
  FaArrowRight, 
  FaCog,
  FaRobot
} from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function ServicesPage() {
  const services = [
    {
      title: "CAD-Optimierung",
      description: "Professionelle Optimierung und Reparatur Ihrer CAD-Modelle für maximale Effizienz.",
      icon: <FaDrawPolygon className={styles.serviceIcon} />,
      features: [
        "Fehlerbereinigung",
        "Geometrieoptimierung",
        "Datenkomprimierung"
      ],
      link: "/services/cad-optimization"
    },
    {
      title: "Datenkonvertierung",
      description: "Zuverlässige Umwandlung Ihrer CAD-Daten in verschiedene Formate.",
      icon: <FaFileImport className={styles.serviceIcon} />,
      features: [
        "Format-Konvertierung",
        "Datenaufbereitung",
        "Qualitätssicherung"
      ],
      link: "/services/data-conversion"
    },
    {
      title: "Spezialfälle",
      description: "Maßgeschneiderte Lösungen für komplexe CAD-Herausforderungen.",
      icon: <FaTools className={styles.serviceIcon} />,
      features: [
        "Reverse Engineering",
        "Legacy-Daten",
        "Sonderanfertigungen"
      ],
      link: "/services/special-cases"
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Unsere Dienstleistungen</h1>
            <p className={styles.subtitle}>Professionelle CAD-Lösungen für Ihre Anforderungen</p>
            <p className={styles.description}>
              Von der CAD-Optimierung über Datenkonvertierung bis hin zu Spezialanfertigungen – 
              wir bieten Ihnen das komplette Spektrum professioneller CAD-Dienstleistungen.
            </p>
          </div>
        </section>

        <section className={styles.servicesOverview}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  {service.icon}
                  <h2>{service.title}</h2>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaCog className={styles.featureIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className={styles.serviceLink}>
                  Mehr erfahren <FaArrowRight className={styles.arrowIcon} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Bereit für Ihr Projekt?</h2>
          <p>
            Lassen Sie uns gemeinsam die optimale Lösung für Ihre CAD-Anforderungen finden.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Projekt anfragen <FaArrowRight />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
} 