"use client";
import ServiceHero from '@/components/ServiceHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BiSearchAlt } from 'react-icons/bi';
import styles from '@/styles/ServicePage.module.css';

export default function SEO() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ServiceHero 
          title="SEO Optimierung"
          description="Verbessern Sie Ihre Online-Sichtbarkeit und erreichen Sie mehr qualifizierte Besucher durch professionelle Suchmaschinenoptimierung."
          Icon={BiSearchAlt}
        />
        
        <section className={styles.content}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>On-Page SEO</h3>
              <p>Technische Optimierung und Content-Strategie für besseres Ranking.</p>
            </div>
            <div className={styles.feature}>
              <h3>Performance</h3>
              <p>Optimierung der Ladezeiten und technischen SEO-Faktoren.</p>
            </div>
            <div className={styles.feature}>
              <h3>Analytics</h3>
              <p>Datenbasierte Entscheidungen durch umfassende Analyse-Tools.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
} 