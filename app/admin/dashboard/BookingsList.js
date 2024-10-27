'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from '../../../styles/dashboard.module.css';

// Debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export default function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/admin/fetch-bookings');
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      setBookings(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const updateBooking = async (id, updateData) => {
    if (!id) {
      console.error('Booking ID is undefined');
      return;
    }
    try {
      const response = await fetch(`/api/admin/update-booking/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
      if (!response.ok) {
        throw new Error('Failed to update booking');
      }
      // Refresh the bookings list after successful update
      fetchBookings();
    } catch (err) {
      console.error('Error updating booking:', err);
      // You might want to show an error message to the user here
    }
  };

  const changeStatus = (id, newStatus) => {
    updateBooking(id, { status: newStatus });
  };

  // Debounced update notes function
  const debouncedUpdateNotes = useCallback(
    debounce((id, newNotes) => {
      updateBooking(id, { notes: newNotes });
    }, 500),
    []
  );

  const handleNotesChange = (id, newNotes) => {
    // Update local state immediately for responsiveness
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, notes: newNotes } : booking
      )
    );
    // Debounce the API call
    debouncedUpdateNotes(id, newNotes);
  };

  const openEmail = (email) => {
    window.open(`mailto:${email}`, '_blank');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Project Type</th>
                <th>Budget</th>
                <th>Timeline</th>
                <th>Description</th>
                <th>Status</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.projectType}</td>
                  <td>{booking.budget}</td>
                  <td>{booking.timeline}</td>
                  <td>{booking.description}</td>
                  <td>
                    <select 
                      value={booking.status || 'pending'} 
                      onChange={(e) => changeStatus(booking.id, e.target.value)}
                      className={styles.statusSelect}
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <textarea
                      value={booking.notes || ''}
                      onChange={(e) => handleNotesChange(booking.id, e.target.value)}
                      onBlur={(e) => updateBooking(booking.id, { notes: e.target.value })}
                      className={styles.notesTextarea}
                    />
                  </td>
                  <td>
                    <button 
                      onClick={() => openEmail(booking.email)}
                      className={styles.actionButton}
                    >
                      Email
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
