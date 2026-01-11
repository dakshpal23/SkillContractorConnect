import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const CreateWorker = ({ userData, onNavigateToLogin }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    libraries: ['marker']
  });
  const [workerDetails, setWorkerDetails] = useState({
    skill: '',
    serviceAddress: '',
    serviceRange: '',
    aadharNo: '',
    otp: '',
    profilePhoto: null
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const skillOptions = ['carpenter', 'welder', 'electrician', 'plumber', 'Construction Worker', 'Farm Worker'];

  // Google Maps configuration
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '10px',
    marginTop: '10px'
  };

  const defaultCenter = {
    lat: 20.5937, // Center of India
    lng: 78.9629
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
    
    // Reverse geocoding to get address
    if (isLoaded && window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK' && results[0]) {
          setWorkerDetails(prev => ({
            ...prev,
            serviceAddress: results[0].formatted_address
          }));
        }
      });
    }
  };

  // Update marker when location changes
  useEffect(() => {
    if (isLoaded && mapRef.current && selectedLocation && window.google && window.google.maps.marker) {
      // Remove old marker if exists
      if (markerRef.current) {
        markerRef.current.map = null;
      }

      // Create new AdvancedMarkerElement
      const { AdvancedMarkerElement } = window.google.maps.marker;
      markerRef.current = new AdvancedMarkerElement({
        map: mapRef.current,
        position: selectedLocation,
      });
    }

    // Cleanup on unmount
    return () => {
      if (markerRef.current) {
        markerRef.current.map = null;
      }
    };
  }, [selectedLocation, isLoaded]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setSelectedLocation({ lat, lng });
          
          // Reverse geocoding to get address
          if (isLoaded && window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
              if (status === 'OK' && results[0]) {
                setWorkerDetails(prev => ({
                  ...prev,
                  serviceAddress: results[0].formatted_address
                }));
              }
            });
          }
          setShowMap(true);
        },
        (error) => {
          alert('Unable to get your location. Please click on the map to select your work location.');
          setShowMap(true);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser. Please click on the map to select your work location.');
      setShowMap(true);
    }
  };

  const handleInputChange = (e) => {
    setWorkerDetails({
      ...workerDetails,
      [e.target.name]: e.target.value
    });
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      setIsCameraOpen(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch (error) {
      alert('Camera access denied or not available');
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas) return;
    
    canvas.width = 320;
    canvas.height = 240;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 320, 240);
    
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    setCapturedImage(imageData);
    
    // Convert to blob
    canvas.toBlob((blob) => {
      setWorkerDetails({
        ...workerDetails,
        profilePhoto: blob
      });
    }, 'image/jpeg', 0.8);
    
    stopCamera();
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraOpen(false);
  };

  const sendOtp = () => {
    if (workerDetails.aadharNo.length === 12) {
      setOtpSent(true);
      alert('OTP sent to registered mobile number');
    } else {
      alert('Please enter valid 12-digit Aadhar number');
    }
  };

  const verifyOtp = () => {
    if (workerDetails.otp.length === 6) {
      setOtpVerified(true);
      alert('Aadhar verified successfully!');
    } else {
      alert('Please enter 6-digit OTP');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert('Please verify Aadhar first');
      return;
    }
    const completeWorkerData = { ...userData, ...workerDetails };
    console.log('Worker Account Created:', completeWorkerData);
    alert('Worker account created successfully! Verification process initiated.');
    onNavigateToLogin();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #00b894 0%, #00a085 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2d3436',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>Complete Worker Registration</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Skill:</label>
          <select
            name="skill"
            value={workerDetails.skill}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '16px',
              transition: 'border-color 0.3s ease',
              outline: 'none',
              background: 'white'
            }}
            onFocus={(e) => e.target.style.borderColor = '#00b894'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
          >
            <option value="">Select your skill</option>
            {skillOptions.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
        </div>



        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Service Address:</label>
          
          {!showMap ? (
            <button
              type="button"
              onClick={() => {
                setShowMap(true);
                getCurrentLocation();
              }}
              style={{
                width: '100%',
                padding: '15px',
                background: 'linear-gradient(135deg, #fd79a8, #e84393)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              📍 Select Work Location on Map
            </button>
          ) : (
            <div>
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={selectedLocation || defaultCenter}
                  zoom={selectedLocation ? 15 : 5}
                  onClick={handleMapClick}
                  onLoad={(map) => { mapRef.current = map; }}
                  mapId="DEMO_MAP_ID"
                >
                </GoogleMap>
              ) : (
                <div style={{ 
                  width: '100%', 
                  height: '400px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: '#f5f5f5',
                  borderRadius: '10px',
                  marginTop: '10px'
                }}>
                  Loading map...
                </div>
              )}
              
              <button
                type="button"
                onClick={getCurrentLocation}
                style={{
                  marginTop: '10px',
                  padding: '10px 15px',
                  background: '#0984e3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                📍 Use My Current Location
              </button>
              
              <small style={{ 
                display: 'block', 
                color: '#666', 
                marginTop: '10px',
                fontSize: '13px'
              }}>
                Click anywhere on the map to set your work location
              </small>
            </div>
          )}
          
          <input
            type="text"
            name="serviceAddress"
            value={workerDetails.serviceAddress}
            onChange={handleInputChange}
            placeholder="Selected address will appear here"
            style={{
              width: '93%',
              padding: '15px',
              marginTop: '10px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '16px',
              transition: 'border-color 0.3s ease',
              outline: 'none',
              background: selectedLocation ? '#f0fff4' : 'white'
            }}
            onFocus={(e) => e.target.style.borderColor = '#00b894'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
            readOnly={!!selectedLocation}
          />
          {selectedLocation && (
            <small style={{ color: 'green', display: 'block', marginTop: '5px', fontWeight: 'bold' }}>
              ✓ Location selected
            </small>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Service Range:</label>
          <input
            type="text"
            name="serviceRange"
            value={workerDetails.serviceRange}
            onChange={handleInputChange}
            placeholder="e.g., 10km radius or specific cities"
            style={{
              width: '93%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '16px',
              transition: 'border-color 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#00b894'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Aadhar Number:</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              name="aadharNo"
              value={workerDetails.aadharNo}
              onChange={handleInputChange}
              placeholder="12-digit Aadhar number"
              maxLength="12"
              style={{
                flex: 1,
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '10px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#00b894'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
              required
            />
            <button
              type="button"
              onClick={sendOtp}
              style={{
                padding: '12px 16px',
                background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Send OTP
            </button>
          </div>
        </div>

        {otpSent && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>Enter OTP:</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                name="otp"
                value={workerDetails.otp}
                onChange={handleInputChange}
                placeholder="Enter 6-digit OTP"
                maxLength="6"
                style={{
                  flex: 1,
                  padding: '15px',
                  border: '2px solid #ddd',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00b894'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                required
              />
              <button
                type="button"
                onClick={verifyOtp}
                style={{
                  padding: '12px 16px',
                  background: 'linear-gradient(135deg, #00b894, #00a085)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Verify
              </button>
            </div>
            {otpVerified && <small style={{ color: 'green' }}>✓ Aadhar Verified</small>}
          </div>
        )}

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#2d3436',
            fontWeight: '600',
            fontSize: '14px'
          }}>Profile Photo (Selfie):</label>
          
          {!isCameraOpen && !capturedImage && (
            <button
              type="button"
              onClick={startCamera}
              style={{
                width: '100%',
                padding: '15px',
                background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              📷 Take Selfie
            </button>
          )}
          
          {isCameraOpen && (
            <div style={{ textAlign: 'center' }}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  height: '240px',
                  borderRadius: '10px',
                  marginBottom: '10px',
                  border: '2px solid #ddd'
                }}
              />
              <br />
              <button
                type="button"
                onClick={capturePhoto}
                style={{
                  padding: '12px 24px',
                  background: '#00b894',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginRight: '10px',
                  fontSize: '16px'
                }}
              >
                📸 Capture
              </button>
              <button
                type="button"
                onClick={stopCamera}
                style={{
                  padding: '12px 24px',
                  background: '#e17055',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Cancel
              </button>
            </div>
          )}
          
          {capturedImage && (
            <div style={{ textAlign: 'center' }}>
              <img 
                src={capturedImage} 
                alt="Captured selfie" 
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  height: '240px',
                  borderRadius: '10px',
                  marginBottom: '10px',
                  border: '2px solid #00b894'
                }}
              />
              <br />
              <p style={{ color: 'green', fontWeight: 'bold', margin: '10px 0' }}>✓ Photo captured!</p>
              <button
                type="button"
                onClick={() => {
                  setCapturedImage(null);
                  setWorkerDetails({...workerDetails, profilePhoto: null});
                }}
                style={{
                  padding: '8px 16px',
                  background: '#e17055',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Retake
              </button>
            </div>
          )}
          
          <canvas ref={canvasRef} style={{ display: 'none' }} width="320" height="240" />
          <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>This will be used for face identification</small>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            background: otpVerified ? 'linear-gradient(135deg, #00b894, #00a085)' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: otpVerified ? 'pointer' : 'not-allowed',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: otpVerified ? '0 4px 15px rgba(0, 184, 148, 0.4)' : 'none'
          }}
          onMouseOver={(e) => {
            if (otpVerified) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 184, 148, 0.6)';
            }
          }}
          onMouseOut={(e) => {
            if (otpVerified) {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 184, 148, 0.4)';
            }
          }}
          disabled={!otpVerified}
        >
          Submit for Verification
        </button>
      </form>
      </div>
    </div>
  );
};

export default CreateWorker;