import React, { useState } from 'react';

const AccountCreation = ({ onNavigateToLogin, onNavigateToUserCreation, onNavigateToWorkerCreation, onNavigateToContractorCreation }) => {
  const [userType, setUserType] = useState('user');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const userData = { userType, ...formData };
    
    if (userType === 'user') {
      onNavigateToUserCreation(userData);
    } else if (userType === 'worker') {
      onNavigateToWorkerCreation(userData);
    } else if (userType === 'contractor') {
      onNavigateToContractorCreation(userData);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
        maxWidth: '450px',
        width: '100%'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2d3436',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>Create Account</h2>
      
      <form onSubmit={handleNext}>
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '12px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Account Type:</label>
          <div style={{
            display: 'flex',
            gap: '10px',
            marginTop: '10px',
            justifyContent: 'center'
          }}>
            {['user', 'worker', 'contractor'].map((type) => (
              <label key={type} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '20px',
                border: `2px solid ${userType === type ? '#a29bfe' : '#ddd'}`,
                background: userType === type ? '#a29bfe' : 'white',
                color: userType === type ? 'white' : '#2d3436',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                textTransform: 'capitalize',
                fontSize: '12px'
              }}>
                <input
                  type="radio"
                  value={type}
                  checked={userType === type}
                  onChange={(e) => setUserType(e.target.value)}
                  style={{ display: 'none' }}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {[
          { name: 'name', type: 'text', placeholder: 'Enter full name', label: 'Full Name' },
          { name: 'phone', type: 'tel', placeholder: 'Enter phone number', label: 'Phone Number' },
          { name: 'password', type: 'password', placeholder: 'Create new password', label: 'Create New Password' },
          { name: 'confirmPassword', type: 'password', placeholder: 'Confirm new password', label: 'Confirm New Password' }
        ].map((field) => (
          <div key={field.name} style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              placeholder={field.placeholder}
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '10px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#a29bfe'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
              required
            />
          </div>
        ))}

        <button
          onClick={handleNext}
          style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(162, 155, 254, 0.4)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(162, 155, 254, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(162, 155, 254, 0.4)';
          }}
        >
          Next
        </button>
      </form>

        <div style={{ textAlign: 'center', marginTop: '25px' }}>
          <p style={{ color: '#636e72', marginBottom: '15px' }}>Already have an account?</p>
          <button
            onClick={onNavigateToLogin}
            style={{
              padding: '12px 25px',
              background: 'transparent',
              color: '#a29bfe',
              border: '2px solid #a29bfe',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#a29bfe';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#a29bfe';
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreation;