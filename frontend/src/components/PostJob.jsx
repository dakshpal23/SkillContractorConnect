import React, { useState } from 'react';

const PostJob = ({ userData }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showApplicants, setShowApplicants] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobDetails, setJobDetails] = useState({
    title: '',
    skillRequired: '',
    location: '',
    timeSlot: '',
    period: '',
    dailyWage: ''
  });

  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: 'Kitchen Renovation',
      skillRequired: 'Carpenter',
      location: 'Mumbai, Bandra',
      timeSlot: '9:00 AM - 5:00 PM',
      period: '5 days',
      dailyWage: 800,
      postedDate: '2024-01-15',
      status: 'active',
      applicants: 3,
      applicantsList: [
        {
          id: 1,
          name: 'John Smith',
          skill: 'Carpenter',
          rating: 4.8,
          experience: '5 years',
          dailyRate: 800,
          location: 'Mumbai',
          completedJobs: 156,
          preferredSchedule: '9:00 AM - 5:00 PM',
          appliedDate: '2024-01-16'
        },
        {
          id: 2,
          name: 'Robert Davis',
          skill: 'Carpenter',
          rating: 4.6,
          experience: '3 years',
          dailyRate: 700,
          location: 'Mumbai',
          completedJobs: 89,
          preferredSchedule: '8:00 AM - 4:00 PM',
          appliedDate: '2024-01-17'
        },
        {
          id: 3,
          name: 'James Wilson',
          skill: 'Carpenter',
          rating: 4.9,
          experience: '6 years',
          dailyRate: 850,
          location: 'Mumbai',
          completedJobs: 178,
          preferredSchedule: '10:00 AM - 6:00 PM',
          appliedDate: '2024-01-18'
        }
      ]
    },
    {
      id: 2,
      title: 'Office Wiring',
      skillRequired: 'Electrician',
      location: 'Delhi, CP',
      timeSlot: '10:00 AM - 6:00 PM',
      period: '3 days',
      dailyWage: 1000,
      postedDate: '2024-01-12',
      status: 'filled',
      applicants: 8,
      applicantsList: [
        {
          id: 4,
          name: 'Mike Johnson',
          skill: 'Electrician',
          rating: 4.9,
          experience: '7 years',
          dailyRate: 1000,
          location: 'Delhi',
          completedJobs: 203,
          preferredSchedule: '8:00 AM - 4:00 PM',
          appliedDate: '2024-01-13'
        }
      ]
    }
  ]);

  const skills = ['Carpenter', 'Electrician', 'Plumber', 'Welder', 'Construction Worker', 'Farm Worker'];

  const handleInputChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    const newJob = {
      id: jobPostings.length + 1,
      ...jobDetails,
      postedDate: new Date().toISOString().split('T')[0],
      status: 'active',
      applicants: 0,
      applicantsList: []
    };
    setJobPostings([newJob, ...jobPostings]);
    setJobDetails({
      title: '',
      skillRequired: '',
      location: '',
      timeSlot: '',
      period: '',
      dailyWage: ''
    });
    setShowCreateForm(false);
    alert('Job posted successfully!');
  };

  const handleViewApplicants = (job) => {
    setSelectedJob(job);
    setShowApplicants(true);
  };

  const handleHireWorker = (worker) => {
    alert(`Hiring ${worker.name} for ${selectedJob.title}!`);
  };

  if (showApplicants && selectedJob) {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <div>
            <button
              onClick={() => setShowApplicants(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#0984e3',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                marginBottom: '10px'
              }}
            >
              ← Back to Job Postings
            </button>
            <h2 style={{ margin: 0, color: '#2d3436' }}>
              Applicants for "{selectedJob.title}"
            </h2>
            <p style={{ margin: '5px 0 0 0', color: '#636e72', fontSize: '14px' }}>
              {selectedJob.applicantsList?.length || 0} applicants
            </p>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#2d3436', fontSize: '18px' }}>Job Details</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            <div>
              <strong style={{ color: '#636e72', fontSize: '13px' }}>Skill Required:</strong>
              <p style={{ margin: '3px 0 0 0', color: '#2d3436', fontSize: '15px' }}>{selectedJob.skillRequired}</p>
            </div>
            <div>
              <strong style={{ color: '#636e72', fontSize: '13px' }}>Location:</strong>
              <p style={{ margin: '3px 0 0 0', color: '#2d3436', fontSize: '15px' }}>{selectedJob.location}</p>
            </div>
            <div>
              <strong style={{ color: '#636e72', fontSize: '13px' }}>Time Slot:</strong>
              <p style={{ margin: '3px 0 0 0', color: '#2d3436', fontSize: '15px' }}>{selectedJob.timeSlot}</p>
            </div>
            <div>
              <strong style={{ color: '#636e72', fontSize: '13px' }}>Daily Wage:</strong>
              <p style={{ margin: '3px 0 0 0', color: '#00b894', fontSize: '16px', fontWeight: 'bold' }}>₹{selectedJob.dailyWage}/day</p>
            </div>
          </div>
        </div>

        {selectedJob.applicantsList && selectedJob.applicantsList.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {selectedJob.applicantsList.map((worker) => (
              <div key={worker.id} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', color: '#2d3436', fontSize: '20px' }}>
                      {worker.name}
                    </h3>
                    <p style={{ margin: 0, color: '#74b9ff', fontWeight: '600', fontSize: '14px' }}>
                      {worker.skill}
                    </p>
                  </div>
                  <div style={{
                    background: '#00b894',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    ⭐ {worker.rating}
                  </div>
                </div>

                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '10px',
                  padding: '12px',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px'
                  }}>
                    <div>
                      <p style={{
                        margin: 0,
                        color: '#636e72',
                        fontSize: '12px',
                        marginBottom: '4px'
                      }}>Experience</p>
                      <p style={{
                        margin: 0,
                        color: '#2d3436',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>{worker.experience}</p>
                    </div>
                    <div>
                      <p style={{
                        margin: 0,
                        color: '#636e72',
                        fontSize: '12px',
                        marginBottom: '4px'
                      }}>Completed Jobs</p>
                      <p style={{
                        margin: 0,
                        color: '#2d3436',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>{worker.completedJobs}</p>
                    </div>
                    <div>
                      <p style={{
                        margin: 0,
                        color: '#636e72',
                        fontSize: '12px',
                        marginBottom: '4px'
                      }}>Location</p>
                      <p style={{
                        margin: 0,
                        color: '#2d3436',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>{worker.location}</p>
                    </div>
                    <div>
                      <p style={{
                        margin: 0,
                        color: '#636e72',
                        fontSize: '12px',
                        marginBottom: '4px'
                      }}>Daily Rate</p>
                      <p style={{
                        margin: 0,
                        color: '#00b894',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>₹{worker.dailyRate}/day</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <p style={{
                    margin: '0 0 4px 0',
                    color: '#636e72',
                    fontSize: '12px'
                  }}>Preferred Schedule</p>
                  <p style={{
                    margin: 0,
                    color: '#2d3436',
                    fontSize: '14px'
                  }}>{worker.preferredSchedule}</p>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <p style={{
                    margin: '0 0 4px 0',
                    color: '#636e72',
                    fontSize: '12px'
                  }}>Applied Date</p>
                  <p style={{
                    margin: 0,
                    color: '#2d3436',
                    fontSize: '14px'
                  }}>{worker.appliedDate}</p>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleHireWorker(worker)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: '#00b894',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#019874'}
                    onMouseOut={(e) => e.target.style.background = '#00b894'}
                  >
                    Hire
                  </button>
                  <button style={{
                    flex: 1,
                    padding: '12px',
                    background: 'transparent',
                    color: '#0984e3',
                    border: '2px solid #0984e3',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '60px 20px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <p style={{ color: '#636e72', fontSize: '18px', margin: 0 }}>
              No applicants yet for this job posting.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (showCreateForm) {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{ margin: 0, color: '#2d3436' }}>Create Job Posting</h2>
          <button
            onClick={() => setShowCreateForm(false)}
            style={{
              padding: '8px 16px',
              background: '#636e72',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
        
        <form onSubmit={handlePostJob} style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600'
            }}>Job Title:</label>
            <input
              type="text"
              name="title"
              value={jobDetails.title}
              onChange={handleInputChange}
              placeholder="e.g., Kitchen Renovation, Office Construction"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600'
            }}>Skill Required:</label>
            <select
              name="skillRequired"
              value={jobDetails.skillRequired}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px'
              }}
              required
            >
              <option value="">Select required skill</option>
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600'
            }}>Work Location:</label>
            <input
              type="text"
              name="location"
              value={jobDetails.location}
              onChange={handleInputChange}
              placeholder="Enter complete work address"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px'
              }}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2d3436',
                fontWeight: '600'
              }}>Time Slot:</label>
              <input
                type="text"
                name="timeSlot"
                value={jobDetails.timeSlot}
                onChange={handleInputChange}
                placeholder="e.g., 9:00 AM - 5:00 PM"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                required
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2d3436',
                fontWeight: '600'
              }}>Period of Time:</label>
              <input
                type="text"
                name="period"
                value={jobDetails.period}
                onChange={handleInputChange}
                placeholder="e.g., 5 days, 2 weeks"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600'
            }}>Daily Wage (₹ per day):</label>
            <input
              type="number"
              name="dailyWage"
              value={jobDetails.dailyWage}
              onChange={handleInputChange}
              placeholder="Enter daily wage amount"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px'
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(135deg, #e17055, #d63031)',
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
            Post Job
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <div>
          <h2 style={{ margin: '0 0 5px 0', color: '#2d3436' }}>My Job Postings</h2>
          <p style={{ margin: 0, color: '#636e72', fontSize: '14px' }}>
            Post jobs visible to all workers. They can view and apply to your listings.
          </p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          style={{
            padding: '12px 20px',
            background: 'linear-gradient(135deg, #e17055, #d63031)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          + Create
        </button>
      </div>

      {jobPostings.length === 0 ? (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>📝</div>
          <h3 style={{ color: '#636e72', margin: '0 0 10px 0' }}>No job postings yet</h3>
          <p style={{ color: '#636e72', margin: 0 }}>Click Create to post your first job</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {jobPostings.map((job) => (
            <div
              key={job.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `4px solid ${job.status === 'active' ? '#00b894' : '#e17055'}`
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#2d3436' }}>{job.title}</h3>
                  <p style={{ margin: '0 0 5px 0', color: '#636e72' }}>{job.skillRequired} • {job.location}</p>
                  <p style={{ margin: 0, color: '#636e72', fontSize: '14px' }}>Posted: {job.postedDate}</p>
                </div>
                <span style={{
                  background: job.status === 'active' ? '#00b894' : '#e17055',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize'
                }}>
                  {job.status}
                </span>
              </div>
              
              <div style={{
                background: '#f8f9fa',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '10px'
                }}>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Time Slot:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '14px' }}>{job.timeSlot}</p>
                  </div>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Period:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#636e72', fontSize: '14px' }}>{job.period}</p>
                  </div>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Daily Wage:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#00b894', fontSize: '16px', fontWeight: 'bold' }}>₹{job.dailyWage}/day</p>
                  </div>
                  <div>
                    <strong style={{ color: '#2d3436', fontSize: '14px' }}>Applicants:</strong>
                    <p style={{ margin: '2px 0 0 0', color: '#74b9ff', fontSize: '14px', fontWeight: 'bold' }}>{job.applicants} applied</p>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => handleViewApplicants(job)}
                  style={{
                    padding: '8px 16px',
                    background: '#74b9ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>
                  View Applicants
                </button>
                <button style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: '#636e72',
                  border: '2px solid #636e72',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Edit
                </button>
                {job.status === 'active' && (
                  <button style={{
                    padding: '8px 16px',
                    background: 'transparent',
                    color: '#e17055',
                    border: '2px solid #e17055',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>
                    Close
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostJob;