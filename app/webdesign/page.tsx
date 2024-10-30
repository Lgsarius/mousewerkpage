"use client";
import ServiceHero from '@/components/ServiceHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BiPalette } from 'react-icons/bi';
import styles from '@/styles/ServicePage.module.css';

export default function WebdesignPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ServiceHero 
          title="Webdesign"
          description="Wir erschaffen einzigartige digitale Erlebnisse, die Ihre Marke perfekt repräsentieren und Ihre Besucher begeistern."
          Icon={BiPalette}
        />
        
        <section className={styles.content}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>UI/UX Design</h3>
              <p>Nutzerorientierte Interfaces mit intuitivem Design für optimale Benutzererfahrung.</p>
            </div>
            <div className={styles.feature}>
              <h3>Responsive Design</h3>
              <p>Perfekte Darstellung auf allen Geräten - vom Smartphone bis zum Desktop.</p>
            </div>
            <div className={styles.feature}>
              <h3>Corporate Design</h3>
              <p>Konsistente Markenidentität über alle digitalen Touchpoints hinweg.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
} 