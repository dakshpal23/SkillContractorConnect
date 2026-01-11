import React, { useState } from 'react';

const WorkerProfile = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: userData.name || 'John Doe',
    phone: userData.phone || '+91 98765 43210',
    email: 'johndoe@example.com',
    skill: 'Electrician',
    experience: '8 years',
    dailyRate: 2400,
    services: ['AC Repair', 'LED Installation', 'TV Installation', 'Washing Machine Repair', 'Wiring Work'],
    certifications: ['Licensed Electrician', 'Safety Certified'],
    languages: ['English', 'Hindi'],
    description: 'Experienced electrician specializing in home and commercial electrical work. I also provide emergency repair services 24/7, solar panel installation, and smart home automation setup. Quality work guaranteed with 1-year warranty on all installations.',
    availability: 'Available Mon-Sat, 9 AM - 6 PM'
  });

  const stats = {
    rating: 4.8,
    completedJobs: 234,
    totalEarnings: 562000,
    responseTime: '< 2 hours'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#2d3436' }}>My Profile</h2>

      {/* Profile Header */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6c5ce7, #5f4fcf)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            margin: '0 auto 15px'
          }}>
            {profile.name.charAt(0)}
          </div>
          <h3 style={{ margin: '0 0 5px 0', color: '#2d3436', fontSize: '24px' }}>{profile.name}</h3>
          <p style={{ margin: '0 0 10px 0', color: '#636e72', fontSize: '16px' }}>{profile.skill}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <span style={{ color: '#fdcb6e', fontSize: '20px' }}>⭐</span>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2d3436' }}>{stats.rating}</span>
            <span style={{ color: '#636e72', fontSize: '14px' }}>({stats.completedJobs} jobs)</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '15px',
          marginBottom: '20px'
        }}>
          <div style={{ textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#00b894' }}>₹{(stats.totalEarnings / 1000).toFixed(0)}K</div>
            <div style={{ fontSize: '12px', color: '#636e72', marginTop: '5px' }}>Total Earned</div>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#74b9ff' }}>{stats.completedJobs}</div>
            <div style={{ fontSize: '12px', color: '#636e72', marginTop: '5px' }}>Jobs Done</div>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#6c5ce7' }}>{stats.responseTime}</div>
            <div style={{ fontSize: '12px', color: '#636e72', marginTop: '5px' }}>Response</div>
          </div>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          style={{
            width: '100%',
            padding: '12px',
            background: isEditing ? '#00b894' : 'linear-gradient(135deg, #74b9ff, #0984e3)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          {isEditing ? '✓ Save Profile' : '✏️ Edit Profile'}
        </button>
      </div>

      {/* Profile Details */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 20px 0', color: '#2d3436' }}>Profile Information</h3>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>Experience</label>
          {isEditing ? (
            <input
              type="text"
              value={profile.experience}
              onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          ) : (
            <p style={{ margin: 0, color: '#2d3436', fontWeight: '500' }}>{profile.experience}</p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>Daily Rate</label>
          {isEditing ? (
            <input
              type="number"
              value={profile.dailyRate}
              onChange={(e) => setProfile({ ...profile, dailyRate: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          ) : (
            <p style={{ margin: 0, color: '#2d3436', fontWeight: '500', fontSize: '18px' }}>₹{profile.dailyRate}/day</p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>Contact</label>
          <p style={{ margin: '0 0 5px 0', color: '#2d3436' }}>📞 {profile.phone}</p>
          <p style={{ margin: 0, color: '#2d3436' }}>✉️ {profile.email}</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>Services Provided</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {profile.services.map((service, index) => (
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

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>About & Additional Services</label>
          {isEditing ? (
            <textarea
              value={profile.description}
              onChange={(e) => setProfile({ ...profile, description: e.target.value })}
              rows="4"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif',
                resize: 'vertical'
              }}
            />
          ) : (
            <p style={{ 
              margin: 0, 
              color: '#2d3436', 
              lineHeight: '1.6',
              background: '#f8f9fa',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '14px'
            }}>
              {profile.description}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>Certifications</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {profile.certifications.map((cert, index) => (
              <span key={index} style={{
                background: '#e8f5e9',
                color: '#2e7d32',
                padding: '6px 12px',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: '500'
              }}>
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>Languages</label>
          <p style={{ margin: 0, color: '#2d3436' }}>{profile.languages.join(', ')}</p>
        </div>

        <div>
          <label style={{ display: 'block', color: '#636e72', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>Availability</label>
          {isEditing ? (
            <input
              type="text"
              value={profile.availability}
              onChange={(e) => setProfile({ ...profile, availability: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          ) : (
            <p style={{ margin: 0, color: '#2d3436' }}>{profile.availability}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
