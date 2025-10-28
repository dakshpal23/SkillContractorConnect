import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import AccountCreation from './components/AccountCreation';
import CreateUser from './components/CreateUser';
import CreateWorker from './components/CreateWorker';
import CreateContractor from './components/CreateContractor';
import UserNavigation from './components/UserNavigation';
import ContractorNavigation from './components/ContractorNavigation';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userData, setUserData] = useState(null);

  const navigateToSignup = () => setCurrentPage('signup');
  const navigateToLogin = () => setCurrentPage('login');
  const navigateToLanding = () => setCurrentPage('landing');
  const navigateToUserDashboard = (data) => {
    setUserData(data);
    setCurrentPage('userDashboard');
  };
  const navigateToContractorDashboard = (data) => {
    setUserData(data);
    setCurrentPage('contractorDashboard');
  };
  const handleLogout = () => {
    setUserData(null);
    setCurrentPage('landing');
  };
  
  const navigateToUserCreation = (data) => {
    setUserData(data);
    setCurrentPage('createUser');
  };
  
  const navigateToWorkerCreation = (data) => {
    setUserData(data);
    setCurrentPage('createWorker');
  };
  
  const navigateToContractorCreation = (data) => {
    setUserData(data);
    setCurrentPage('createContractor');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {currentPage === 'landing' && (
        <LandingPage 
          onNavigateToLogin={navigateToLogin}
          onNavigateToSignup={navigateToSignup}
        />
      )}
      {currentPage === 'login' && (
        <Login 
          onNavigateToSignup={navigateToSignup}
          onNavigateToUserDashboard={navigateToUserDashboard}
          onNavigateToContractorDashboard={navigateToContractorDashboard}
        />
      )}
      {currentPage === 'userDashboard' && (
        <UserNavigation 
          userData={userData}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'contractorDashboard' && (
        <ContractorNavigation 
          userData={userData}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'signup' && (
        <AccountCreation 
          onNavigateToLogin={navigateToLogin}
          onNavigateToUserCreation={navigateToUserCreation}
          onNavigateToWorkerCreation={navigateToWorkerCreation}
          onNavigateToContractorCreation={navigateToContractorCreation}
        />
      )}
      {currentPage === 'createUser' && (
        <CreateUser userData={userData} onNavigateToLogin={navigateToLogin} />
      )}
      {currentPage === 'createWorker' && (
        <CreateWorker userData={userData} onNavigateToLogin={navigateToLogin} />
      )}
      {currentPage === 'createContractor' && (
        <CreateContractor userData={userData} onNavigateToLogin={navigateToLogin} />
      )}
    </div>
  );
}

export default App;