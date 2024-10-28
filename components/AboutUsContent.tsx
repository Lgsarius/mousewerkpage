import Image from "next/image";
import styles from "@/styles/AboutUsContent.module.css";
import { FaMoneyBillWave, FaHeadset, FaRocket, FaPuzzlePiece, FaLaptopCode, FaUsers } from "react-icons/fa";
import Link from "next/link";

export default function AboutUsContent() {
  const features = [
    { icon: <FaMoneyBillWave className={styles.icon} />, text: "Wettbewerbsfähige Preise" },
    { icon: <FaHeadset className={styles.icon} />, text: "24/7 Support" },
    { icon: <FaRocket className={styles.icon} />, text: "Schnelle Entwicklung" },
    { icon: <FaPuzzlePiece className={styles.icon} />, text: "Maßgeschneiderte Lösungen" },
    { icon: <FaLaptopCode className={styles.icon} />, text: "Modernste Technologie" },
    { icon: <FaUsers className={styles.icon} />, text: "Nutzerorientiertes Design" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image
            src="/logo_trans.png"
            alt="Mousewerk Logo"
            width={150}
            height={150}
            className={styles.logo}
          />
        </div>
        <h1 className={styles.title}>Über Mousewerk</h1>
        <p className={styles.subtitle}>Digitale Exzellenz gestalten</p>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          Bei Mousewerk sind wir leidenschaftlich daran interessiert, maßgeschneiderte Weblösungen zu entwickeln, die perfekt zur Vision unserer Kunden passen. Unser Team aus erfahrenen Entwicklern und Designern arbeitet unermüdlich daran, Ihre Ideen zum Leben zu erwecken.
        </p>

        <div className={styles.features}>
          <h2 className={styles.featuresTitle}>Warum uns wählen?</h2>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/request" className={styles.ctaButton}>
            Kontaktieren Sie uns
          </Link>
        </div>
      </div>
    </div>
  );
}
