'use client';

import { useEffect } from 'react';
import styles from '../../../styles/dashboard.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <h2>Something went wrong!</h2>
      <button
        className={styles.retryButton}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
} 