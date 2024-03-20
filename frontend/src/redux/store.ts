import { configureStore } from "@reduxjs/toolkit";
import { books } from "./books/slice";

export const store = configureStore({
  reducer: {
    books,
  },
});

export type IAppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
