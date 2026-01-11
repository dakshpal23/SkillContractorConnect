import React from 'react';

const Home = ({ userData }) => {
  const services = [
    { name: 'Carpenter', icon: '🔨', available: 12 },
    { name: 'Electrician', icon: '⚡', available: 8 },
    { name: 'Plumber', icon: '🔧', available: 15 },
    { name: 'Welder', icon: '🔥', available: 6 },
    { name: 'Construction', icon: '🏗️', available: 20 },
    { name: 'Farm Worker', icon: '🌾', available: 10 },
    { name: 'AC Installation', icon: '🛠️', available: 17 },
    { name: 'Cleaning', icon: '🧹', available: 10 },

  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
        borderRadius: '15px',
        padding: '20px',
        color: 'white',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: '0 0 10px 0' }}>Welcome back!</h2>
        <p style={{ margin: 0, opacity: 0.9 }}>Find skilled workers for your projects</p>
      </div>

      <h3 style={{ marginBottom: '15px', color: '#2d3436' }}>Available Services</h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px'
      }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>{service.icon}</div>
            <h4 style={{ margin: '0 0 5px 0', color: '#2d3436' }}>{service.name}</h4>
            <p style={{ margin: 0, color: '#00b894', fontWeight: 'bold' }}>
              {service.available} available
            </p>
          </div>
        ))}
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        marginTop: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#2d3436' }}>Recent Activity</h4>
        <p style={{ color: '#636e72', margin: 0 }}>No recent bookings. Start by booking a service!</p>
      </div>
    </div>
  );
};

export default Home;