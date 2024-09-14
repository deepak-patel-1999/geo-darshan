// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  console.log("isLoggedIn  => ", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirect to home if not logged in
  }

  return children;
};

export default ProtectedRoute;
