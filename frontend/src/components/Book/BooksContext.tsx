import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { instance } from "utils/fetchInstance";
import { BooksContextType, IBookItem, IBooksData } from "./Book.types";

const BooksContext = createContext<BooksContextType | null>(null);

export const useBooks = (): BooksContextType => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};

const fetchBooks = async (): Promise<IBookItem[]> => {
  let books: IBookItem[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await instance.get<IBooksData>("/api/books", {
      params: { page },
    });

    books = books.concat(response.data.data);

    totalPages =
      response.data.total && response.data.limit
        ? Math.round(response.data.total / response.data.limit)
        : 1;
    page += 1;
  } while (page <= totalPages);

  return books;
};

export const BooksContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [booksData, setBooksData] = useState<IBookItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== id));
  };

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const allBooks = await fetchBooks();

        setBooksData(allBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    loadBooks();
  }, []);

  useEffect(() => {
    let savedFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");

    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <BooksContext.Provider
      value={{ booksData, favorites, addFavorite, removeFavorite }}
    >
      {children}
    </BooksContext.Provider>
  );
};
