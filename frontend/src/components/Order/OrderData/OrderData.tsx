import { Label, SubTitleBlue } from "../OrderCommonStyled";
import {
  BlockWrapper,
  Data,
  OrderDataWrapper,
  SmallSubTitle,
  Text,
} from "./OrderData,styled";

const OrderData: React.FC = () => {
  return (
    <OrderDataWrapper>
      <SubTitleBlue>Дані для замовлення</SubTitleBlue>

      <BlockWrapper>
        <SmallSubTitle>Замовник</SmallSubTitle>
        <Data>Вкажіть ім’я та прізвище</Data>
        <Data>Вкажіть email</Data>
        <Data>Вкажіть номер телефону</Data>
      </BlockWrapper>

      <BlockWrapper>
        <SmallSubTitle>Доставка</SmallSubTitle>
        <Text>Доставка кур’єром Нової Пошти за адресою:</Text>
        <Data>Вкажіть адресу доставки</Data>
      </BlockWrapper>

      <BlockWrapper>
        <SmallSubTitle>Оплата</SmallSubTitle>
        <Data>Післяплата</Data>
      </BlockWrapper>

      <BlockWrapper>
        <SmallSubTitle>Коментар</SmallSubTitle>
        <Data>Залиште коментар (опціонально)</Data>
      </BlockWrapper>
    </OrderDataWrapper>
  );
};

export default OrderData;
