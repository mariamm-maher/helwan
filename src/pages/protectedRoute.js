import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Example: Using token from localStorage
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
