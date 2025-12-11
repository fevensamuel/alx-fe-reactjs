// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage'; // Import ProfilePage
import UserContext from './UserContext'; // Import the context

function App() {
  // Sample user data to be passed through context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap ProfilePage in UserContext.Provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
