// src/UserInfo.jsx
import React, { useContext } from 'react';
import UserDetails from './UserDetails'; // Import UserDetails component
import UserContext from './UserContext'; // Import the context

function UserInfo() {
  // Consume context to access the userData
  const userData = useContext(UserContext);

  return <UserDetails userData={userData} />;
}

export default UserInfo;
