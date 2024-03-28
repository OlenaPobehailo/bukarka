import PersonalData from "components/Order/PersonalData/PersonalData";
import {
  FlexWrapper,
  LeftPart,
  OrderPageWrapper,
  RightPart,
  Title,
} from "./OrderPage.styled";
import { StyledCommonWrapper } from "styles/CommonStyled";
import Delivery from "components/Order/Delivery/Delivery";
import Payment from "components/Order/Payment/Payment";
import Comment from "components/Order/Comment/Comment";
import BookData from "components/Order/BookData/BookData";
import OrderData from "components/Order/OrderData/OrderData";
import Submit from "components/Order/Submit/Submit";
import { useState } from "react";

const OrderPage: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <StyledCommonWrapper>
      <OrderPageWrapper>
        <Title>Оформлення замовлення</Title>
        <FlexWrapper>
          <LeftPart>
            <PersonalData />
            <Delivery />
            <Payment />
            <Comment />
          </LeftPart>

          <RightPart>
            <BookData />
            <OrderData />
            <Submit onChange={handleCheckboxChange} />
          </RightPart>
        </FlexWrapper>
      </OrderPageWrapper>
    </StyledCommonWrapper>
  );
};

export default OrderPage;
