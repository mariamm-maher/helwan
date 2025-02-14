import React, { createContext, useContext, useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query"; // Import React Query
import { loginUser } from "../Services/auth";
import { reset } from "../Services/auth";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast"; // Import react-hot-toast
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // React Query mutation for login
  const {
    mutate: login,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginUser(email, password), // Call the login API
    onSuccess: (data) => {
      setToken(data.token); // Set the token on successful login
      toast.success("تسجيل الدخول بنجاح"); // Show success toast
    },
    onError: (error) => {
      console.error("Login failed:", error);
      toast.error(error.message); // Show error toast
    },
  });

  const { mutate: resetuser } = useMutation({
    mutationFn: ({ ssn, newEmail, newPassword }) =>
      reset(ssn, newEmail, newPassword), // Call the login API
    Error: (error) => {
      toast.error(error.message); // Show error toast
    },
  });

  // Decode the token and set user data whenever the token changes
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decode the token
        setUser(decodedToken); // Set user data from the decoded token
        localStorage.setItem("token", token); // Save the token to localStorage
      } catch (error) {
        console.error("Failed to decode token:", error);
        toast.error("Invalid token. Please log in again."); // Show error toast
        handleLogout();
      }
    } else {
      handleLogout();
    }
  }, [token]);

  // Logout function
  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    toast.success("Logged out successfully."); // Show success toast
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login, // Expose the login mutation
        isLoading, // Expose loading state
        isError, // Expose error state
        error, // Expose error details
        logout: handleLogout,
        resetuser,
      }}
    >
      {children}
      <Toaster /> {/* Add Toaster to render toasts */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
