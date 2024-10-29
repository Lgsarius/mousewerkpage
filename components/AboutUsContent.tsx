import styles from "@/styles/AboutUsContent.module.css";
import { FaRocket, FaPuzzlePiece, FaLaptopCode, FaUsers, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function AboutUsContent() {
  const features = [
    { 
      icon: <FaLaptopCode className={styles.icon} />, 
      title: "Modernste Technologie",
      description: "Wir setzen auf zukunftssichere Technologien wie React, Next.js und moderne Backend-Lösungen."
    },
    { 
      icon: <FaPuzzlePiece className={styles.icon} />, 
      title: "Maßgeschneiderte Lösungen",
      description: "Jedes Projekt wird individuell nach Ihren spezifischen Anforderungen entwickelt."
    },
    { 
      icon: <FaRocket className={styles.icon} />, 
      title: "Schnelle Entwicklung",
      description: "Effiziente Prozesse ermöglichen eine schnelle Projektrealisierung ohne Qualitätseinbußen."
    },
    { 
      icon: <FaUsers className={styles.icon} />, 
      title: "Nutzerorientiertes Design",
      description: "Wir entwickeln Interfaces, die Ihre Zielgruppe begeistern und Conversion-Raten steigern."
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Über Mousewerk</h1>
          <p className={styles.subtitle}>Digitale Exzellenz gestalten</p>
          <div className={styles.heroDescription}>
            <p>
              Bei Mousewerk verbinden wir technische Innovation mit kreativem Design. 
              Unsere Mission ist es, digitale Lösungen zu schaffen, die nicht nur 
              funktional sind, sondern auch begeistern.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2>Unsere Mission</h2>
            <p>
        Als junges, dynamisches Team bringen wir innovative Ideen und moderne 
        Technologien zusammen. Unser Ziel ist es, durch die perfekte Verbindung 
        von Design und Funktionalität digitale Produkte zu schaffen, die begeistern.
      </p>
          </div>
         
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2>Was uns auszeichnet</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Bereit für Ihr nächstes Projekt?</h2>
        <p>Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen.</p>
        <Link href="/contact" className={styles.ctaButton}>
          <span>Projekt anfragen</span>
          <FaArrowRight />
        </Link>
      </section>
    </div>
  );
}
