import React, { useState } from 'react';

const CreateContractor = ({ userData, onNavigateToLogin }) => {
  const [contractorDetails, setContractorDetails] = useState({
    email: '',
    companyName: '',
    serviceArea: '',
    panCard: null,
    gstCertificate: null,
    aadharCard: null,
    addressProof: null,
    labourLicense: null,
    shopEstablishment: null
  });

  const handleInputChange = (e) => {
    setContractorDetails({
      ...contractorDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setContractorDetails({
      ...contractorDetails,
      [e.target.name]: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeContractorData = { ...userData, ...contractorDetails };
    console.log('Contractor Account Created:', completeContractorData);
    alert('Contractor account created successfully! Documents submitted for verification.');
    onNavigateToLogin();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e17055 0%, #d63031 100%)',
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
        }}>Complete Contractor Registration</h2>
      
      <form onSubmit={handleSubmit}>
        {[
          { name: 'email', type: 'email', placeholder: 'Enter email', label: 'Email' },
          { name: 'companyName', type: 'text', placeholder: 'Enter company name', label: 'Company Name' },
          { name: 'serviceArea', type: 'text', placeholder: 'Enter service area', label: 'Service Area' }
        ].map((field) => (
          <div key={field.name} style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={contractorDetails[field.name]}
              onChange={handleInputChange}
              placeholder={field.placeholder}
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '10px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#e17055'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
              required
            />
          </div>
        ))}

        {[
          { name: 'panCard', label: 'Company/Firm PAN Card' },
          { name: 'gstCertificate', label: 'GST Registration Certificate' },
          { name: 'aadharCard', label: 'Aadhar Card' },
          { name: 'addressProof', label: 'Address Proof of Business' },
          { name: 'labourLicense', label: 'Labour License' },
          { name: 'shopEstablishment', label: 'Shops & Establishment Registration' }
        ].map((field) => (
          <div key={field.name} style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3436',
              fontWeight: '600',
              fontSize: '14px'
            }}>{field.label}:</label>
            <input
              type="file"
              name={field.name}
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              style={{
                width: '100%',
                padding: '15px',
                border: '2px dashed #ddd',
                borderRadius: '10px',
                fontSize: '14px',
                transition: 'border-color 0.3s ease',
                outline: 'none',
                background: '#f8f9fa'
              }}
              onFocus={(e) => e.target.style.borderColor = '#e17055'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
              required
            />
          </div>
        ))}



        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(135deg, #e17055, #d63031)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(225, 112, 85, 0.4)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(225, 112, 85, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(225, 112, 85, 0.4)';
          }}
        >
          Submit for Verification
        </button>
      </form>
      </div>
    </div>
  );
};

export default CreateContractor;