"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/PrivacyPolicy.module.css';

export default function Home() {
  return (
    <div style={{ background: 'var(--background-dark)' }}>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Datenschutzerklärung</h1>
        </div>
        
        <section className={styles.policySection}>
          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>1. Erhebung von Informationen</h2>
            <p className={styles.sectionContent}>
              Wir erfassen Informationen, die Sie uns direkt zur Verfügung stellen, einschließlich, aber nicht beschränkt auf Ihren Namen, Ihre E-Mail-Adresse und alle anderen Informationen, die Sie uns mitteilen möchten.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>2. Verwendung Ihrer Daten</h2>
            <p className={styles.sectionContent}>
              Wir verwenden die erhobenen Informationen, um unsere Dienstleistungen bereitzustellen, zu pflegen und zu verbessern, mit Ihnen zu kommunizieren und unseren rechtlichen Verpflichtungen nachzukommen.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>3. Weitergabe von Informationen</h2>
            <p className={styles.sectionContent}>
              Wir verkaufen oder teilen Ihre persönlichen Daten nicht mit Dritten, außer wie in dieser Datenschutzerklärung beschrieben oder mit Ihrer Einwilligung.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>4. Datensicherheit</h2>
            <p className={styles.sectionContent}>
              Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Ihre persönlichen Daten vor unbefugtem Zugriff oder Offenlegung zu schützen.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>5. Kontakt</h2>
            <p className={styles.sectionContent}>
              Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter{' '}
              <a href="mailto:support@mousewerk.de" className={styles.contactEmail}>
                support@mousewerk.de
              </a>
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>6. Ihre Rechte</h2>
            <p className={styles.sectionContent}>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>7. Cookies und Tracking</h2>
            <p className={styles.sectionContent}>
              Unsere Website verwendet Cookies und ähnliche Technologien, um die Nutzererfahrung zu verbessern und unsere Dienste zu optimieren. Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser anpassen.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>8. Rechtliche Grundlage</h2>
            <p className={styles.sectionContent}>
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage der DSGVO und des Bundesdatenschutzgesetzes (BDSG).
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
