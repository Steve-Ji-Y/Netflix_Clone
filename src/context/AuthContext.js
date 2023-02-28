import React, { useContext, useState, useEffect, useCallback } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [uid, setUid] = useState(JSON.parse(localStorage.getItem("uid")));

  const login = useCallback((email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, []);

  const signup = useCallback((email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }, []);

  const logout = useCallback(() => {
    return signOut(auth);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setUid(user.uid);
        localStorage.setItem("uid", JSON.stringify(user.uid));
      } else {
        setCurrentUser(null);
        setUid(null);
        localStorage.setItem("uid", JSON.stringify(null));
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    user: currentUser,
    login,
    logout,
    signup,
    uid,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
