import React, { useState, useEffect } from 'react';

const Home = ({ userData }) => {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationInput, setLocationInput] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock location data - replace with real API call
  const searchLocations = (query) => {
    if (!query.trim()) {
      setLocationSuggestions([]);
      return;
    }
    
    const mockLocations = [
      'New York, NY', 'New Delhi, India', 'Newark, NJ',
      'Los Angeles, CA', 'London, UK', 'Las Vegas, NV',
      'Chicago, IL', 'Chennai, India', 'Charlotte, NC',
      'San Francisco, CA', 'San Diego, CA', 'San Antonio, TX',
      'Mumbai, India', 'Miami, FL', 'Minneapolis, MN',
      'Boston, MA', 'Bangalore, India', 'Baltimore, MD','firozpur','bathinda','ludhiana', 'amritsar'
    ];
    
    const filtered = mockLocations.filter(loc => 
      loc.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    
    setLocationSuggestions(filtered);
  };

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In production, use reverse geocoding API to get city name
          const mockCity = 'Your Current Location';
          setLocation(mockCity);
          setLocationInput(mockCity);
          setShowLocationModal(false);
        },
        (error) => {
          alert('Unable to get your location. Please enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
    setLocationInput(selectedLocation);
    setShowLocationModal(false);
    setLocationSuggestions([]);
  };

  const handleLocationInputChange = (e) => {
    const value = e.target.value;
    setLocationInput(value);
    searchLocations(value);
  };
  
  const services = [
    { name: 'Carpenter', icon: '🔨', available: 12 },
    { name: 'Electrician', icon: '⚡', available: 8 },
    { name: 'Plumber', icon: '🔧', available: 15 },
    { name: 'Welder', icon: '🔥', available: 6 },
    { name: 'Construction', icon: '🏗️', available: 20 },
    { name: 'Farm Worker', icon: '🌾', available: 10 },
    { name: 'AC Installation', icon: '🛠️', available: 17 },
    { name: 'Cleaning', icon: '🧹', available: 10 },
  ];

  // Filter services based on search query
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header Navigation */}
      

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #3d4f7d 0%, #5a6fa8 100%)',
        padding: '80px 40px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '48px',
          margin: '0 0 15px 0',
          fontWeight: '700',
          letterSpacing: '0.5px'
        }}>
          Fast, Free way to get services
        </h1>
        <p style={{
          fontSize: '24px',
          margin: '0 0 10px 0',
          opacity: 0.95
        }}>
          Discover Top Workers in <strong>{location || 'Your City'}</strong>
        </p>
        {!isMobile && (
          <p style={{
            fontSize: '28px',
            margin: '0 0 40px 0',
            color: '#ffa94d',
            fontWeight: '600',
            textDecoration: 'underline',
            textDecorationColor: '#ffa94d',
            textDecorationThickness: '3px',
            textUnderlineOffset: '8px'
          }}>
            Skilled, Trusted, Reliable!
          </p>
        )}

        {/* Search Box */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          background: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}>
          <div 
            onClick={() => setShowLocationModal(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: isMobile ? '0 10px' : '0 20px',
              borderRight: '1px solid #e0e0e0',
              flex: isMobile ? '0 0 auto' : '1',
              cursor: 'pointer'
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ marginRight: isMobile ? '0' : '10px', color: '#636e72' }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {!isMobile && (
              <div style={{
                fontSize: '16px',
                padding: '20px 0',
                width: '100%',
                color: location ? '#2d3436' : '#999'
              }}>
                {location || 'Enter your city or area'}
              </div>
            )}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            flex: '2'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ marginRight: '10px', color: '#636e72' }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search for a service (e.g., Plumber, Electrician)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                padding: '20px 0',
                width: '100%',
                color: '#2d3436'
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h2 style={{
              fontSize: '32px',
              margin: 0,
              color: '#2d3436',
              fontWeight: '600'
            }}>
              Available Services {searchQuery && `(${filteredServices.length} results)`}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '25px'
          }}>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div
                  key={index}
                  style={{
                    background: '#f8f9fa',
                    borderRadius: '15px',
                    padding: '30px 20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
                    e.currentTarget.style.borderColor = '#5a6fa8';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div style={{
                    fontSize: '50px',
                    marginBottom: '15px'
                  }}>{service.icon}</div>
                  <h3 style={{
                    margin: '0 0 10px 0',
                    color: '#2d3436',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}>{service.name}</h3>
                  <p style={{
                    margin: 0,
                    color: '#00b894',
                    fontWeight: 'bold',
                    fontSize: '15px'
                  }}>
                    {service.available} available
                  </p>
                </div>
              ))
            ) : (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '60px',
                color: '#636e72',
                fontSize: '18px'
              }}>
                No services found matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '40px',
          marginTop: '30px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            color: '#2d3436',
            fontSize: '24px',
            fontWeight: '600'
          }}>Recent Activity</h3>
          <p style={{
            color: '#636e72',
            margin: 0,
            fontSize: '16px'
          }}>No recent bookings. Start by booking a service!</p>
        </div>
      </section>

      {/* Location Modal */}
      {showLocationModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }} onClick={() => setShowLocationModal(false)}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h2 style={{ margin: 0, color: '#2d3436', fontSize: '24px' }}>Select Location</h2>
              <button
                onClick={() => setShowLocationModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '28px',
                  cursor: 'pointer',
                  color: '#636e72',
                  padding: '0',
                  width: '30px',
                  height: '30px'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Search for your city or area..."
                value={locationInput}
                onChange={handleLocationInputChange}
                autoFocus
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '16px',
                  border: '2px solid #dfe6e9',
                  borderRadius: '10px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0984e3'}
                onBlur={(e) => e.target.style.borderColor = '#dfe6e9'}
              />
            </div>

            <button
              onClick={useCurrentLocation}
              style={{
                background: 'none',
                border: 'none',
                padding: '15px 0',
                color: '#6c5ce7',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#5849c7'}
              onMouseOut={(e) => e.currentTarget.style.color = '#6c5ce7'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
              </svg>
              Use current location
            </button>

            {locationSuggestions.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                {locationSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleLocationSelect(suggestion)}
                    style={{
                      padding: '12px 15px',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      marginBottom: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: '#f8f9fa'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#e9ecef'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#f8f9fa'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span style={{ color: '#2d3436' }}>{suggestion}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;