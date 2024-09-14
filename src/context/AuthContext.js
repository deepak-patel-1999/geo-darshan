// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login state (replace this with real authentication logic)
  const user = localStorage.getItem("user"); // Check if user is logged in (can use token, etc.)
  useEffect(() => {
    console.log("use => V", user);
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const login = (user) => {
    localStorage.setItem("user", user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
