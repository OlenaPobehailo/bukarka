import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { instance } from "utils/fetchInstance";
import { BooksContextType, IBooksData, IBooksResponseData } from "./Book.types";

const BooksContext = createContext<BooksContextType | null>(null);

export const useBooks = (): BooksContextType => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};

const fetchBooks = async (): Promise<IBooksResponseData> => {
  const response = await instance.get("/api/books");
  return response;
};

export const BooksContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [booksData, setBooksData] = useState<IBooksData>({ data: [] });
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const allBooks = await fetchBooks();
        setBooksData(allBooks.data);
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
