import axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
});

export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
})