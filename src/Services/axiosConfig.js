import axios from "axios";
const baseUrl = "https://localhost:7268";

export function getJWTHeader(userToken) {
  return { Authorization: `Bearer ${userToken}` };
}

// Axios instance
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ **Request Interceptor** (Runs before request is sent)
axiosInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem("token"); // Get token from localStorage or context
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
