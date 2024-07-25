// src/App.js
import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import LogoutButton from './components/LogoutButton';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <LoginForm />
          <RegisterForm />
        </div>
      )}
    </div>
  );
};

export default App;