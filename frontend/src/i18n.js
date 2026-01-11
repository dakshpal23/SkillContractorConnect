import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Landing Page
      "workConnect": "WorkConnect",
      "login": "Login",
      "signUp": "Sign Up",
      "getStarted": "Get Started",
      "learnMore": "Learn More",
      
      // Slides
      "findSkilledWorkers": "Find Skilled Workers",
      "connectWithVerifiedProfessionals": "Connect with verified professionals",
      "hireContractors": "Hire Contractors",
      "getYourProjectsDoneRight": "Get your projects done right",
      "joinAsWorker": "Join as Worker",
      "showcaseYourSkillsAndEarn": "Showcase your skills and earn",
      
      // Features
      "findWorkers": "Find Workers",
      "searchSkilledProfessionals": "Search skilled professionals",
      "verifiedProfiles": "Verified Profiles",
      "allUsersAreVerified": "All users are verified",
      "securePayments": "Secure Payments",
      "safeAndSecureTransactions": "Safe and secure transactions",
      
      // Login translations
      "welcomeBack": "Welcome Back",
      "selectAccountType": "Select Account Type:",
      "user": "User",
      "worker": "Worker",
      "contractor": "Contractor",
      "phoneNumber": "Phone Number",
      "enterPhoneNumber": "Enter phone number",
      "password": "Password",
      "enterPassword": "Enter password",
      "dontHaveAccount": "Don't have an account?",
      "createAccount": "Create Account",
      "dashboard": "Dashboard",
      "profile": "Profile",
      "logout": "Logout",
      "home": "Home",
      "about": "About",
      "contact": "Contact",
      "services": "Services"
    }
  },
  hi: {
    translation: {
      // Landing Page
      "workConnect": "वर्ककनेक्ट",
      "login": "लॉगिन",
      "signUp": "साइन अप",
      "getStarted": "शुरू करें",
      "learnMore": "और जानें",
      
      // Slides
      "findSkilledWorkers": "कुशल कामगार खोजें",
      "connectWithVerifiedProfessionals": "सत्यापित पेशेवरों से जुड़ें",
      "hireContractors": "ठेकेदार किराए पर लें",
      "getYourProjectsDoneRight": "अपने प्रोजेक्ट सही तरीके से पूरे करवाएं",
      "joinAsWorker": "कामगार के रूप में जुड़ें",
      "showcaseYourSkillsAndEarn": "अपने कौशल दिखाएं और कमाएं",
      
      // Features
      "findWorkers": "कामगार खोजें",
      "searchSkilledProfessionals": "कुशल पेशेवरों की खोज करें",
      "verifiedProfiles": "सत्यापित प्रोफाइल",
      "allUsersAreVerified": "सभी उपयोगकर्ता सत्यापित हैं",
      "securePayments": "सुरक्षित भुगतान",
      "safeAndSecureTransactions": "सुरक्षित और विश्वसनीय लेनदेन",
      
      // Login translations
      "welcomeBack": "वापसी पर स्वागत है",
      "selectAccountType": "खाता प्रकार चुनें:",
      "user": "उपयोगकर्ता",
      "worker": "कामगार",
      "contractor": "ठेकेदार",
      "phoneNumber": "फोन नंबर",
      "enterPhoneNumber": "फोन नंबर दर्ज करें",
      "password": "पासवर्ड",
      "enterPassword": "पासवर्ड दर्ज करें",
      "dontHaveAccount": "क्या आपका खाता नहीं है?",
      "createAccount": "खाता बनाएं",
      "dashboard": "डैशबोर्ड",
      "profile": "प्रोफाइल",
      "logout": "लॉगआउट",
      "home": "होम",
      "about": "हमारे बारे में",
      "contact": "संपर्क",
      "services": "सेवाएं"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;