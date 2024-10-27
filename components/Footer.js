// components/Footer.js

import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logo}>
                    <Link href="/">
                    <Image src="/logo_trans.png" alt="Mousewerk" width={100} height={100}/>
                    </Link>
                    <p>Creating Spaces with Mousewerk</p>
                    <button className={styles.signUpButton}> <Link href="/book">Book Us</Link></button>
                </div>
                <div className={styles.navSection}>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link href="https://lo-fi.study">Study App</Link></li>
                        <li><Link href="/aboutus">About Us</Link></li>
                        <li><Link href="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.navSection}>
                    <h3>Legal</h3>
                    <ul>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-service">Terms of Service</Link></li>
                    </ul>
                </div>
                <div className={styles.navSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.tiktok.com/@lofi.study.app?lang=en" target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/lo_fi.study/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                © 2024 Copyright Mousewerk.de. All rights reserved.
            </div>
        </footer>
    );
}
