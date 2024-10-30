// Pfad zur Datei: /pages/index.tsx

"use client";
import { useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import Link from 'next/link';
import { BiCode, BiPalette } from 'react-icons/bi';
import { IoRocketOutline } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';
import ServicesSection from '@/components/ServicesSection';
// Image-Import entfernen, falls nicht verwendet

export default function Home() {
  // Move scrollToContent outside useEffect
  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerHeight = 70; // Height of your fixed header
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Verzögerung für Schwebe-Effekte der Hero-Content-Elemente hinzufügen
    const heroElements = document.querySelectorAll(`.${styles.heroContent} > *`);
    heroElements.forEach((el, index) => {
      (el as HTMLElement).style.setProperty('--float-delay', String(index * 0.2));
    });

    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
           
            <h1 className={styles.title}>
              Verwandeln Sie Ihre digitale Vision in Realität
            </h1>
            <p className={styles.description}>
              Wir schaffen außergewöhnliche Web-Erlebnisse, die Ergebnisse liefern. Von beeindruckendem Design bis hin zu leistungsstarker Funktionalität – wir sind Ihr Partner für digitale Exzellenz.
            </p>
            <div className={styles.ctaContainer}>
              <Link href="#projects" className={styles.ctaButton}>
                Projekte erkunden <BsArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="/request" className={`${styles.ctaButton} ${styles.ctaSecondary}`}>
                Jetzt durchstarten <BsArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <BiCode className={styles.featureIcon} />
                Individuelle Webentwicklung
              </li>
              <li className={styles.featureItem}>
                <BiPalette className={styles.featureIcon} />
                Modernes UI/UX-Design
              </li>
              <li className={styles.featureItem}>
                <IoRocketOutline className={styles.featureIcon} />
                Leistungsoptimierung
              </li>
            </ul>
          </div>
          <div className={styles.scrollIndicator} onClick={scrollToContent}>
            <span className={styles.scrollText}>Mehr entdecken</span>
            <div className={styles.scrollArrow}></div>
          </div>
        </section>
        <ServicesSection />
        <ProjectOverview />
      </main>
      <Footer />
    </div>
  );
}
