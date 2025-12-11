// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
 HEAD
import UserContext from './UserContext'; // Import the UserContext

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // Import the UserProfile component

function App() {
 const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <Footer />
    </div>
<UserContext.Provider value={userData}> {/* Provide the userData through Context */}

import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
 0057018c8ea55e211233504273713108e6ee3e7b
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
