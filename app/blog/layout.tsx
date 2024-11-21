"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/BlogLayout.module.css';



export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 