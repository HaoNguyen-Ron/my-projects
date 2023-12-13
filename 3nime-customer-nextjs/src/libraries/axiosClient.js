import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'https://group3-3nime-nodejs-customer.onrender.com',
  headers: { "Content-Type": "application/json" },
});