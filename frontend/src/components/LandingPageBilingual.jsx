import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const LandingPage = ({ onNavigateToLogin, onNavigateToSignup }) => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: t('findSkilledWorkers'),
      subtitle: t('connectWithVerifiedProfessionals'),
      image: "👷♂️"
    },
    {
      title: t('hireContractors'),
      subtitle: t('getYourProjectsDoneRight'),
      image: "🏗️"
    },
    {
      title: t('joinAsWorker'),
      subtitle: t('showcaseYourSkillsAndEarn'),
      image: "🔧"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        padding: '20px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{
          color: 'white',
          margin: 0,
          fontSize: '28px',
          fontWeight: 'bold'
        }}>{t('workConnect')}</h1>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <LanguageSwitcher />
          <button
            onClick={onNavigateToLogin}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              border: '2px solid white',
              color: 'white',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#667eea';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            {t('login')}
          </button>
          <button
            onClick={onNavigateToSignup}
            style={{
              padding: '10px 20px',
              background: 'white',
              border: 'none',
              color: '#667eea',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {t('signUp')}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease'
        }}>
          {/* Animated Slide */}
          <div style={{
            fontSize: '80px',
            marginBottom: '20px',
            animation: 'bounce 2s infinite'
          }}>
            {slides[currentSlide].image}
          </div>

          <h2 style={{
            color: 'white',
            fontSize: '48px',
            margin: '20px 0',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {slides[currentSlide].title}
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '24px',
            margin: '20px 0 40px',
            fontWeight: '300'
          }}>
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={onNavigateToSignup}
              style={{
                padding: '15px 30px',
                background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                border: 'none',
                color: 'white',
                borderRadius: '30px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              {t('getStarted')}
            </button>
            
            <button
              onClick={onNavigateToLogin}
              style={{
                padding: '15px 30px',
                background: 'rgba(255,255,255,0.2)',
                border: '2px solid white',
                color: 'white',
                borderRadius: '30px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#667eea';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.color = 'white';
              }}
            >
              {t('learnMore')}
            </button>
          </div>

          {/* Slide Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '40px'
          }}>
            {slides.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section style={{
        padding: '50px',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { icon: '🔍', title: t('findWorkers'), desc: t('searchSkilledProfessionals') },
            { icon: '✅', title: t('verifiedProfiles'), desc: t('allUsersAreVerified') },
            { icon: '💼', title: t('securePayments'), desc: t('safeAndSecureTransactions') }
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                color: 'white',
                padding: '20px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                minWidth: '200px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>{feature.icon}</div>
              <h3 style={{ margin: '10px 0', fontSize: '20px' }}>{feature.title}</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;