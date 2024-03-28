import { useState } from "react";
import { SubTitle, Wrapper } from "../OrderCommonStyled";
import { Textarea } from "./Comment.styled";

const Comment: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <SubTitle>Коментар до замовлення</SubTitle>
      <Textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Залиште свій коментар (опціонально)"
      />
    </Wrapper>
  );
};

export default Comment;
