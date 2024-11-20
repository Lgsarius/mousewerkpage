// components/Footer.js

import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import { FaLinkedin, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                    <div className={styles.companySection}>
                        <Link href="/" className={styles.logoLink}>
                            <Image src="/logo_trans.png" alt="Mousewerk" width={120} height={120} className={styles.logoImage}/>
                        </Link>
                        <p className={styles.companyDesc}>
                            Professionelle CAD-Optimierung und Datenaufbereitung für die Industrie. 
                            Wir sind Ihr Spezialist für technische Datenverarbeitung.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Projekt anfragen <FaArrowRight className={styles.arrowIcon} />
                        </Link>
                    </div>

                    <div className={styles.linksSection}>
                        <div className={styles.navSection}>
                            <h3>Navigation</h3>
                            <ul>
                                <li><Link href="/projects">Projekte</Link></li>
                                <li><Link href="/about">Über uns</Link></li>
                                <li><Link href="/contact">Kontakt</Link></li>
                            </ul>
                        </div>

                        <div className={styles.navSection}>
                            <h3>Services</h3>
                            <ul>
                                <li><Link href="/services/cad-optimization">CAD-Optimierung</Link></li>
                                <li><Link href="/services/data-conversion">Datenkonvertierung</Link></li>
                                <li><Link href="/services/special-cases">Spezialfälle</Link></li>
                            </ul>
                        </div>

                        <div className={styles.navSection}>
                            <h3>Rechtliches</h3>
                            <ul>
                                <li><Link href="/privacy-policy">Datenschutz</Link></li>
                                <li><Link href="/imprint">Impressum</Link></li>
                                <li><Link href="/terms-of-service">AGB</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.linkedin.com/company/mousewerk/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaLinkedin />
                        </Link>
                    </div>
                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} Mousewerk. Alle Rechte vorbehalten.
                    </div>
                </div>
            </div>
        </footer>
    );
}
