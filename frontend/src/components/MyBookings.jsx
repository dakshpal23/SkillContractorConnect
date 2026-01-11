import React, { useState } from 'react';

const MyBookings = ({ userData }) => {
  const [viewingProfile, setViewingProfile] = useState(null);
  
  const bookings = [
    {
      id: 1,
      service: 'Electrician',
      worker: 'John Doe',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'confirmed',
      address: '123 Main St',
      workerProfile: {
        name: 'John Doe',
        skill: 'Electrician',
        experience: '8 years',
        rating: 4.8,
        completedJobs: 234,
        dailyRate: 2400,
        phone: '+91 98765 43210',
        email: 'john.doe@example.com',
        certifications: ['Licensed Electrician', 'Safety Certified'],
        languages: ['English', 'Hindi'],
        services: ['AC Repair', 'LED Installation', 'TV Installation', 'Washing Machine Repair', 'Wiring Work'],
        description: 'Experienced electrician specializing in home and commercial electrical work. I also provide emergency repair services 24/7, solar panel installation, and smart home automation setup. Quality work guaranteed with 1-year warranty on all installations.'
      }
    },
    {
      id: 2,
      service: 'Plumber',
      worker: 'Mike Smith',
      date: '2024-01-18',
      time: '2:00 PM',
      status: 'pending',
      address: '456 Oak Ave',
      workerProfile: {
        name: 'Mike Smith',
        skill: 'Plumber',
        experience: '5 years',
        rating: 4.6,
        completedJobs: 156,
        dailyRate: 2000,
        phone: '+91 98765 43211',
        email: 'mike.smith@example.com',
        certifications: ['Plumbing License'],
        languages: ['English'],
        services: ['Pipe Repair', 'Tap Installation', 'Bathroom Fitting', 'Drain Cleaning', 'Water Tank Installation'],
        description: 'Professional plumber with expertise in residential and commercial plumbing. I also offer water heater installation and repair, sewage line maintenance, and water filtration system setup. Fast response time and competitive pricing.'
      }
    },
    {
      id: 3,
      service: 'Carpenter',
      worker: 'Sarah Johnson',
      date: '2024-01-20',
      time: '9:00 AM',
      status: 'in-progress',
      address: '789 Pine Rd',
      workerProfile: {
        name: 'Sarah Johnson',
        skill: 'Carpenter',
        experience: '10 years',
        rating: 4.9,
        completedJobs: 412,
        dailyRate: 2800,
        phone: '+91 98765 43212',
        email: 'sarah.j@example.com',
        certifications: ['Master Carpenter', 'Wood Specialist'],
        languages: ['English', 'Hindi', 'Tamil'],
        services: ['Furniture Making', 'Door Installation', 'Window Repair', 'Cabinet Making', 'Flooring Work'],
        description: 'Master carpenter specializing in custom furniture and woodwork. I also create bespoke kitchen cabinets, outdoor decking, wooden staircases, and provide furniture restoration services. Using premium quality wood and modern techniques for lasting results.'
      }
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
              
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setViewingProfile(booking.workerProfile)}
                  style={{
                    padding: '8px 16px',
                    background: 'linear-gradient(135deg, #6c5ce7, #5f4fcf)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  View Profile
                </button>
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
      
      {/* Worker Profile Modal */}
      {viewingProfile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setViewingProfile(null)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, color: '#2d3436' }}>Worker Profile</h2>
              <button
                onClick={() => setViewingProfile(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#636e72',
                  padding: '0',
                  lineHeight: '1'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6c5ce7, #5f4fcf)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
                margin: '0 auto 10px'
              }}>
                {viewingProfile.name.charAt(0)}
              </div>
              <h3 style={{ margin: '0 0 5px 0', color: '#2d3436' }}>{viewingProfile.name}</h3>
              <p style={{ margin: '0 0 10px 0', color: '#636e72', fontSize: '16px' }}>{viewingProfile.skill}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <span style={{ color: '#fdcb6e', fontSize: '18px' }}>⭐</span>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2d3436' }}>{viewingProfile.rating}</span>
                <span style={{ color: '#636e72', fontSize: '14px' }}>({viewingProfile.completedJobs} jobs)</span>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px' }}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '4px' }}>Experience</label>
                <p style={{ margin: 0, color: '#2d3436', fontWeight: '500' }}>{viewingProfile.experience}</p>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '4px' }}>Daily Rate</label>
                <p style={{ margin: 0, color: '#2d3436', fontWeight: '500', fontSize: '18px' }}>₹{viewingProfile.dailyRate}/day</p>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '4px' }}>Contact</label>
                <p style={{ margin: 0, color: '#2d3436' }}>✉️ {viewingProfile.email}</p>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px' }}>Services Provided</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {viewingProfile.services.map((service, index) => (
                    <span key={index} style={{
                      background: '#e3f2fd',
                      color: '#1976d2',
                      padding: '6px 12px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px' }}>About & Additional Services</label>
                <p style={{ 
                  margin: 0, 
                  color: '#2d3436', 
                  lineHeight: '1.6',
                  background: '#f8f9fa',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}>
                  {viewingProfile.description}
                </p>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px' }}>Certifications</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {viewingProfile.certifications.map((cert, index) => (
                    <span key={index} style={{
                      background: '#e8f5e9',
                      color: '#2e7d32',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px' }}>Languages</label>
                <p style={{ margin: 0, color: '#2d3436' }}>{viewingProfile.languages.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;