import React, { useState } from 'react';
import PostJob from './PostJob';
import Hire from './Hire';
import BookedWorkers from './BookedWorkers';
import History from './History';

const ContractorNavigation = ({ userData, onLogout }) => {
  const [activeTab, setActiveTab] = useState('postjob');

  const tabs = [
    { id: 'postjob', label: 'Post Job', icon: '📝' },
    { id: 'hire', label: 'Hire', icon: '👥' },
    { id: 'bookedworkers', label: 'Booked Workers', icon: '📋' },
    { id: 'history', label: 'History', icon: '📜' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'postjob': return <PostJob userData={userData} />;
      case 'hire': return <Hire userData={userData} />;
      case 'bookedworkers': return <BookedWorkers userData={userData} />;
      case 'history': return <History userData={userData} />;
      default: return <PostJob userData={userData} />;
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
        background: 'linear-gradient(135deg, #e17055, #d63031)',
        color: 'white',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '20px' }}>Contractor Dashboard</h1>
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
              background: activeTab === tab.id ? '#e17055' : 'transparent',
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

export default ContractorNavigation;