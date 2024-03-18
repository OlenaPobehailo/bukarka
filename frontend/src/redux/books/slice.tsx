import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooksList } from "./operations";

export interface Books {
  age: string;
  author: string;
  bestsellers: boolean;
  category: string;
  cover: string;
  description: string;
  format: string;
  genre: [];
  language: string;
  new: boolean;
  pages: number;
  price: number;
  promotions: boolean;
  publisher: string;
  rating: number;
  subcategory: string;
  title: string;
  year: string;
  _id: string;
}

interface BooksState {
  books: Books[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  status: "idle",
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchBooksList.fulfilled,
        (state, action: PayloadAction<Books[]>) => {
          state.status = "succeeded";
          state.books = action.payload;
        },
      )
      .addCase(fetchBooksList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const books = booksSlice.reducer;

// export const selectBooksData = (state: IRootState) => state.books.books;
// export const selectBooksStatus = (state: IRootState) => state.books.status;
// export const selectBooksError = (state: IRootState) => state.books.error;

// interface CounterState {
//   value: number;
// }
//
// const initialState: CounterState = {
//   value: 0,
// };
//
// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     incremented: (state) => {
//       state.value += 1;
//     },
//     decremented: (state) => {
//       state.value -= 1;
//     },
//   },
// });
//
// export const { incremented, decremented } = counterSlice.actions;
//
// export default counterSlice.reducer;
