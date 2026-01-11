import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        padding: '8px 16px',
        background: 'rgba(255,255,255,0.2)',
        border: '1px solid rgba(255,255,255,0.3)',
        color: 'white',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}
      onMouseOver={(e) => {
        e.target.style.background = 'rgba(255,255,255,0.3)';
      }}
      onMouseOut={(e) => {
        e.target.style.background = 'rgba(255,255,255,0.2)';
      }}
    >
      🌐 {i18n.language === 'en' ? 'हिंदी' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;