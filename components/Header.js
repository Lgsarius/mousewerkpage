import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo_trans.png" alt="lo-fi.study" width={100} height={100} />
        </Link>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/contact" className={styles.navLink}>Kontakt</Link>
          <Link href="/about" className={styles.navLink}>Über uns</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/request" className={`${styles.navLink} ${styles.signInButton}`}>
            Anfrage
          </Link>
        </nav>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
