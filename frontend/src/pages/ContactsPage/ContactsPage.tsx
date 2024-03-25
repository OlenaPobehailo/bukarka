import { InfoPageWrapper, PageWrapper, StyledCommonWrapper } from "styles/CommonStyled";
import {
  Button,
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  Form,
  FormWrapper,
  Hint,
  Input,
  Label,
  Schedule,
  Text,
  TextArea,
  TextLast,
  Title,
  Top,
  Wrapper,
} from "./ContactsPage.styled";
import Contacts from "components/Contacts";
import Subscribe from "components/Subscribe";

const ContactsPage: React.FC = () => {
  return (
    <StyledCommonWrapper>
      <InfoPageWrapper>
        <Wrapper>
          <Title>Контакти і зворотний зв’язок</Title>
          <Top>
            <div>
              <h2>Онлайн книгарня “Букарка”</h2>
              <Text>Вітаємо у нашому онлайн книжковому магазині! </Text>
              <TextLast>
                Ми завжди раді допомогти вам з вибором книг та відповісти на
                ваші питання. Ви можете зв’язатися з нами за телефоном,
                електронною поштою, у месенджерах або за допомогою форми
                зворотного зв’язку нижче.
              </TextLast>
            </div>
            <div>
              <Schedule>
                Графік роботи: <span>Пн-Вс: 9:00 - 20:00</span>
              </Schedule>
              <Contacts />
            </div>
          </Top>
          <FormWrapper>
            <Form>
              <Label>Ваша електронна пошта*</Label>
              <Input placeholder="Email" />

              <Label>Ваше ім’я</Label>
              <Input placeholder="Ім’я" />

              <Label>Номер телефону</Label>
              <Input placeholder="+380" />

              <Label>Номер замовлення</Label>
              <Input placeholder="Введіть повний номер замовлення" />

              <Label>Повідомлення*</Label>
              <TextArea placeholder="Ваше повідомлення"></TextArea>
              <Hint>Максимальна кількість символів - 1000.</Hint>

              <CheckboxWrapper>
                <Checkbox />
                <CheckboxLabel>
                  Погоджуюсь з Політикою конфіденційності
                </CheckboxLabel>
              </CheckboxWrapper>

              <Button type="submit">Надіслати повідомлення</Button>
            </Form>
          </FormWrapper>
          <Subscribe />
        </Wrapper>
      </InfoPageWrapper>
    </StyledCommonWrapper>
  );
};

export default ContactsPage;
