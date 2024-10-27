"use client";
import { useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
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
          <h1 className={styles.title}>Welcome to Mousewerk</h1>
          <p className={styles.description}>Creating innovative web solutions that transform ideas into digital realities</p>
          <Link href="#projects" className={styles.ctaButton}>
            Explore Our Projects
          </Link>
        </section>
        <ProjectOverview />
      </main>
      <Footer />
    </div>
  );
}
