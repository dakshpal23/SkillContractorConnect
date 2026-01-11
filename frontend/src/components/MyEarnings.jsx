import React, { useState } from 'react';

const MyEarnings = ({ userData }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const earningsData = {
    today: 4800,
    week: 16800,
    month: 68400,
    total: 562000
  };

  const transactions = [
    {
      id: 1,
      type: 'completed',
      client: 'Raj Kumar',
      service: 'AC Repair',
      amount: 2400,
      date: '2024-01-15',
      status: 'paid'
    },
    {
      id: 2,
      type: 'completed',
      client: 'Priya Sharma',
      service: 'Wiring Work',
      amount: 3000,
      date: '2024-01-14',
      status: 'paid'
    },
    {
      id: 3,
      type: 'completed',
      client: 'Amit Patel',
      service: 'LED Installation',
      amount: 1500,
      date: '2024-01-13',
      status: 'paid'
    },
    {
      id: 4,
      type: 'pending',
      client: 'Sunita Reddy',
      service: 'Washing Machine Repair',
      amount: 2000,
      date: '2024-01-12',
      status: 'pending'
    },
    {
      id: 5,
      type: 'completed',
      client: 'Vikram Singh',
      service: 'TV Installation',
      amount: 1800,
      date: '2024-01-11',
      status: 'paid'
    },
    {
      id: 6,
      type: 'completed',
      client: 'Meera Desai',
      service: 'Switch Installation',
      amount: 1200,
      date: '2024-01-10',
      status: 'paid'
    }
  ];

  const periods = [
    { id: 'today', label: 'Today', amount: earningsData.today },
    { id: 'week', label: 'This Week', amount: earningsData.week },
    { id: 'month', label: 'This Month', amount: earningsData.month },
    { id: 'total', label: 'All Time', amount: earningsData.total }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#2d3436' }}>My Earnings</h2>

      {/* Period Selector */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        overflowX: 'auto',
        paddingBottom: '10px'
      }}>
        {periods.map(period => (
          <button
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
            style={{
              padding: '15px 20px',
              background: selectedPeriod === period.id 
                ? 'linear-gradient(135deg, #00b894, #00a085)' 
                : 'white',
              color: selectedPeriod === period.id ? 'white' : '#2d3436',
              border: `2px solid ${selectedPeriod === period.id ? '#00b894' : '#ddd'}`,
              borderRadius: '12px',
              cursor: 'pointer',
              minWidth: '120px',
              textAlign: 'center',
              boxShadow: selectedPeriod === period.id ? '0 4px 15px rgba(0, 184, 148, 0.3)' : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ fontSize: '12px', marginBottom: '5px', opacity: 0.8 }}>
              {period.label}
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              ₹{period.amount.toLocaleString()}
            </div>
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px',
        marginBottom: '25px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #00b894, #00a085)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0, 184, 148, 0.3)'
        }}>
          <div style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.9 }}>Completed Jobs</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>234</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #fdcb6e, #f39c12)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(253, 203, 110, 0.3)'
        }}>
          <div style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.9 }}>Pending Amount</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>₹2,000</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(116, 185, 255, 0.3)'
        }}>
          <div style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.9 }}>Avg. Per Job</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>₹2,400</div>
        </div>
      </div>

      {/* Transactions List */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 20px 0', color: '#2d3436' }}>Recent Transactions</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                background: '#f8f9fa',
                borderRadius: '10px',
                borderLeft: `4px solid ${transaction.status === 'paid' ? '#00b894' : '#fdcb6e'}`
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#2d3436', marginBottom: '4px' }}>
                  {transaction.service}
                </div>
                <div style={{ fontSize: '14px', color: '#636e72' }}>
                  Client: {transaction.client}
                </div>
                <div style={{ fontSize: '12px', color: '#636e72', marginTop: '4px' }}>
                  {new Date(transaction.date).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: transaction.status === 'paid' ? '#00b894' : '#fdcb6e',
                  marginBottom: '4px'
                }}>
                  ₹{transaction.amount}
                </div>
                <span style={{
                  background: transaction.status === 'paid' ? '#e8f5e9' : '#fff3e0',
                  color: transaction.status === 'paid' ? '#2e7d32' : '#f57c00',
                  padding: '3px 8px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{
        marginTop: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px'
      }}>
        <button style={{
          padding: '15px',
          background: 'linear-gradient(135deg, #00b894, #00a085)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          Withdraw Earnings
        </button>
        <button style={{
          padding: '15px',
          background: 'white',
          color: '#74b9ff',
          border: '2px solid #74b9ff',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          View All History
        </button>
      </div>
    </div>
  );
};

export default MyEarnings;
