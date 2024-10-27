import Image from "next/image";
import styles from "@/styles/AboutUsContent.module.css";
import { FaMoneyBillWave, FaHeadset, FaRocket, FaPuzzlePiece, FaLaptopCode, FaUsers } from "react-icons/fa";
import Link from "next/link";

export default function AboutUsContent() {
  const features = [
    { icon: <FaMoneyBillWave className={styles.icon} />, text: "Competitive Pricing" },
    { icon: <FaHeadset className={styles.icon} />, text: "24/7 Support" },
    { icon: <FaRocket className={styles.icon} />, text: "Rapid Development" },
    { icon: <FaPuzzlePiece className={styles.icon} />, text: "Tailored Solutions" },
    { icon: <FaLaptopCode className={styles.icon} />, text: "Cutting-edge Tech" },
    { icon: <FaUsers className={styles.icon} />, text: "User-Centric Design" },
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
        <h1 className={styles.title}>About Mousewerk</h1>
        <p className={styles.subtitle}>Crafting Digital Excellence</p>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          At Mousewerk, we&apos;re passionate about creating bespoke web solutions that perfectly fit our clients&apos; visions. Our team of skilled developers and designers work tirelessly to bring your ideas to life.
        </p>

        <div className={styles.features}>
          <h2 className={styles.featuresTitle}>Why Choose Us?</h2>
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
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
