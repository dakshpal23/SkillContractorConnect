import React, { useState } from 'react';
import Home from './Home';
import Book from './Book';
import MyBookings from './MyBookings';
import History from './History';

const UserNavigation = ({ userData, onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'book', label: 'Book', icon: '📅' },
    { id: 'mybookings', label: 'My Bookings', icon: '📋' },
    { id: 'history', label: 'History', icon: '📜' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home userData={userData} />;
      case 'book': return <Book userData={userData} />;
      case 'mybookings': return <MyBookings userData={userData} />;
      case 'history': return <History userData={userData} />;
      default: return <Home userData={userData} />;
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f8f9fa'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
        color: 'white',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '20px' }}>WorkConnect</h1>
        <button
          onClick={onLogout}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '20px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </header>

      {/* Content */}
      <main style={{ flex: 1, overflow: 'auto' }}>
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav style={{
        background: 'white',
        borderTop: '1px solid #e9ecef',
        display: 'flex',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '12px 8px',
              border: 'none',
              background: activeTab === tab.id ? '#74b9ff' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#6c757d',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal'
            }}
          >
            <span style={{ fontSize: '20px' }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default UserNavigation;