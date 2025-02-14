import axiosInstance from "./axiosConfig";
//api/Account/Login

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/api/Account/Login", {
      email,
      password,
    });

    if (response.status === 200) {
      console.log("Login successful:", response.data);
      return response.data.data;
    }
  } catch (error) {
    if (error.response?.status === 302) {
      throw Object.assign(new Error(error.response.data.message), {
        type: "Redirect",
      });
    }
    if (error.response?.status === 401) {
      throw new Error(error.response.data.errors[0]);
    }
  }
};

export const reset = async (ssn, newEmail, newPassword) => {
  try {
    const response = await axiosInstance.post("/api/Account/Reset", {
      oldPassword: ssn, // SSN is passed as oldPassword
      email: newEmail, // New Email
      password: newPassword, // New Password
    });

    // Return the full response for handling in the Reset component
    if (response.status === 200) {
      return response.data.data;
    }
    // return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      throw new Error(error.response.data.errors[0]);
    }
  }
};
