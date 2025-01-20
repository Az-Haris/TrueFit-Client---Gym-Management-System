import { AuthContext } from "../context/contexts";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");



  // Register User
  const registerNewUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Login User
  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // Logout User
  const logOut = () => {
    return signOut(auth);
  };

  // Update User
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Password Reset
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    auth,
    registerNewUser,
    loading,
    setLoading,
    user,
    setUser,
    loginUser,
    logOut,
    updateUser,
    loginWithGoogle,
    email,
    setEmail,
    passwordReset,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
