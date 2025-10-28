import React, { useState } from 'react';

const Login = ({ onNavigateToSignup, onNavigateToUserDashboard, onNavigateToContractorDashboard }) => {
  const [userType, setUserType] = useState('user');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { userType, phone, password });
    
    // Simulate successful login for different user types
    if (userType === 'user') {
      const userData = { userType, phone, name: 'John Doe' };
      onNavigateToUserDashboard(userData);
    } else if (userType === 'contractor') {
      const userData = { userType, phone, name: 'ABC Construction' };
      onNavigateToContractorDashboard(userData);
    } else {
      alert('Login successful! (Worker dashboard not implemented yet)');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
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
        width: '100%',
        transform: 'translateY(0)',
        transition: 'all 0.3s ease'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2d3436',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>Welcome Back</h2>
      
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '12px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Select Account Type:</label>
          <div style={{
            display: 'flex',
            gap: '15px',
            marginTop: '10px',
            justifyContent: 'center'
          }}>
            {['user', 'worker', 'contractor'].map((type) => (
              <label key={type} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 15px',
                borderRadius: '25px',
                border: `2px solid ${userType === type ? '#74b9ff' : '#ddd'}`,
                background: userType === type ? '#74b9ff' : 'white',
                color: userType === type ? 'white' : '#2d3436',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                textTransform: 'capitalize'
              }}>>
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

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '16px',
              transition: 'border-color 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#74b9ff'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '16px',
              transition: 'border-color 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#74b9ff'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(116, 185, 255, 0.4)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(116, 185, 255, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(116, 185, 255, 0.4)';
          }}
        >
          Login
        </button>
      </form>

        <div style={{ textAlign: 'center', marginTop: '25px' }}>
          <p style={{ color: '#636e72', marginBottom: '15px' }}>Don't have an account?</p>
          <button
            onClick={onNavigateToSignup}
            style={{
              padding: '12px 25px',
              background: 'transparent',
              color: '#74b9ff',
              border: '2px solid #74b9ff',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#74b9ff';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#74b9ff';
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;