import { IRootState } from "../store";

export const selectBooksData = (state: IRootState) => state.books.books;
export const selectBooksStatus = (state: IRootState) => state.books.status;
export const selectBooksError = (state: IRootState) => state.books.error;
