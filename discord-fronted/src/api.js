import axios from "axios";
import { logout } from "./utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
});

apiClient.interceptors.request.use((config) => {
  const userDetails = localStorage.getItem("user");

  if (userDetails) {
    const token = JSON.parse(userDetails).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
}, (err)=> {
    return Promise.reject(err)
});

export const login = async (data) => {
  try {
    return await apiClient.post("/api/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/api/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
