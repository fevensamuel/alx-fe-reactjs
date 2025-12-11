// src/UserInfo.jsx
import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import UserContext from './UserContext';

function UserInfo() {
  const userData = useContext(UserContext);  // Consume context

  return <UserDetails userData={userData} />;
}

export default UserInfo;
