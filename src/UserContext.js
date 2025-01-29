import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for user data
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: '', id: '' });

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedId = localStorage.getItem('id');
    
    if (storedUsername && storedId) {
      setUser({ username: storedUsername, id: storedId });
    }
  }, []);

  // Function to update user data
  const setUserData = (username, id) => {
    setUser({ username, id });
    localStorage.setItem('username', username);
    localStorage.setItem('id', id);
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
