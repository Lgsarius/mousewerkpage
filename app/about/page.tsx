"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsContent from "@/components/AboutUsContent";
import styles from "@/styles/Home.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.hero}`}>
        <AboutUsContent />
      </main>
      <Footer />
    </div>
  );
}
