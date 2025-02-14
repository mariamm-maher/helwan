import axiosInstance from "./axiosConfig"; // Adjust the import path

// Fetch data for attendance
export const fetchDataForAttendence = async ({ pageIndex, pageSize }) => {
  try {
    const url = `/api/Attendance?PageSize=${pageSize}&PageIndex=${
      pageIndex + 1
    }&IncludeTotalCount=true`;

    const response = await axiosInstance.get(url);
    const { data } = response.data;

    return {
      rows: data.data,
      totalCount: data.totalCount,
    };
  } catch (error) {
    console.error("Error fetching attendance data:", error);
    throw error;
  }
};

// Fetch data for managers
export const fetchDataForManagers = async ({ pageIndex, pageSize }) => {
  try {
    const url = `/api/Managers?PageSize=${pageSize}&PageIndex=${
      pageIndex + 1
    }&IncludeTotalCount=true`;

    const response = await axiosInstance.get(url);
    const { data } = response.data;

    return {
      rows: data.data,
      totalCount: data.totalCount,
    };
  } catch (error) {
    console.error("Error fetching managers data:", error);
    throw error;
  }
};

// Fetch data for devices
export const fetchDataForDevices = async ({ pageIndex, pageSize }) => {
  try {
    const url = `/api/Device?PageSize=${pageSize}&PageIndex=${
      pageIndex + 1
    }&IncludeTotalCount=true`;

    const response = await axiosInstance.get(url);
    const { data } = response.data;

    return {
      rows: data.data,
      totalCount: data.totalCount,
    };
  } catch (error) {
    console.error("Error fetching devices data:", error);
    throw error;
  }
};

// Fetch data for admins
export const fetchDataForAdmins = async ({ pageIndex, pageSize }) => {
  try {
    const url = `/api/Admin?PageSize=${pageSize}&PageIndex=${
      pageIndex + 1
    }&IncludeTotalCount=true`;

    const response = await axiosInstance.get(url);
    const { data } = response.data;

    return {
      rows: data.data,
      totalCount: data.totalCount,
    };
  } catch (error) {
    console.error("Error fetching admins data:", error);
    throw error;
  }
};

// Fetch data for employees
export const fetchDataForEmployees = async ({ pageIndex, pageSize }) => {
  try {
    const url = `/api/Employee?PageSize=${pageSize}&PageIndex=${
      pageIndex + 1
    }&IncludeTotalCount=true`;

    const response = await axiosInstance.get(url);
    const { data } = response.data;

    return {
      rows: data.data,
      totalCount: data.totalCount,
    };
  } catch (error) {
    console.error("Error fetching employees data:", error);
    throw error;
  }
};

// Fetch data for the initial four tables
export const fetchFourInitialTables = async () => {
  const endpoints = ["Managers", "Device", "Admin", "Employee"];
  const pageSize = 5;

  try {
    // Create an array of Axios requests
    const requests = endpoints.map((endpoint) =>
      axiosInstance.get(`/api/${endpoint}?PageSize=${pageSize}`)
    );

    // Wait for all requests to complete
    const responses = await Promise.all(requests);

    // Extract the data from each response
    const data = responses.map((response) => response.data.data.data);

    // Log the data for debugging
    console.log("Fetched data:", data);

    // Return the data in an object with keys corresponding to each endpoint
    return {
      managers: data[0],
      devices: data[1],
      admins: data[2],
      employees: data[3],
    };
  } catch (error) {
    console.error("Error fetching initial tables data:", error);
    throw error;
  }
};
