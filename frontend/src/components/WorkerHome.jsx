import React from 'react';

const WorkerHome = ({ userData }) => {
  const stats = {
    activeJobs: 3,
    completedJobs: 47,
    totalEarnings: 125000,
    rating: 4.7
  };

  const recentActivity = [
    { id: 1, type: 'job_completed', client: 'Raj Kumar', service: 'AC Repair', amount: 2400, date: '2 hours ago' },
    { id: 2, type: 'new_job', client: 'Priya Sharma', service: 'Wiring Work', amount: 3000, date: '5 hours ago' },
    { id: 3, type: 'payment_received', amount: 2800, date: 'Yesterday' }
  ];

  const pendingJobs = [
    {
      id: 1,
      service: 'AC Repair',
      client: 'Amit Kumar',
      location: 'Sector 18, Noida',
      scheduledDate: '2024-01-16',
      scheduledTime: '10:00 AM - 2:00 PM',
      amount: 2400,
      status: 'accepted',
      description: 'Split AC not cooling properly'
    },
    {
      id: 2,
      service: 'LED Installation',
      client: 'Neha Singh',
      location: 'Lajpat Nagar, Delhi',
      scheduledDate: '2024-01-17',
      scheduledTime: '3:00 PM - 5:00 PM',
      amount: 1500,
      status: 'accepted',
      description: 'Install LED strips in bedroom'
    },
    {
      id: 3,
      service: 'Wiring Work',
      client: 'Rajesh Patel',
      location: 'Dwarka, Delhi',
      scheduledDate: '2024-01-18',
      scheduledTime: '9:00 AM - 5:00 PM',
      amount: 3000,
      status: 'in-progress',
      description: 'Complete house rewiring for 2BHK'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#2d3436' }}>
        Welcome back, {userData.name || 'Worker'}!
      </h2>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(116, 185, 255, 0.3)'
        }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{stats.activeJobs}</div>
          <div style={{ fontSize: '14px', marginTop: '5px' }}>Active Jobs</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #00b894, #00a085)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0, 184, 148, 0.3)'
        }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{stats.completedJobs}</div>
          <div style={{ fontSize: '14px', marginTop: '5px' }}>Completed</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #fdcb6e, #f39c12)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(253, 203, 110, 0.3)'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>₹{(stats.totalEarnings / 1000).toFixed(0)}K</div>
          <div style={{ fontSize: '14px', marginTop: '5px' }}>Total Earnings</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #6c5ce7, #5f4fcf)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)'
        }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>⭐ {stats.rating}</div>
          <div style={{ fontSize: '14px', marginTop: '5px' }}>Rating</div>
        </div>
      </div>

      {/* Pending Jobs Section */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0, color: '#2d3436' }}>Pending Jobs</h3>
          <span style={{
            background: '#74b9ff',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {pendingJobs.length} Jobs
          </span>
        </div>
        
        {pendingJobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '30px 0', color: '#636e72' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>📋</div>
            <p style={{ margin: 0 }}>No pending jobs at the moment</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {pendingJobs.map((job) => (
              <div
                key={job.id}
                style={{
                  padding: '15px',
                  background: '#f8f9fa',
                  borderRadius: '10px',
                  borderLeft: `4px solid ${job.status === 'in-progress' ? '#fdcb6e' : '#74b9ff'}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#2d3436', fontSize: '16px' }}>
                      {job.service}
                    </h4>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                      <span style={{
                        background: job.status === 'in-progress' ? '#fff3e0' : '#e3f2fd',
                        color: job.status === 'in-progress' ? '#f57c00' : '#1976d2',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {job.status === 'in-progress' ? '🔄 In Progress' : '✓ Accepted'}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#00b894'
                  }}>
                    ₹{job.amount}
                  </div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <p style={{ margin: '0 0 5px 0', color: '#636e72', fontSize: '14px' }}>
                    <strong style={{ color: '#2d3436' }}>Client:</strong> {job.client}
                  </p>
                  <p style={{ margin: '0 0 5px 0', color: '#636e72', fontSize: '14px' }}>
                    <strong style={{ color: '#2d3436' }}>Location:</strong> {job.location}
                  </p>
                  <p style={{ margin: '0 0 5px 0', color: '#636e72', fontSize: '14px' }}>
                    <strong style={{ color: '#2d3436' }}>Schedule:</strong> {job.scheduledDate} • {job.scheduledTime}
                  </p>
                  <p style={{ margin: '0', color: '#636e72', fontSize: '14px' }}>
                    {job.description}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{
                    flex: 1,
                    padding: '10px',
                    background: job.status === 'in-progress' ? 'linear-gradient(135deg, #00b894, #00a085)' : 'linear-gradient(135deg, #fdcb6e, #f39c12)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '13px'
                  }}>
                    {job.status === 'in-progress' ? 'Mark as Complete' : 'Start Job'}
                  </button>
                  <button style={{
                    padding: '10px 16px',
                    background: 'white',
                    color: '#74b9ff',
                    border: '2px solid #74b9ff',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '13px'
                  }}>
                    View Details
                  </button>
                  <button style={{
                    padding: '10px 16px',
                    background: 'white',
                    color: '#636e72',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}>
                    📞
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 20px 0', color: '#2d3436' }}>Recent Activity</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                background: '#f8f9fa',
                borderRadius: '10px',
                borderLeft: `4px solid ${
                  activity.type === 'job_completed' ? '#00b894' :
                  activity.type === 'new_job' ? '#74b9ff' : '#fdcb6e'
                }`
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#2d3436', marginBottom: '5px' }}>
                  {activity.type === 'job_completed' && `Job Completed - ${activity.service}`}
                  {activity.type === 'new_job' && `New Job Request - ${activity.service}`}
                  {activity.type === 'payment_received' && 'Payment Received'}
                </div>
                <div style={{ fontSize: '14px', color: '#636e72' }}>
                  {activity.client && `Client: ${activity.client} • `}
                  {activity.date}
                </div>
              </div>
              {activity.amount && (
                <div style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: activity.type === 'payment_received' ? '#00b894' : '#2d3436'
                }}>
                  ₹{activity.amount}
                </div>
              )}
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
          background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          View Active Jobs
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
          Update Availability
        </button>
      </div>
    </div>
  );
};

export default WorkerHome;
