import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
