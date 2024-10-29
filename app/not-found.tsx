'use client';

import Link from 'next/link';
import styles from '@/styles/NotFound.module.css';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src="/LOGO.png"
            alt="Mousewerk Logo"
            width={120}
            height={30}
            className={styles.logo}
          />
        </div>

        <div className={styles.glitchWrapper}>
          <h1 className={styles.title}>
            <span className={styles.glitch} data-text="404">404</span>
          </h1>
          <div className={styles.scanlines}></div>
        </div>

        <h2 className={styles.subtitle}>Seite nicht gefunden</h2>
        
        <p className={styles.description}>
          Die von Ihnen gesuchte Seite existiert nicht mehr oder wurde verschoben.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            <FaHome className={styles.buttonIcon} />
            Startseite
          </Link>
          <button 
            onClick={() => router.back()} 
            className={styles.secondaryButton}
          >
            <FaArrowLeft className={styles.buttonIcon} />
            Zurück
          </button>
        </div>
      </div>
    </div>
  );
} 