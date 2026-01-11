import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import AccountCreation from './components/AccountCreation';
import CreateUser from './components/CreateUser';
import CreateWorker from './components/CreateWorker';
import CreateContractor from './components/CreateContractor';
import UserNavigation from './components/UserNavigation';
import ContractorNavigation from './components/ContractorNavigation';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/signup" element={<AccountCreationWrapper />} />
        <Route path="/create-user" element={<CreateUserWrapper />} />
        <Route path="/create-worker" element={<CreateWorkerWrapper />} />
        <Route path="/create-contractor" element={<CreateContractorWrapper />} />
        <Route path="/user-dashboard" element={<UserDashboardWrapper />} />
        <Route path="/contractor-dashboard" element={<ContractorDashboardWrapper />} />
      </Routes>
    </div>
  );
}

// Wrapper components to handle navigation
function LandingPageWrapper() {
  const navigate = useNavigate();
  return (
    <LandingPage
      onNavigateToLogin={() => navigate('/login')}
      onNavigateToSignup={() => navigate('/signup')}
    />
  );
}

function LoginWrapper() {
  const navigate = useNavigate();
  return (
    <Login
      onNavigateToSignup={() => navigate('/signup')}
      onNavigateToUserDashboard={(data) => {
        sessionStorage.setItem('userData', JSON.stringify(data));
        navigate('/user-dashboard');
      }}
      onNavigateToContractorDashboard={(data) => {
        sessionStorage.setItem('userData', JSON.stringify(data));
        navigate('/contractor-dashboard');
      }}
    />
  );
}

function AccountCreationWrapper() {
  const navigate = useNavigate();
  return (
    <AccountCreation
      onNavigateToLogin={() => navigate('/login')}
      onNavigateToUserCreation={(data) => {
        sessionStorage.setItem('userData', JSON.stringify(data));
        navigate('/create-user');
      }}
      onNavigateToWorkerCreation={(data) => {
        sessionStorage.setItem('userData', JSON.stringify(data));
        navigate('/create-worker');
      }}
      onNavigateToContractorCreation={(data) => {
        sessionStorage.setItem('userData', JSON.stringify(data));
        navigate('/create-contractor');
      }}
    />
  );
}

function CreateUserWrapper() {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  return (
    <CreateUser
      userData={userData}
      onNavigateToLogin={() => {
        sessionStorage.removeItem('userData');
        navigate('/login');
      }}
    />
  );
}

function CreateWorkerWrapper() {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  return (
    <CreateWorker
      userData={userData}
      onNavigateToLogin={() => {
        sessionStorage.removeItem('userData');
        navigate('/login');
      }}
    />
  );
}

function CreateContractorWrapper() {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  return (
    <CreateContractor
      userData={userData}
      onNavigateToLogin={() => {
        sessionStorage.removeItem('userData');
        navigate('/login');
      }}
    />
  );
}

function UserDashboardWrapper() {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  return (
    <UserNavigation
      userData={userData}
      onLogout={() => {
        sessionStorage.removeItem('userData');
        navigate('/');
      }}
    />
  );
}

function ContractorDashboardWrapper() {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  return (
    <ContractorNavigation
      userData={userData}
      onLogout={() => {
        sessionStorage.removeItem('userData');
        navigate('/');
      }}
    />
  );
}

export default App;