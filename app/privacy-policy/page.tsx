"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/PrivacyPolicy.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
        </div>
        
        <section className={styles.policySection}>
          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p className={styles.sectionContent}>
              We collect information that you provide directly to us, including but not limited to your name, email address, and any other information you choose to provide.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p className={styles.sectionContent}>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>3. Information Sharing</h2>
            <p className={styles.sectionContent}>
              We do not sell or share your personal information with third parties except as described in this privacy policy or with your consent.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>4. Data Security</h2>
            <p className={styles.sectionContent}>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.
            </p>
          </div>

          <div className={styles.policyCard}>
            <h2 className={styles.sectionTitle}>5. Contact Us</h2>
            <p className={styles.sectionContent}>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:support@mousewerk.de" className={styles.contactEmail}>
              support@mousewerk.de
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
