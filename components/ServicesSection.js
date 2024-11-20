import { FaCog, FaDrawPolygon, FaFileImport, FaTools } from 'react-icons/fa';
import styles from '../styles/ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaDrawPolygon />,
      title: "CAD-Optimierung",
      description: "Professionelle Optimierung und Reparatur Ihrer CAD-Modelle für maximale Effizienz.",
      features: [
        "Fehlerbereinigung",
        "Geometrieoptimierung",
        "Datenkomprimierung"
      ]
    },
    {
      icon: <FaFileImport />,
      title: "Datenkonvertierung",
      description: "Zuverlässige Umwandlung Ihrer CAD-Daten in verschiedene Formate.",
      features: [
        "Format-Konvertierung",
        "Datenaufbereitung",
        "Qualitätssicherung"
      ]
    },
    {
      icon: <FaCog />,
      title: "CAD-Anpassung",
      description: "Maßgeschneiderte Anpassungen und Modifikationen Ihrer CAD-Modelle.",
      features: [
        "Modellanpassung",
        "Bauteiloptimierung",
        "Konstruktionsänderungen"
      ]
    },
    {
      icon: <FaTools />,
      title: "Spezialfälle",
      description: "Lösung komplexer CAD-Herausforderungen und Sonderanfertigungen.",
      features: [
        "Reverse Engineering",
        "Legacy-Daten Aufbereitung",
        "Spezielle Anforderungen"
      ]
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>Unsere Leistungen</span>
          <h2 className={styles.title}>CAD-Dienstleistungen</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            Professionelle CAD-Optimierung und Datenaufbereitung für Ihre technischen Anforderungen
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={styles.serviceCard}
              style={{ '--animation-order': index }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <a href="/request" className={styles.ctaButton}>
            Jetzt Projekt anfragen
          </a>
        </div>
      </div>
    </section>
  );
} 