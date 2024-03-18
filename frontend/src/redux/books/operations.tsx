import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooksList = createAsyncThunk(
  "books/fetchBooksList",
  async (_, thunkAPI) => {
    const response = await axios.get(
      "https://bukarka.onrender.com/api/books/new",
    );
    return response.data.data;
  },
);
