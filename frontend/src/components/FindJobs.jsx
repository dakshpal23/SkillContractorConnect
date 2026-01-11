import React, { useState } from 'react';

const FindJobs = ({ userData }) => {
  const [selectedSkill, setSelectedSkill] = useState('all');

  // Jobs posted by contractors
  const availableJobs = [
    {
      id: 1,
      title: 'Kitchen Renovation',
      service: 'Carpenter',
      category: 'Carpenter',
      contractor: 'ABC Construction Co.',
      location: 'Mumbai, Bandra',
      timeSlot: '9:00 AM - 5:00 PM',
      period: '5 days',
      dailyWage: 800,
      distance: '3.2 km',
      urgency: 'normal',
      postedDate: '2024-01-15',
      description: 'Need experienced carpenter for complete kitchen renovation including cabinet installation and countertop work'
    },
    {
      id: 2,
      title: 'Office Electrical Wiring',
      service: 'Complete Wiring Work',
      category: 'Electrician',
      contractor: 'TechPark Solutions',
      location: 'Delhi, Connaught Place',
      timeSlot: '10:00 AM - 6:00 PM',
      period: '3 days',
      dailyWage: 1000,
      distance: '5.7 km',
      urgency: 'urgent',
      postedDate: '2024-01-16',
      description: 'Office space wiring for new IT setup. Must have commercial electrical experience'
    },
    {
      id: 3,
      title: 'Bathroom Plumbing Installation',
      service: 'Bathroom Fitting',
      category: 'Plumber',
      contractor: 'HomeBuilder Realty',
      location: 'Noida, Sector 62',
      timeSlot: '8:00 AM - 4:00 PM',
      period: '4 days',
      dailyWage: 900,
      distance: '4.5 km',
      urgency: 'normal',
      postedDate: '2024-01-14',
      description: 'Complete bathroom plumbing work for 3 bathrooms in new apartment complex'
    },
    {
      id: 4,
      title: 'Metal Gate Fabrication',
      service: 'Custom Metal Work',
      category: 'Welder',
      contractor: 'Steel Masters Ltd.',
      location: 'Gurgaon, Cyber City',
      timeSlot: '7:00 AM - 3:00 PM',
      period: '6 days',
      dailyWage: 950,
      distance: '8.1 km',
      urgency: 'urgent',
      postedDate: '2024-01-17',
      description: 'Custom metal gates for residential complex. Experience with decorative metalwork required'
    },
    {
      id: 5,
      title: 'House Painting Project',
      service: 'Painting',
      category: 'Construction Worker',
      contractor: 'Dream Homes Pvt Ltd',
      location: 'Faridabad, Sector 15',
      timeSlot: '9:00 AM - 5:00 PM',
      period: '7 days',
      dailyWage: 750,
      distance: '6.3 km',
      urgency: 'normal',
      postedDate: '2024-01-13',
      description: '3BHK house interior and exterior painting. Quality work required'
    }
  ];

  const skills = ['all', 'Electrician', 'Plumber', 'Carpenter', 'Welder', 'Construction Worker'];

  const filteredJobs = selectedSkill === 'all' 
    ? availableJobs 
    : availableJobs.filter(job => job.category === selectedSkill);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#2d3436' }}>Available Contractor Jobs</h2>

      {/* Filter by Skill */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '10px',
          color: '#2d3436',
          fontWeight: '600'
        }}>Filter by Skill:</label>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {skills.map(skill => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              style={{
                padding: '8px 16px',
                background: selectedSkill === skill ? '#74b9ff' : 'white',
                color: selectedSkill === skill ? 'white' : '#2d3436',
                border: `2px solid ${selectedSkill === skill ? '#74b9ff' : '#ddd'}`,
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: selectedSkill === skill ? 'bold' : 'normal',
                textTransform: 'capitalize'
              }}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              borderLeft: `5px solid ${job.urgency === 'urgent' ? '#e17055' : '#74b9ff'}`
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#2d3436', fontSize: '18px' }}>
                  {job.title}
                </h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{
                    background: '#e3f2fd',
                    color: '#1976d2',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {job.category}
                  </span>
                  {job.urgency === 'urgent' && (
                    <span style={{
                      background: '#ffebee',
                      color: '#c62828',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      🔥 URGENT
                    </span>
                  )}
                  <span style={{
                    background: '#f1f3f4',
                    color: '#636e72',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    📍 {job.distance}
                  </span>
                  <span style={{
                    background: '#e8f5e9',
                    color: '#2e7d32',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {job.period}
                  </span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#00b894'
                }}>
                  ₹{job.dailyWage}/day
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <p style={{ margin: '0 0 8px 0', color: '#636e72', fontSize: '14px' }}>
                <strong>Contractor:</strong> {job.contractor}
              </p>
              <p style={{ margin: '0 0 8px 0', color: '#636e72', fontSize: '14px' }}>
                <strong>Location:</strong> {job.location}
              </p>
              <p style={{ margin: '0 0 8px 0', color: '#636e72', fontSize: '14px' }}>
                <strong>Time Slot:</strong> {job.timeSlot}
              </p>
              <p style={{ margin: '0 0 8px 0', color: '#636e72', fontSize: '14px' }}>
                <strong>Posted:</strong> {new Date(job.postedDate).toLocaleDateString('en-IN', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </p>
              <p style={{ margin: '0', color: '#2d3436', fontSize: '14px', lineHeight: '1.5' }}>
                {job.description}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                flex: 1,
                padding: '12px',
                background: 'linear-gradient(135deg, #00b894, #00a085)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                Apply for Job
              </button>
              <button style={{
                padding: '12px 20px',
                background: 'white',
                color: '#74b9ff',
                border: '2px solid #74b9ff',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>🔍</div>
          <h3 style={{ color: '#636e72', margin: '0 0 10px 0' }}>No jobs available</h3>
          <p style={{ color: '#636e72', margin: 0 }}>Check back later for new opportunities</p>
        </div>
      )}
    </div>
  );
};

export default FindJobs;
