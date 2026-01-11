import React, { useState } from 'react';
import WorkerHome from './WorkerHome';
import FindJobs from './FindJobs';
import WorkerProfile from './WorkerProfile';
import MyEarnings from './MyEarnings';

const WorkerNavigation = ({ userData, onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'findjobs', label: 'Find Jobs', icon: '🔍' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'earnings', label: 'My Earnings', icon: '💰' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <WorkerHome userData={userData} />;
      case 'findjobs': return <FindJobs userData={userData} />;
      case 'profile': return <WorkerProfile userData={userData} />;
      case 'earnings': return <MyEarnings userData={userData} />;
      default: return <WorkerHome userData={userData} />;
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
        background: '#3d4f7d',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white'
          }}>S</div>
          <h1 style={{ 
            color: 'white', 
            margin: 0, 
            fontSize: '24px',
            fontWeight: '600'
          }}>SkillConnect</h1>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            👤
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        overflow: 'auto',
        paddingBottom: '80px'
      }}>
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        borderTop: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 16px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === tab.id ? '#74b9ff' : '#636e72',
              transition: 'all 0.3s ease',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal'
            }}
          >
            <span style={{ fontSize: '24px' }}>{tab.icon}</span>
            <span style={{ fontSize: '12px' }}>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default WorkerNavigation;
