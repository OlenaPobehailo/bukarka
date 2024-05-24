import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { instance } from "utils/fetchInstance";
import {
  BooksContextType,
  IBookItem,
  IBooksData,
  IBooksResponseData,
} from "./Book.types";

const BooksContext = createContext<BooksContextType | null>(null);

export const useBooks = (): BooksContextType => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};

// const fetchBooks = async (): Promise<IBooksResponseData> => {
//   const response = await instance.get("/api/books");
//   return response;
// };

const fetchBooks = async (): Promise<IBookItem[]> => {
  let books: IBookItem[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await instance.get<IBooksData>("/api/books", {
      params: { page },
    });

    console.log(response);
    books = books.concat(response.data.data);
    console.log(books);
    console.log(response.data.data);

    totalPages =
      response.data.total && response.data.limit
        ? Math.round(response.data.total / response.data.limit)
        : 1;
    page += 1;
  } while (page <= totalPages);

  console.log(books);

  return books;
};

export const BooksContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [booksData, setBooksData] = useState<IBookItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  console.log(booksData);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const allBooks = await fetchBooks();
        console.log(allBooks);
        setBooksData(allBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    loadBooks();
  }, []);

  useEffect(() => {
    let savedFavorites = JSON.parse(localStorage.getItem("favorites") || "");
    savedFavorites = Object.keys(savedFavorites);

    setFavorites(savedFavorites);
  }, []);

  return (
    <BooksContext.Provider value={{ booksData, favorites }}>
      {children}
    </BooksContext.Provider>
  );
};
