import styles from '@/styles/CategoryTag.module.css';
import { FaTag } from 'react-icons/fa';

interface CategoryTagProps {
  category: string;
  variant?: 'default' | 'featured';
}

export default function CategoryTag({ category, variant = 'default' }: CategoryTagProps) {
  return (
    <div className={`${styles.category} ${variant === 'featured' ? styles.featured : ''}`}>
      <FaTag className={styles.icon} />
      <span>{category}</span>
    </div>
  );
} 