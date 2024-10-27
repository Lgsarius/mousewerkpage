"use client";
import { useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import Link from 'next/link';
import { BiCode, BiPalette } from 'react-icons/bi';
import { IoRocketOutline } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Add float delay to hero content elements
    const heroElements = document.querySelectorAll(`.${styles.heroContent} > *`);
    heroElements.forEach((el, index) => {
      (el as HTMLElement).style.setProperty('--float-delay', String(index * 0.2));
    });

    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
           
            <h1 className={styles.title}>
              Transform Your Digital Vision Into Reality
            </h1>
            <p className={styles.description}>
              We craft exceptional web experiences that drive results. From stunning designs 
              to powerful functionality, we&apos;re your partner in digital excellence.
            </p>
            <div className={styles.ctaContainer}>
              <Link href="#projects" className={styles.ctaButton}>
                View Our Work <BsArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="/request" className={`${styles.ctaButton} ${styles.ctaSecondary}`}>
                Let&apos;s Talk <BsArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <BiCode className={styles.featureIcon} />
                Custom Web Development
              </li>
              <li className={styles.featureItem}>
                <BiPalette className={styles.featureIcon} />
                Modern UI/UX Design
              </li>
              <li className={styles.featureItem}>
                <IoRocketOutline className={styles.featureIcon} />
                Performance Optimization
              </li>
            </ul>
          </div>
        </section>
        <ProjectOverview />
      </main>
      <Footer />
    </div>
  );
}
