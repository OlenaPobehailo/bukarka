import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper, StyledCommonWrapper } from "styles/CommonStyled";
import { instance } from "../utils/fetchInstance";

import CartItem from "components/Home/CartItem/CartItem";

import { FlexWrapper, Label, Wrapper } from "./CommonPages.styled";
import { IBookItem } from "components/Book/Book.types";

const BookPage: React.FC = () => {
  const [book, setBook] = useState<IBookItem>();
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
        <Wrapper>
          <Label>Book page</Label>
          <FlexWrapper>
            {book ? (
              <CartItem
                _id={book._id}
                image={book.image}
                key={book._id}
                price={book.price}
                author={book.author}
                title={book.title}
                rating={book.rating}
                index={0}
              />
            ) : (
              <div>No book data</div>
            )}
          </FlexWrapper>
        </Wrapper>
      </PageWrapper>
    </StyledCommonWrapper>
  );
};

export default BookPage;
