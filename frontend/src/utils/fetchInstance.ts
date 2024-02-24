import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6570466809586eff6641087a.mockapi.io/categories",
});