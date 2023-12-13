import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://group3-3nime-nodejs-admin.onrender.com',
  // baseURL: 'http://localhost:9000',
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;
