import React, { useState } from 'react';

const History = ({ userData }) => {
  const [filter, setFilter] = useState('all');
  
  const historyData = [
    {
      id: 1,
      service: 'Electrician',
      worker: 'John Doe',
      bookingDate: '2024-01-10',
      workStartTime: '2024-01-10 10:00 AM',
      workEndTime: '2024-01-10 02:30 PM',
      status: 'completed',
      rating: 5,
      hourlyRate: 250,
      hoursWorked: 4.5,
      totalCost: 1125,
      transactionId: 'TXN001234',
      paymentMethod: 'UPI'
    },
    {
      id: 2,
      service: 'Plumber',
      worker: 'Mike Smith',
      bookingDate: '2024-01-05',
      workStartTime: '2024-01-05 02:00 PM',
      workEndTime: '2024-01-05 05:15 PM',
      status: 'completed',
      rating: 4,
      hourlyRate: 200,
      hoursWorked: 3.25,
      totalCost: 650,
      transactionId: 'TXN001235',
      paymentMethod: 'Card'
    },
    {
      id: 3,
      service: 'Carpenter',
      worker: 'Sarah Johnson',
      bookingDate: '2023-12-28',
      workStartTime: null,
      workEndTime: null,
      status: 'cancelled',
      rating: null,
      hourlyRate: 300,
      hoursWorked: 0,
      totalCost: 0,
      transactionId: null,
      paymentMethod: null
    },
    {
      id: 4,
      service: 'Welder',
      worker: 'Tom Wilson',
      bookingDate: '2023-12-20',
      workStartTime: '2023-12-20 09:00 AM',
      workEndTime: '2023-12-20 01:00 PM',
      status: 'completed',
      rating: 5,
      hourlyRate: 350,
      hoursWorked: 4,
      totalCost: 1400,
      transactionId: 'TXN001236',
      paymentMethod: 'UPI'
    },
    {
      id: 5,
      service: 'Construction Worker',
      worker: 'Alex Brown',
      bookingDate: '2023-12-15',
      workStartTime: '2023-12-15 08:00 AM',
      workEndTime: '2023-12-15 06:00 PM',
      status: 'completed',
      rating: 4,
      hourlyRate: 180,
      hoursWorked: 10,
      totalCost: 1800,
      transactionId: 'TXN001237',
      paymentMethod: 'Cash'
    }
  ];

  const filteredHistory = filter === 'all' 
    ? historyData 
    : historyData.filter(item => item.status === filter);

  const renderStars = (rating) => {
    if (!rating) return 'Not rated';
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: 0, color: '#2d3436' }}>History</h2>
        
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '2px solid #ddd',
            borderRadius: '6px',
            fontSize: '14px'
          }}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {filteredHistory.length === 0 ? (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>📜</div>
          <h3 style={{ color: '#636e72', margin: '0 0 10px 0' }}>No history found</h3>
          <p style={{ color: '#636e72', margin: 0 }}>Complete some bookings to see your history</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {filteredHistory.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `4px solid ${item.status === 'completed' ? '#00b894' : '#e17055'}`
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#2d3436' }}>{item.service}</h3>
                  <p style={{ margin: '0 0 5px 0', color: '#636e72' }}>Worker: {item.worker}</p>
                  <p style={{ margin: 0, color: '#636e72', fontSize: '14px' }}>Booked: {item.bookingDate}</p>
                </div>
                <span style={{
                  background: item.status === 'completed' ? '#00b894' : '#e17055',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize'
                }}>
                  {item.status}
                </span>
              </div>
              
              {item.status === 'completed' && (
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '15px'
                }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#2d3436', fontSize: '16px' }}>Work Timeline</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                    <div>
                      <strong style={{ color: '#2d3436', fontSize: '14px' }}>Start Time:</strong>
                      <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '14px' }}>{item.workStartTime}</p>
                    </div>
                    <div>
                      <strong style={{ color: '#2d3436', fontSize: '14px' }}>End Time:</strong>
                      <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '14px' }}>{item.workEndTime}</p>
                    </div>
                  </div>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Total Hours Worked:</strong>
                    <span style={{ marginLeft: '8px', color: '#00b894', fontWeight: 'bold' }}>{item.hoursWorked} hours</span>
                  </div>
                </div>
              )}
              
              <div style={{
                background: '#e8f4fd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px'
              }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#2d3436', fontSize: '16px' }}>Transaction Details</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Hourly Rate:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '14px' }}>₹{item.hourlyRate}/hr</p>
                  </div>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Total Cost:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#00b894', fontWeight: 'bold', fontSize: '16px' }}>
                      {item.totalCost > 0 ? `₹${item.totalCost}` : 'N/A'}
                    </p>
                  </div>
                  {item.transactionId && (
                    <div>
                      <strong style={{ color: '#2d3436', fontSize: '14px' }}>Transaction ID:</strong>
                      <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '12px' }}>{item.transactionId}</p>
                    </div>
                  )}
                  {item.paymentMethod && (
                    <div>
                      <strong style={{ color: '#2d3436', fontSize: '14px' }}>Payment:</strong>
                      <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '14px' }}>{item.paymentMethod}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '15px',
                alignItems: 'center'
              }}>
                <div>
                  <strong style={{ color: '#2d3436' }}>Rating:</strong>
                  <p style={{ margin: '2px 0 0 0', color: '#636e72' }}>
                    {renderStars(item.rating)}
                  </p>
                </div>
                {item.status === 'completed' && (
                  <button style={{
                    padding: '8px 16px',
                    background: '#74b9ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>
                    Book Again
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary Stats */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        marginTop: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#2d3436' }}>Summary</h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '15px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00b894' }}>
              {historyData.filter(item => item.status === 'completed').length}
            </div>
            <div style={{ fontSize: '12px', color: '#636e72' }}>Completed</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fdcb6e' }}>
              ₹{historyData.reduce((sum, item) => sum + item.totalCost, 0)}
            </div>
            <div style={{ fontSize: '12px', color: '#636e72' }}>Total Spent</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#74b9ff' }}>
              {historyData.length}
            </div>
            <div style={{ fontSize: '12px', color: '#636e72' }}>Total Bookings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;