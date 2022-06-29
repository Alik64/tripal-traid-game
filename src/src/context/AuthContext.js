import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    localStorage.getItem("userEmail") ? localStorage.getItem("userEmail") : null
  );

  const signIn = (values, callback) => {
    localStorage.setItem("userEmail", values.email);
    console.log("values : ", values);
    setUser(values);
    callback && callback();
  };

  const signOut = (callback) => {
    localStorage.removeItem("userEmail");
    setUser(null);
    callback && callback();
  };

  const value = {
    user,
    signIn,
    signOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
export function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
}

export default AuthProvider;
