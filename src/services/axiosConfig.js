import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      } else {
        console.log("No token found");
      }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem("token");  
      localStorage.removeItem("userId"); 
      window.location.href = "/login"; 
    }
    return Promise.reject(error);
  }
);

export const apiUrl = "http://localhost:8080";
