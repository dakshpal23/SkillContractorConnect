import React from 'react';

const MyBookings = ({ userData }) => {
  const bookings = [
    {
      id: 1,
      service: 'Electrician',
      worker: 'John Doe',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'confirmed',
      address: '123 Main St'
    },
    {
      id: 2,
      service: 'Plumber',
      worker: 'Mike Smith',
      date: '2024-01-18',
      time: '2:00 PM',
      status: 'pending',
      address: '456 Oak Ave'
    },
    {
      id: 3,
      service: 'Carpenter',
      worker: 'Sarah Johnson',
      date: '2024-01-20',
      time: '9:00 AM',
      status: 'in-progress',
      address: '789 Pine Rd'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return '#00b894';
      case 'pending': return '#fdcb6e';
      case 'in-progress': return '#74b9ff';
      case 'completed': return '#6c5ce7';
      case 'cancelled': return '#e17055';
      default: return '#636e72';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#2d3436' }}>My Bookings</h2>
      
      {bookings.length === 0 ? (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>📅</div>
          <h3 style={{ color: '#636e72', margin: '0 0 10px 0' }}>No bookings yet</h3>
          <p style={{ color: '#636e72', margin: 0 }}>Start by booking a service from the Book tab</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {bookings.map((booking) => (
            <div
              key={booking.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: `3px solid ${getStatusColor(booking.status)}20`
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#2d3436' }}>{booking.service}</h3>
                  <p style={{ margin: '0 0 5px 0', color: '#636e72' }}>Worker: {booking.worker}</p>
                </div>
                <span style={{
                  background: getStatusColor(booking.status),
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize'
                }}>
                  {booking.status.replace('-', ' ')}
                </span>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '10px',
                marginBottom: '15px'
              }}>
                <div>
                  <strong style={{ color: '#2d3436' }}>Date:</strong>
                  <p style={{ margin: '2px 0 0 0', color: '#636e72' }}>{booking.date}</p>
                </div>
                <div>
                  <strong style={{ color: '#2d3436' }}>Time:</strong>
                  <p style={{ margin: '2px 0 0 0', color: '#636e72' }}>{booking.time}</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#2d3436' }}>Address:</strong>
                <p style={{ margin: '2px 0 0 0', color: '#636e72' }}>{booking.address}</p>
              </div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{
                  padding: '8px 16px',
                  background: '#74b9ff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Contact Worker
                </button>
                <button style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: '#e17055',
                  border: '2px solid #e17055',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;