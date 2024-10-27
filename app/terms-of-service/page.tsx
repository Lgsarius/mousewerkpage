"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/TermsOfService.module.css';

export default function TermsOfService() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.subtitle}>Legal Information & Terms of Use</p>
        </div>
        
        <section className={styles.termsSection}>
          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>1. Legal Notice (Impressum)</h2>
            <div className={styles.sectionContent}>
              <p><strong>Information according to § 5 TMG:</strong></p>
              <p>MouseWerk<br />
              Oberzwehrener Str. 62b<br />
            34132 Kassel<br />
              Germany</p>
              
              <p><strong>Represented by:</strong><br />
              [Maurice Kleindienst]</p>
              
              <p><strong>Contact:</strong><br />
             
              Email: support@mousewerk.de</p>
       
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>2. Data Protection (GDPR)</h2>
            <div className={styles.sectionContent}>
              <p><strong>2.1 Data Controller</strong></p>
              <p>The data controller for this website is MouseWerk GmbH [contact details as above].</p>
              
              <p><strong>2.2 Your Rights Under GDPR</strong></p>
              <ul className={styles.bulletList}>
                <li>Right to access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
              </ul>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>3. Terms of Use</h2>
            <div className={styles.sectionContent}>
              <p><strong>3.1 Scope</strong></p>
              <p>These terms govern the use of MouseWerk&apos;s software and services. By using our services, you agree to these terms.</p>
              
              <p><strong>3.2 License Terms</strong></p>
              <p>Users receive a non-exclusive, non-transferable right to use the software in accordance with these terms.</p>
              
              <p><strong>3.3 User Obligations</strong></p>
              <p>Users agree to:</p>
              <ul className={styles.bulletList}>
                <li>Use the software only for legal purposes</li>
                <li>Maintain the confidentiality of their account credentials</li>
                <li>Not attempt to circumvent any security measures</li>
                <li>Not reverse engineer the software</li>
              </ul>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>4. Liability and Warranty</h2>
            <div className={styles.sectionContent}>
              <p><strong>4.1 Limitation of Liability</strong></p>
              <p>MouseWerk shall be liable without limitation for damages caused intentionally or by gross negligence, as well as for damages resulting from injury to life, body, or health.</p>
              
              <p><strong>4.2 Warranty</strong></p>
              <p>The software is provided &quot;as is&quot;. We make no warranties regarding the accuracy, availability, or fitness for a particular purpose.</p>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>5. Payment Terms</h2>
            <div className={styles.sectionContent}>
              <p><strong>5.1 Pricing</strong></p>
              <p>All prices are in EUR and include applicable VAT.</p>
              
              <p><strong>5.2 Payment Processing</strong></p>
              <p>Payments are processed securely through our payment service providers in compliance with PSD2 requirements.</p>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>6. Final Provisions</h2>
            <div className={styles.sectionContent}>
              <p><strong>6.1 Governing Law</strong></p>
              <p>These terms are governed by German law. The UN Convention on Contracts for the International Sale of Goods (CISG) is excluded.</p>
              
              <p><strong>6.2 Jurisdiction</strong></p>
              <p>For disputes with merchants, legal entities under public law, or special funds under public law, the exclusive place of jurisdiction is Kassel, Germany.</p>
              
              <p><strong>6.3 Contact</strong></p>
              <p>For questions about these terms, please contact us at{' '}
                <a href="mailto:support@mousewerk.de" className={styles.contactEmail}>
                  support@mousewerk.de
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
