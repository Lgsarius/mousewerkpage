'use client';

import { useState, useEffect } from 'react';
import styles from '../../../styles/dashboard.module.css';
import toast from 'react-hot-toast';

export default function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/fetch-bookings');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBookings(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('Failed to load bookings. Please try again later.');
      toast.error('Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  const updateBooking = async (id, updateData) => {
    try {
      const response = await fetch(`/api/admin/update-booking/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      
      // Update local state
      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === id ? { ...booking, ...updateData } : booking
        )
      );

      toast.success('Booking updated successfully');
    } catch (error) {
      console.error('Error updating booking:', error);
      toast.error('Failed to update booking');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    await updateBooking(id, { status: newStatus });
  };

  const handleNotesChange = async (id, notes) => {
    await updateBooking(id, { notes });
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
        <p>Loading bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h3>Error</h3>
        <p>{error}</p>
        <button 
          onClick={fetchBookings}
          className={styles.retryButton}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!bookings?.length) {
    return (
      <div className={styles.emptyContainer}>
        <h3>No Bookings</h3>
        <p>There are no bookings to display at this time.</p>
      </div>
    );
  }

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
                  <td data-label="Name">{booking.name}</td>
                  <td data-label="Email">{booking.email}</td>
                  <td data-label="Project Type">{booking.projectType}</td>
                  <td data-label="Budget">{booking.budget}</td>
                  <td data-label="Timeline">{booking.timeline}</td>
                  <td data-label="Description">{booking.description}</td>
                  <td data-label="Status">
                    <select 
                      value={booking.status || 'pending'} 
                      onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                      className={`${styles.statusSelect} ${styles[`status${booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1)}`]}`}
                    >
                      <option value="pending">⏳ Pending</option>
                      <option value="in-progress">🔄 In Progress</option>
                      <option value="completed">✅ Completed</option>
                      <option value="cancelled">❌ Cancelled</option>
                    </select>
                  </td>
                  <td data-label="Notes">
                    <textarea
                      value={booking.notes || ''}
                      onChange={(e) => handleNotesChange(booking.id, e.target.value)}
                      className={styles.notesTextarea}
                      placeholder="Add notes..."
                    />
                  </td>
                  <td data-label="Actions">
                    <button 
                      onClick={() => window.location.href = `mailto:${booking.email}`}
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
