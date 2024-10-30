import styles from '../../../styles/dashboard.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}></div>
      <p>Loading dashboard...</p>
    </div>
  );
} 