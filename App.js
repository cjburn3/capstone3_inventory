// src/App.js
import React from 'react';
// import LoginForm from './app/components/LoginForm';
// import LoginForm from '@/app/components/LoginForm';
import LoginForms from './app/components/LoginForm';
import RegisterForm from './app/components/RegisterForm';
import LogoutButton from './app/components/LogoutButton';
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
          <loginForms />
          <RegisterForm />
        </div>
      )}
    </div>
  );
};

export default App;