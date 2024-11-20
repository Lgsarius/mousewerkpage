import { FaCog, FaDrawPolygon, FaFileImport, FaTools } from 'react-icons/fa';
import styles from '../styles/ServicesSection.module.css';
import { useInView } from 'react-intersection-observer';

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.technicalBackground}>
        <div className={styles.gridLines}></div>
        <div className={styles.floatingElements}>
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={styles.floatingShape}
              style={{ '--delay': i * 2 }}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.header} ${inView ? styles.animate : ''}`}>
          <span className={styles.preTitle}>Unsere Leistungen</span>
          <h2 className={styles.title}>CAD-Dienstleistungen</h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineDot}></div>
          </div>
          <p className={styles.subtitle}>
            Professionelle CAD-Optimierung und Datenaufbereitung für Ihre technischen Anforderungen
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceCard} ${inView ? styles.animate : ''}`}
              style={{ '--animation-order': index }}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => {
                e.currentTarget.style.removeProperty('--mouse-x');
                e.currentTarget.style.removeProperty('--mouse-y');
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                  <div className={styles.iconGlow}></div>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={styles.featureItem}
                      style={{ '--feature-delay': featureIndex }}
                    >
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.cardBorder}></div>
            </div>
          ))}
        </div>

        <div className={`${styles.ctaContainer} ${inView ? styles.animate : ''}`}>
          <a href="/request" className={styles.ctaButton}>
            <span className={styles.ctaText}>Jetzt Projekt anfragen</span>
           
          </a>
        </div>
      </div>
    </section>
  );
} 