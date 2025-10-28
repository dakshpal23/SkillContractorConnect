import React, { useState } from 'react';

const Hire = ({ userData }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    workLocation: '',
    timeSchedule: '',
    salary: '',
    skill: '',
    workerName: ''
  });
  
  const skills = ['All Skills', 'Carpenter', 'Electrician', 'Plumber', 'Welder', 'Construction Worker', 'Farm Worker'];
  
  const availableWorkers = [
    {
      id: 1,
      name: 'John Smith',
      skill: 'Carpenter',
      rating: 4.8,
      experience: '5 years',
      dailyRate: 800,
      location: 'Mumbai',
      completedJobs: 156,
      available: true,
      preferredSchedule: '9:00 AM - 5:00 PM',
      workAreas: ['Mumbai', 'Navi Mumbai']
    },
    {
      id: 2,
      name: 'Mike Johnson',
      skill: 'Electrician',
      rating: 4.9,
      experience: '7 years',
      dailyRate: 1000,
      location: 'Mumbai',
      completedJobs: 203,
      available: true,
      preferredSchedule: '8:00 AM - 4:00 PM',
      workAreas: ['Mumbai', 'Thane']
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      skill: 'Plumber',
      rating: 4.7,
      experience: '4 years',
      dailyRate: 700,
      location: 'Delhi',
      completedJobs: 98,
      available: true,
      preferredSchedule: '10:00 AM - 6:00 PM',
      workAreas: ['Delhi', 'Gurgaon']
    },
    {
      id: 4,
      name: 'Tom Brown',
      skill: 'Welder',
      rating: 4.9,
      experience: '8 years',
      dailyRate: 1200,
      location: 'Mumbai',
      completedJobs: 267,
      available: true,
      preferredSchedule: '9:00 AM - 5:00 PM',
      workAreas: ['Mumbai', 'Pune']
    },
    {
      id: 5,
      name: 'Alex Kumar',
      skill: 'Construction Worker',
      rating: 4.6,
      experience: '6 years',
      dailyRate: 600,
      location: 'Delhi',
      completedJobs: 134,
      available: true,
      preferredSchedule: '7:00 AM - 3:00 PM',
      workAreas: ['Delhi', 'Noida']
    }
  ];

  const handleInputChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value
    });
  };

  const filteredWorkers = availableWorkers.filter(worker => {
    const skillMatch = searchCriteria.skill === '' || searchCriteria.skill === 'All Skills' || worker.skill === searchCriteria.skill;
    const locationMatch = searchCriteria.workLocation === '' || worker.workAreas.some(area => 
      area.toLowerCase().includes(searchCriteria.workLocation.toLowerCase())
    );
    const scheduleMatch = searchCriteria.timeSchedule === '' || worker.preferredSchedule.includes(searchCriteria.timeSchedule);
    const salaryMatch = searchCriteria.salary === '' || worker.dailyRate <= parseInt(searchCriteria.salary);
    const nameMatch = searchCriteria.workerName === '' || worker.name.toLowerCase().includes(searchCriteria.workerName.toLowerCase());
    
    return skillMatch && locationMatch && scheduleMatch && salaryMatch && nameMatch && worker.available;
  });

  const handleHireWorker = (worker) => {
    alert(`Hiring request sent to ${worker.name}. They will be notified and can accept/decline.`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#2d3436' }}>Hire Workers</h2>
      
      {/* Search & Filter Section */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#2d3436' }}>Find Workers</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>Work Location:</label>
            <input
              type="text"
              name="workLocation"
              value={searchCriteria.workLocation}
              onChange={handleInputChange}
              placeholder="Enter work location"
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            />
          </div>
          
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>Time Schedule:</label>
            <input
              type="text"
              name="timeSchedule"
              value={searchCriteria.timeSchedule}
              onChange={handleInputChange}
              placeholder="e.g., 9:00 AM"
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            />
          </div>
          
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>Max Daily Salary (₹):</label>
            <input
              type="number"
              name="salary"
              value={searchCriteria.salary}
              onChange={handleInputChange}
              placeholder="Enter max budget"
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>Skill Required:</label>
            <select
              name="skill"
              value={searchCriteria.skill}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            >
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>Search by Name:</label>
            <input
              type="text"
              name="workerName"
              value={searchCriteria.workerName}
              onChange={handleInputChange}
              placeholder="Enter worker name"
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Workers List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {filteredWorkers.map((worker) => (
          <div
            key={worker.id}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${worker.available ? '#00b894' : '#e17055'}`
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '15px'
            }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0', color: '#2d3436' }}>{worker.name}</h3>
                <p style={{ margin: '0 0 5px 0', color: '#636e72' }}>{worker.skill} • {worker.location}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '8px' }}>
                  <span style={{ color: '#fdcb6e' }}>⭐ {worker.rating}</span>
                  <span style={{ color: '#636e72' }}>{worker.experience}</span>
                  <span style={{ color: '#636e72' }}>{worker.completedJobs} jobs</span>
                </div>
                <div style={{ fontSize: '14px', color: '#636e72' }}>
                  <div>Schedule: {worker.preferredSchedule}</div>
                  <div>Work Areas: {worker.workAreas.join(', ')}</div>
                </div>
              </div>
              <span style={{
                background: worker.available ? '#00b894' : '#e17055',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {worker.available ? 'Available' : 'Busy'}
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <strong style={{ color: '#2d3436' }}>Daily Rate: </strong>
                <span style={{ color: '#00b894', fontWeight: 'bold', fontSize: '18px' }}>
                  ₹{worker.dailyRate}/day
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{
                  padding: '8px 16px',
                  background: '#74b9ff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  View Profile
                </button>
                <button
                  onClick={() => handleHireWorker(worker)}
                  disabled={!worker.available}
                  style={{
                    padding: '8px 16px',
                    background: worker.available ? '#00b894' : '#ccc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: worker.available ? 'pointer' : 'not-allowed',
                    fontSize: '14px'
                  }}
                >
                  {worker.available ? 'Hire Now' : 'Not Available'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredWorkers.length === 0 && (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>🔍</div>
          <h3 style={{ color: '#636e72', margin: '0 0 10px 0' }}>No workers found</h3>
          <p style={{ color: '#636e72', margin: 0 }}>Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
};

export default Hire;