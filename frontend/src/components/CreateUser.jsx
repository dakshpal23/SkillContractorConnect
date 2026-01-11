import React, { useState } from 'react';

const CreateUser = ({ userData, onNavigateToLogin }) => {
  const [userDetails, setUserDetails] = useState({
    address: '',
    city: ''
  });

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeUserData = { ...userData, ...userDetails };
    console.log('User Account Created:', completeUserData);
    alert('User account created successfully!');
    onNavigateToLogin();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
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
        }}>Complete User Registration</h2>
      
      <form onSubmit={handleSubmit}>
        {[
          { name: 'address', type: 'text', placeholder: 'Enter address', label: 'Address' },
          { name: 'city', type: 'text', placeholder: 'Enter city', label: 'City' }
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
              value={userDetails[field.name]}
              onChange={handleInputChange}
              placeholder={field.placeholder}
              style={{
                width:'93%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '10px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                outline: 'none',
                
              }}
              onFocus={(e) => e.target.style.borderColor = '#fd79a8'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
              required
            />
          </div>
        ))}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(135deg, #fd79a8, #e84393)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(253, 121, 168, 0.4)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(253, 121, 168, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(253, 121, 168, 0.4)';
          }}
        >
          Create User Account
        </button>
      </form>
      </div>
    </div>
  );
};

export default CreateUser;