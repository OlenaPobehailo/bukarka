import { useBooks } from "components/Book/BooksContext";
import Favorites from "components/Favorites/Favorites";
import { PageWrapper, StyledCommonWrapper } from "styles/CommonStyled";

const FavoritePage: React.FC = () => {
  const { booksData, favorites } = useBooks();

  const books = booksData.data;

  const favoriteBooks = books.filter((book) => favorites.includes(book._id));

  return (
    <StyledCommonWrapper>
      <PageWrapper>
        <Favorites data={favoriteBooks} />
      </PageWrapper>
    </StyledCommonWrapper>
  );
};

export default FavoritePage;
