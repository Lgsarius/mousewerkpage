"use client";
import ServiceHero from '@/components/ServiceHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BiCode } from 'react-icons/bi';
import styles from '@/styles/ServicePage.module.css';

export default function Development() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ServiceHero 
          title="Entwicklung"
          description="Moderne Webtechnologien und clean code für performante, skalierbare Lösungen nach höchsten Standards."
          Icon={BiCode}
        />
        
        <section className={styles.content}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Frontend Development</h3>
              <p>Modern Stack mit React, Next.js und TypeScript für optimale Performance.</p>
            </div>
            <div className={styles.feature}>
              <h3>Backend Development</h3>
              <p>Skalierbare Server-Architekturen und sichere API-Entwicklung.</p>
            </div>
            <div className={styles.feature}>
              <h3>CMS Integration</h3>
              <p>Flexible Content-Management-Systeme für einfache Verwaltung.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
} 