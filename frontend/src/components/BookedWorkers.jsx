import React, { useState } from 'react';

const BookedWorkers = ({ userData }) => {
  const [filter, setFilter] = useState('all');
  
  const bookedWorkers = [
    {
      id: 1,
      workerName: 'John Smith',
      skill: 'Carpenter',
      jobTitle: 'Kitchen Renovation',
      startDate: '2024-01-15',
      endDate: '2024-01-18',
      status: 'in-progress',
      hourlyRate: 250,
      totalHours: 24,
      location: 'Mumbai',
      phone: '+91 98765 43210'
    },
    {
      id: 2,
      workerName: 'Mike Johnson',
      skill: 'Electrician',
      jobTitle: 'Office Wiring',
      startDate: '2024-01-20',
      endDate: '2024-01-22',
      status: 'scheduled',
      hourlyRate: 300,
      totalHours: 16,
      location: 'Mumbai',
      phone: '+91 98765 43211'
    },
    {
      id: 3,
      workerName: 'Tom Brown',
      skill: 'Welder',
      jobTitle: 'Gate Fabrication',
      startDate: '2024-01-10',
      endDate: '2024-01-12',
      status: 'completed',
      hourlyRate: 350,
      totalHours: 20,
      location: 'Mumbai',
      phone: '+91 98765 43212'
    },
    {
      id: 4,
      workerName: 'Sarah Wilson',
      skill: 'Plumber',
      jobTitle: 'Bathroom Renovation',
      startDate: '2024-01-08',
      endDate: '2024-01-10',
      status: 'cancelled',
      hourlyRate: 220,
      totalHours: 0,
      location: 'Delhi',
      phone: '+91 98765 43213'
    }
  ];

  const filteredWorkers = filter === 'all' 
    ? bookedWorkers 
    : bookedWorkers.filter(worker => worker.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return '#74b9ff';
      case 'in-progress': return '#fdcb6e';
      case 'completed': return '#00b894';
      case 'cancelled': return '#e17055';
      default: return '#636e72';
    }
  };

  const handleContactWorker = (worker) => {
    alert(`Calling ${worker.workerName} at ${worker.phone}`);
  };

  const handleCancelBooking = (worker) => {
    if (window.confirm(`Are you sure you want to cancel booking with ${worker.workerName}?`)) {
      alert('Booking cancelled successfully');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: 0, color: '#2d3436' }}>Booked Workers</h2>
        
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
          <option value="all">All Bookings</option>
          <option value="scheduled">Scheduled</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {filteredWorkers.length === 0 ? (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>👥</div>
          <h3 style={{ color: '#636e72', margin: '0 0 10px 0' }}>No bookings found</h3>
          <p style={{ color: '#636e72', margin: 0 }}>Start by hiring workers from the Hire tab</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {filteredWorkers.map((worker) => (
            <div
              key={worker.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `4px solid ${getStatusColor(worker.status)}`
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#2d3436' }}>{worker.workerName}</h3>
                  <p style={{ margin: '0 0 5px 0', color: '#636e72' }}>{worker.skill} • {worker.location}</p>
                  <p style={{ margin: 0, color: '#2d3436', fontWeight: '600' }}>{worker.jobTitle}</p>
                </div>
                <span style={{
                  background: getStatusColor(worker.status),
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize'
                }}>
                  {worker.status.replace('-', ' ')}
                </span>
              </div>
              
              <div style={{
                background: '#f8f9fa',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Start Date:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '14px' }}>{worker.startDate}</p>
                  </div>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>End Date:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '14px' }}>{worker.endDate}</p>
                  </div>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Rate:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#00b894', fontSize: '14px', fontWeight: 'bold' }}>₹{worker.hourlyRate}/hr</p>
                  </div>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Total Cost:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#00b894', fontSize: '16px', fontWeight: 'bold' }}>
                      ₹{worker.hourlyRate * worker.totalHours}
                    </p>
                  </div>
                </div>
                {worker.totalHours > 0 && (
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Hours:</strong>
                    <span style={{ marginLeft: '8px', color: '#636e72' }}>{worker.totalHours} hours</span>
                  </div>
                )}
              </div>
              
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleContactWorker(worker)}
                  style={{
                    padding: '8px 16px',
                    background: '#74b9ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  📞 Contact
                </button>
                
                {worker.status === 'scheduled' && (
                  <button
                    onClick={() => handleCancelBooking(worker)}
                    style={{
                      padding: '8px 16px',
                      background: 'transparent',
                      color: '#e17055',
                      border: '2px solid #e17055',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Cancel
                  </button>
                )}
                
                {worker.status === 'completed' && (
                  <button style={{
                    padding: '8px 16px',
                    background: '#00b894',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>
                    Hire Again
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
        <h4 style={{ margin: '0 0 15px 0', color: '#2d3436' }}>Booking Summary</h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '15px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#74b9ff' }}>
              {bookedWorkers.filter(w => w.status === 'scheduled').length}
            </div>
            <div style={{ fontSize: '12px', color: '#636e72' }}>Scheduled</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fdcb6e' }}>
              {bookedWorkers.filter(w => w.status === 'in-progress').length}
            </div>
            <div style={{ fontSize: '12px', color: '#636e72' }}>In Progress</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00b894' }}>
              {bookedWorkers.filter(w => w.status === 'completed').length}
            </div>
            <div style={{ fontSize: '12px', color: '#636e72' }}>Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedWorkers;