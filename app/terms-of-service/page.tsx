"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/TermsOfService.module.css';

export default function TermsOfService() {
  return (
    <div style={{ background: 'var(--background-dark)' }}>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Allgemeine Geschäftsbedingungen</h1>
          <p className={styles.subtitle}>Rechtliche Informationen & Nutzungsbedingungen</p>
        </div>
        
        <section className={styles.termsSection}>
          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>1. Impressum</h2>
            <div className={styles.sectionContent}>
              <p><strong>Angaben gemäß § 5 TMG:</strong></p>
              <p>MouseWerk<br />
              Oberzwehrener Str. 62b<br />
              34132 Kassel<br />
              Deutschland</p>
              
              <p><strong>Vertreten durch:</strong><br />
              Maurice Kleindienst</p>
              
              <p><strong>Kontakt:</strong><br />
              E-Mail: support@mousewerk.de</p>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>2. Datenschutz (DSGVO)</h2>
            <div className={styles.sectionContent}>
              <p><strong>2.1 Verantwortlicher</strong></p>
              <p>Der Verantwortliche für diese Website ist MouseWerk [Kontaktdaten wie oben].</p>
              
              <p><strong>2.2 Ihre Rechte nach DSGVO</strong></p>
              <ul className={styles.bulletList}>
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              </ul>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>3. Nutzungsbedingungen</h2>
            <div className={styles.sectionContent}>
              <p><strong>3.1 Geltungsbereich</strong></p>
              <p>Diese Bedingungen regeln die Nutzung der Software und Dienstleistungen von MouseWerk. Mit der Nutzung unserer Dienste stimmen Sie diesen Bedingungen zu.</p>
              
              <p><strong>3.2 Lizenzbedingungen</strong></p>
              <p>Nutzer erhalten ein nicht-exklusives, nicht übertragbares Recht zur Nutzung der Software gemäß diesen Bedingungen.</p>
              
              <p><strong>3.3 Nutzerpflichten</strong></p>
              <p>Nutzer verpflichten sich:</p>
              <ul className={styles.bulletList}>
                <li>Die Software nur für legale Zwecke zu nutzen</li>
                <li>Die Vertraulichkeit ihrer Zugangsdaten zu wahren</li>
                <li>Keine Sicherheitsmaßnahmen zu umgehen</li>
                <li>Die Software nicht zurückzuentwickeln</li>
              </ul>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>4. Haftung und Gewährleistung</h2>
            <div className={styles.sectionContent}>
              <p><strong>4.1 Haftungsbeschränkung</strong></p>
              <p>MouseWerk haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.</p>
              
              <p><strong>4.2 Gewährleistung</strong></p>
              <p>Die Software wird "wie besehen" zur Verfügung gestellt. Wir übernehmen keine Gewähr für die Richtigkeit, Verfügbarkeit oder Eignung für einen bestimmten Zweck.</p>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>5. Zahlungsbedingungen</h2>
            <div className={styles.sectionContent}>
              <p><strong>5.1 Preise</strong></p>
              <p>Alle Preise verstehen sich in EUR inklusive der gesetzlichen Mehrwertsteuer.</p>
              
              <p><strong>5.2 Zahlungsabwicklung</strong></p>
              <p>Zahlungen werden sicher über unsere Zahlungsdienstleister gemäß PSD2-Anforderungen abgewickelt.</p>
            </div>
          </div>

          <div className={styles.termsCard}>
            <h2 className={styles.sectionTitle}>6. Schlussbestimmungen</h2>
            <div className={styles.sectionContent}>
              <p><strong>6.1 Geltendes Recht</strong></p>
              <p>Es gilt deutsches Recht. Das UN-Kaufrecht (CISG) wird ausgeschlossen.</p>
              
              <p><strong>6.2 Gerichtsstand</strong></p>
              <p>Bei Streitigkeiten mit Kaufleuten, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen ist der ausschließliche Gerichtsstand Kassel.</p>
              
              <p><strong>6.3 Kontakt</strong></p>
              <p>Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte unter{' '}
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
