import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ADMIN_URL, // Your base URL here
  withCredentials: true, // Include credentials in requests
});

// Add a request interceptor to include the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle expired tokens
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Token has expired, remove it from local storage
      localStorage.removeItem("accessToken");
      // Redirect to login Page
      window.location.href = "/admin-login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
