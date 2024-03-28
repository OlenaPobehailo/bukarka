import { SubTitleBlue } from "../OrderCommonStyled";
import { BookDataWrapper } from "./BookData.styled";

const BookData: React.FC = () => {
  return (
    <BookDataWrapper>
      <SubTitleBlue>Ваше замовлення</SubTitleBlue>
      BookData
    </BookDataWrapper>
  );
};

export default BookData;
