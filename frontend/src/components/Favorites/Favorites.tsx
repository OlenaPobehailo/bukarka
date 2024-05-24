import { IBooksData } from "components/Book/Book.types";
import CartItem from "components/Home/CartItem/CartItem";
import { FlexWrapper, Label, Wrapper } from "pages/CommonPages.styled";

const Favorites: React.FC<IBooksData> = ({ data }) => {
  return (
    <Wrapper>
      <Label>Обране</Label>
      <FlexWrapper>
        {data.length ? (
          data.map((item, index) => (
            <CartItem
              _id={item._id}
              title={item.title}
              author={item.author}
              image={item.image}
              price={item.price}
              index={index}
              rating={item.rating}
              key={index}
            />
          ))
        ) : (
          <div>No favorite books</div>
        )}
      </FlexWrapper>
    </Wrapper>
  );
};

export default Favorites;
