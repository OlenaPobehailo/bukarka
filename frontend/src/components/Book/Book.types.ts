export interface IBookItem {
  _id: string;
  title: string;
  author: string;
  image: string | null;
  price: number;
  rating: number;
  index: number;
}

export interface IBooksResponseData {
  data: IBooksData;
}

export interface IBooksData {
  data: IBookItem[];
}

export interface BooksContextType {
  booksData: IBooksData;
  favorites: string[];
}
