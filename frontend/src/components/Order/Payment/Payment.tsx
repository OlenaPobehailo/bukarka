import { useState } from "react";
import { Label, SubTitle, Wrapper } from "../OrderCommonStyled";
import { RadioButton, RadioInput, RadioWrapper } from "./Payment.styled";

const Payment: React.FC = () => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedRadio(value);
  };

  return (
    <Wrapper>
      <SubTitle>Оплата</SubTitle>

      <RadioWrapper>
        <Label>Оберіть спосіб оплати*</Label>
        <RadioButton>
          <RadioInput
            type="radio"
            value="option1"
            checked={selectedRadio === "option1"}
            onChange={() => handleOptionChange("option1")}
          />
          <span>Онлайн оплата карткою</span>
        </RadioButton>
        <RadioButton>
          <RadioInput
            type="radio"
            value="option2"
            checked={selectedRadio === "option2"}
            onChange={() => handleOptionChange("option2")}
          />
          <span>Післяплата</span>
        </RadioButton>
        <RadioButton>
          <RadioInput
            type="radio"
            value="option3"
            checked={selectedRadio === "option3"}
            onChange={() => handleOptionChange("option3")}
          />
          <span>За реквізитами</span>
        </RadioButton>
      </RadioWrapper>
    </Wrapper>
  );
};

export default Payment;
