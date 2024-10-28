// components/Footer.js

import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
// import { FaTiktok, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/logo_trans.png" alt="Mousewerk" width={100} height={100}/>
                    </Link>
                    <p>Räume gestalten mit Mousewerk</p>
                    <button className={styles.signUpButton}>
                        <Link href="/book">Jetzt Buchen</Link>
                    </button>
                </div>
                <div className={styles.navSection}>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link href="https://lo-fi.study">Lern-App</Link></li>
                        <li><Link href="/about">Über uns</Link></li>
                        <li><Link href="/contact">Kontakt</Link></li>
                    </ul>
                </div>
                <div className={styles.navSection}>
                    <h3>Rechtliches</h3>
                    <ul>
                        <li><Link href="/privacy-policy">Datenschutzerklärung</Link></li>
                        <li><Link href="/terms-of-service">AGB</Link></li>
                    </ul>
                </div>
                {/* <div className={styles.navSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.tiktok.com/@lofi.study.app?lang=en" target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/lo_fi.study/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </Link>
                    </div>
                </div> */}
            </div>
            <div className={styles.copyright}>
                © 2024 Copyright Mousewerk.de. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
}
