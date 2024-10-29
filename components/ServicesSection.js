import { FaCode, FaPencilRuler, FaSearchDollar, FaServer } from 'react-icons/fa';
import styles from '../styles/ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaPencilRuler />,
      title: "Webdesign",
      description: "Moderne und benutzerfreundliche Designs, die Ihre Marke perfekt repräsentieren.",
      features: [
        "Responsive Design",
        "UI/UX Konzeption",
        "Corporate Design Integration"
      ]
    },
    {
      icon: <FaCode />,
      title: "Webentwicklung",
      description: "Professionelle Entwicklung Ihrer Website mit modernsten Technologien.",
      features: [
        "React & Next.js",
        "Performance-Optimierung",
        "Mobile-First Ansatz"
      ]
    },
    {
      icon: <FaSearchDollar />,
      title: "SEO & Marketing",
      description: "Optimierung Ihrer Online-Präsenz für mehr Sichtbarkeit und Conversions.",
      features: [
        "Suchmaschinenoptimierung",
        "Content-Strategie",
        "Performance Marketing"
      ]
    },
    {
      icon: <FaServer />,
      title: "Wartung & Support",
      description: "Zuverlässige Betreuung und Wartung Ihrer Website nach dem Launch.",
      features: [
        "Regelmäßige Updates",
        "Security-Monitoring",
        "Technischer Support"
      ]
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>Unsere Leistungen</span>
          <h2 className={styles.title}>Was wir bieten</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            Professionelle Webentwicklung und Design für Ihren digitalen Erfolg
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