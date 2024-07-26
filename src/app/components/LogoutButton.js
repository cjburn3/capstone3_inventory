"use client"

// import { logout } from "../utils/authUtils";

// const LogoutButton = () => {
//   const handleLogout = async () => {
//     // Add your logout logic here
//     await logout();
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//     >
//       Logout
//     </button>
//   );
// };

// export default LogoutButton;
// src/app/components/LogoutButton.js


// import React from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../../../firebase.config';
// import { getAuth, signOut } from 'firebase/auth';

// const LogoutButton = () => {
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert("Logout successful");
//     } catch (error) {
//       alert("Error logging out: " + error.message);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// };

// export default LogoutButton;

import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const LogoutButton = () => {
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
