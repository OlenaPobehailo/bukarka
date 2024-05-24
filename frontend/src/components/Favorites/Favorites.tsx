import { IBookItem, IBooksData } from "components/Book/Book.types";
import CartItem from "components/Home/CartItem/CartItem";
import { FlexWrapper, Label, Wrapper } from "pages/CommonPages.styled";

const Favorites: React.FC<IBooksData> = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <Label>Обране</Label>
      <FlexWrapper>
        {data.map((item, index) => (
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
        ))}
      </FlexWrapper>
    </Wrapper>
  );
};

export default Favorites;
