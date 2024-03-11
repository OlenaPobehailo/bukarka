import axios from "axios";

export const instance = axios.create({
  baseURL: "https://bukarka.onrender.com/",
  // baseURL: "http://localhost:4000/",
});
