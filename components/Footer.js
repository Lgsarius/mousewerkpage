// components/Footer.js

import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';

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
                            Innovative Webdesign-Lösungen für Ihren digitalen Erfolg. Wir gestalten die Zukunft Ihrer Online-Präsenz.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Anfrage stellen <FaArrowRight className={styles.arrowIcon} />
                        </Link>
                    </div>

                    <div className={styles.linksSection}>
                        <div className={styles.navSection}>
                            <h3>Navigation</h3>
                            <ul>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/portfolio">Portfolio</Link></li>
                                <li><Link href="/about">Über uns</Link></li>
                                <li><Link href="/contact">Kontakt</Link></li>
                            </ul>
                        </div>

                        <div className={styles.navSection}>
                            <h3>Services</h3>
                            <ul>
                                <li><Link href="/webdesign">Webdesign</Link></li>
                                <li><Link href="/development">Entwicklung</Link></li>
                                <li><Link href="/seo">SEO</Link></li>
                                <li><Link href="/hosting">Hosting</Link></li>
                            </ul>
                        </div>

                        <div className={styles.navSection}>
                            <h3>Rechtliches</h3>
                            <ul>
                                <li><Link href="/privacy">Datenschutz</Link></li>
                                <li><Link href="/imprint">Impressum</Link></li>
                                <li><Link href="/terms">AGB</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.instagram.com/mousewerk.de/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaInstagram />
                        </Link>
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
