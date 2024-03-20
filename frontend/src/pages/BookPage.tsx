import { PageWrapper, StyledCommonWrapper } from "styles/CommonStyled";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../utils/fetchInstance";

interface IBook {
  title: string;
  author: string;
  price: number;
  rating: number;
}

const BookPage: React.FC = () => {
  const [book, setBook] = useState<IBook>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await instance.get(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <StyledCommonWrapper>
      <PageWrapper>
        <h1>Book page</h1>
        {book ? (
          <div>
            <h2>Назва книги: {book.title}</h2>
            <p>Автор: {book.author}</p>
            <p>Ціна: {book.price}</p>
            <p>Рейтинг: {book.rating}</p>
          </div>
        ) : (
          <div>No book data</div>
        )}
      </PageWrapper>
    </StyledCommonWrapper>
  );
};

export default BookPage;
