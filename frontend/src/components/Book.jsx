import React, { useState } from 'react';

const Book = ({ userData }) => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [location, setLocation] = useState('');
  const [timing, setTiming] = useState('scheduled');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [currentStep, setCurrentStep] = useState('booking'); // booking, matching, connected
  const [matchedWorker, setMatchedWorker] = useState(null);
  const [userAgreed, setUserAgreed] = useState(false);
  const [workerAgreed, setWorkerAgreed] = useState(false);

  const skills = ['Carpenter', 'Electrician', 'Plumber', 'Welder', 'Construction Worker', 'Farm Worker'];

  const findServiceProvider = () => {
    if (!selectedSkill || !location || (timing === 'scheduled' && (!scheduledDate || !scheduledTime))) {
      alert('Please fill all required fields');
      return;
    }

    setCurrentStep('matching');
    
    // Simulate backend matching
    setTimeout(() => {
      const mockWorker = {
        id: 1,
        name: 'John Smith',
        skill: selectedSkill,
        rating: 4.8,
        completedJobs: 156,
        experience: '5 years',
        hourlyRate: 250,
        reviews: [
          { user: 'Alice', rating: 5, comment: 'Excellent work, very professional' },
          { user: 'Bob', rating: 4, comment: 'Good service, on time' }
        ]
      };
      setMatchedWorker(mockWorker);
      setCurrentStep('connected');
    }, 3000);
  };

  const handleUserAgree = () => {
    setUserAgreed(true);
    checkBookingCompletion(true, workerAgreed);
  };

  const handleWorkerAgree = () => {
    setWorkerAgreed(true);
    checkBookingCompletion(userAgreed, true);
  };

  const checkBookingCompletion = (userStatus, workerStatus) => {
    if (userStatus && workerStatus) {
      alert('Booking confirmed! Worker details shared.');
      // Reset form
      setCurrentStep('booking');
      setSelectedSkill('');
      setLocation('');
      setTiming('scheduled');
      setScheduledDate('');
      setScheduledTime('');
      setUserAgreed(false);
      setWorkerAgreed(false);
      setMatchedWorker(null);
    }
  };

  if (currentStep === 'matching') {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '40px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '20px' }}>🔍</div>
          <h2 style={{ color: '#2d3436', marginBottom: '15px' }}>Finding Available Workers</h2>
          <p style={{ color: '#636e72', marginBottom: '20px' }}>Searching for {selectedSkill} in your area...</p>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #74b9ff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
        </div>
      </div>
    );
  }

  if (currentStep === 'connected' && matchedWorker) {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>📞</div>
            <h3 style={{ color: '#2d3436', margin: 0 }}>Connected to Worker</h3>
          </div>

          <div style={{
            background: '#f8f9fa',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#2d3436' }}>{matchedWorker.name}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
              <div><strong>Skill:</strong> {matchedWorker.skill}</div>
              <div><strong>Rating:</strong> ⭐ {matchedWorker.rating}</div>
              <div><strong>Experience:</strong> {matchedWorker.experience}</div>
              <div><strong>Rate:</strong> ₹{matchedWorker.hourlyRate}/hr</div>
            </div>
            <div><strong>Completed Jobs:</strong> {matchedWorker.completedJobs}</div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ margin: '0 0 10px 0', color: '#2d3436' }}>Recent Reviews:</h5>
            {matchedWorker.reviews.map((review, index) => (
              <div key={index} style={{
                background: '#f1f3f4',
                padding: '10px',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                <strong>{review.user}:</strong> {'⭐'.repeat(review.rating)} "{review.comment}"
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px'
          }}>
            <button
              onClick={handleUserAgree}
              disabled={userAgreed}
              style={{
                padding: '15px',
                background: userAgreed ? '#00b894' : 'linear-gradient(135deg, #00b894, #00a085)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: userAgreed ? 'default' : 'pointer'
              }}
            >
              {userAgreed ? '✓ You Agreed' : 'I Agree'}
            </button>
            
            <div style={{
              padding: '15px',
              background: workerAgreed ? '#00b894' : '#ddd',
              color: 'white',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              {workerAgreed ? '✓ Worker Agreed' : 'Waiting for Worker...'}
            </div>
          </div>

          {/* Simulate worker agreeing after user agrees */}
          {userAgreed && !workerAgreed && setTimeout(() => handleWorkerAgree(), 2000)}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#2d3436' }}>Book a Service</h2>
      
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        {/* Skill Selection */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600'
          }}>Select Worker Skill Required:</label>
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          >
            <option value="">Choose required skill</option>
            {skills.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600'
          }}>Work Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location "
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
        </div>

        {/* Timing */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '12px',
            color: '#2d3436',
            fontWeight: '600'
          }}>When do you need the service?</label>
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 15px',
              borderRadius: '25px',
              border: `2px solid ${timing === 'now' ? '#74b9ff' : '#ddd'}`,
              background: timing === 'now' ? '#74b9ff' : 'white',
              color: timing === 'now' ? 'white' : '#2d3436',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <input
                type="radio"
                value="now"
                checked={timing === 'now'}
                onChange={(e) => setTiming(e.target.value)}
                style={{ display: 'none' }}
              />
              Right Now
            </label>
            
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 15px',
              borderRadius: '25px',
              border: `2px solid ${timing === 'scheduled' ? '#74b9ff' : '#ddd'}`,
              background: timing === 'scheduled' ? '#74b9ff' : 'white',
              color: timing === 'scheduled' ? 'white' : '#2d3436',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <input
                type="radio"
                value="scheduled"
                checked={timing === 'scheduled'}
                onChange={(e) => setTiming(e.target.value)}
                style={{ display: 'none' }}
              />
              Schedule Later
            </label>
          </div>

          {timing === 'scheduled' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input
                type="date"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                style={{
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
              <input
                type="time"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                style={{
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
          )}
        </div>

        <button
          onClick={findServiceProvider}
          style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(135deg, #00b894, #00a085)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Find Service Provider
        </button>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Book;
