import styles from '@/styles/ServiceHero.module.css';
import { IconType } from 'react-icons';

interface ServiceHeroProps {
  title: string;
  description: string;
  Icon: IconType;
}

export default function ServiceHero({ title, description, Icon }: ServiceHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.heroIcon} />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
} 