import { cookies } from 'next/headers';
import BookingsList from './BookingsList';
import styles from '../../styles/dashboard.module.css';

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin')?.value === 'true';

  if (!isAdmin) {
    return <div className={styles.unauthorized}>Unauthorized</div>;
  }

  return (
    <div className={styles.container}>
     
      <BookingsList />
    </div>
  );
}
