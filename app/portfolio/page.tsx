"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectOverview from '@/components/ProjectOverview';
import styles from '@/styles/Portfolio.module.css';
import { BiFolder } from 'react-icons/bi';

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <BiFolder className={styles.heroIcon} />
            <h1 className={styles.title}>Unsere Projekte</h1>
            <p className={styles.description}>
              Entdecken Sie eine Auswahl unserer erfolgreich umgesetzten Projekte. 
              Jedes Projekt erzählt seine eigene Geschichte von Innovation und digitalem Handwerk.
            </p>
          </div>
        </section>

        <section className={styles.projectsSection}>
          <ProjectOverview />
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Bereit für Ihr eigenes Projekt?</h2>
            <p>Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen.</p>
            <a href="/contact" className={styles.ctaButton}>
              Projekt anfragen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 