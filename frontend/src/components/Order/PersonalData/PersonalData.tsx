import { SubTitle, Wrapper } from "../OrderCommonStyled";
import { Input, Label, PersonalDataInputs } from "./PersonalData.styled";

const PersonalData: React.FC = () => {
  return (
    <Wrapper>
      <SubTitle>Персональні дані замовника</SubTitle>
      <PersonalDataInputs>
        <li>
          <Label htmlFor="name">Ваше ім’я*</Label>
          <Input type="text" name="name" placeholder="Ім’я" />
        </li>
        <li>
          <Label htmlFor="last-name">Ваше прізвище*</Label>
          <Input type="text" name="last-name" placeholder="Прізвище" />
        </li>

        <li>
          <Label htmlFor="email">Електронна пошта*</Label>
          <Input type="email" name="email" placeholder="Email" />
        </li>
        <li>
          <Label htmlFor="name">Номер телефону*</Label>
          <Input type="phone" name="phone" placeholder="+380" />
        </li>
      </PersonalDataInputs>
    </Wrapper>
  );
};

export default PersonalData;
