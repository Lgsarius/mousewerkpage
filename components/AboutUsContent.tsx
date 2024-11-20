import styles from "@/styles/AboutUsContent.module.css";
import { FaRocket, FaPuzzlePiece, FaLaptopCode, FaUsers, FaArrowRight, FaCog, FaDrawPolygon, FaFileImport, FaTools } from "react-icons/fa";
import Link from "next/link";

export default function AboutUsContent() {
  const features = [
    { 
      icon: <FaDrawPolygon className={styles.icon} />, 
      title: "CAD-Expertise",
      description: "Erfahrung in der Optimierung und Reparatur von CAD-Modellen verschiedenster Formate."
    },
    { 
      icon: <FaFileImport className={styles.icon} />, 
      title: "Datenkonvertierung",
      description: "Professionelle Umwandlung und Aufbereitung Ihrer CAD-Daten in alle gängigen Formate."
    },
    { 
      icon: <FaCog className={styles.icon} />, 
      title: "Technische Präzision",
      description: "Höchste Genauigkeit bei der Bearbeitung Ihrer CAD-Modelle und technischen Zeichnungen."
    },
    { 
      icon: <FaTools className={styles.icon} />, 
      title: "Individuelle Lösungen",
      description: "Maßgeschneiderte CAD-Dienstleistungen für Ihre spezifischen technischen Anforderungen."
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
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
