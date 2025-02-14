import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import AdminDashboard from "./pages/dashboard/dashboard";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Managers from "./pages/dashboard/Managers";
import Devices from "./pages/dashboard/Devices";
import Configrations from "./pages/dashboard/Configrations";
import Leaves from "./pages/dashboard/Leaves";
import Employees from "./pages/dashboard/Employees";
import Main from "./pages/dashboard/main";
import Attendence from "./pages/dashboard/Attendence";
import { AuthProvider } from "./contexts/AuthContext";
import ProfileComponent from "./pages/profile";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./pages/protectedRoute";
import Reset from "./pages/Reset";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry failed requests twice
      onError: (error) => {
        console.error("Global query error:", error.message);
      },
    },
    mutations: {
      onError: (error) => {
        console.error("Global mutation error:", error.message);
      },
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ReactQueryDevtools initialOpen={false} />
        <Router>
          <div className="App">
            <Routes>
              <Route index path="/" element={<LoginPage />} />
              <Route path="/profile" element={<ProfileComponent />} />
              <Route path="/reset" element={<Reset />} />
              <Route
                path="/Dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Main />} />
                <Route path="managers" element={<Managers />} />
                <Route path="devices" element={<Devices />} />
                <Route path="settings" element={<Configrations />} />
                <Route path="leaves" element={<Leaves />} />
                <Route path="employees" element={<Employees />} />
                <Route path="attendence" element={<Attendence />} />
              </Route>
            </Routes>
          </div>
        </Router>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
