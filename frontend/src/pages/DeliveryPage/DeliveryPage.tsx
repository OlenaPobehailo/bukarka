import {
  Aside,
  Main,
  PageWrapper,
  StyledCommonWrapper,
} from "styles/CommonStyled";

import {
  AboutDelivery,
  AccentText,
  Description,
  HiddenSubTitle,
  HiddenTitle,
  Label,
  Menu,
  MenuItem,
  ShiftRight,
  SmallSubTitle,
  StyledList,
  SubTitle,
  Wrapper,
} from "./DeliveryPage.styled";
import Subscribe from "components/Subscribe";

const DeliveryPage: React.FC = () => {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledCommonWrapper>
      <PageWrapper>
        <Aside>
          <Label>Доставка і оплата</Label>
          <Menu>
            <MenuItem>
              <button onClick={() => handleLinkClick("delivery")}>
                Доставка
              </button>
            </MenuItem>
            <MenuItem id="">
              <button onClick={() => handleLinkClick("payment")}>Оплата</button>
            </MenuItem>
            <MenuItem id="">
              <button onClick={() => handleLinkClick("return")}>
                Повернення
              </button>
            </MenuItem>
          </Menu>
        </Aside>
        <Main>
          <AboutDelivery>
            <HiddenTitle>Умови доставки оплати і повернення</HiddenTitle>
            <AccentText>
              Доставка замовлень на суму 500 грн та вище - безкоштовна!
            </AccentText>

            <SubTitle id="delivery">Доступні способи доставки</SubTitle>
            <HiddenSubTitle>Способи отримання замовлення</HiddenSubTitle>

            <StyledList>
              <li>
                <h4>Самовивіз з відділення УкрПошти: </h4>
                <p>
                  Ви можете самостійно забрати своє замовлення з будь-якого
                  відділення УкрПошти за вказаною адресою.
                </p>
              </li>
              <li>
                <h4>Самовивіз з відділення Нової Пошти: </h4>
                <p>
                  Оптимальний варіант для тих, хто користується послугами Нової
                  Пошти. Просто виберіть зручне для вас відділення та заберіть
                  своє замовлення.
                </p>
              </li>
              <li>
                <h4>Самовивіз з поштомату Нової Пошти: </h4>
                <p>
                  Швидкий та зручний спосіб отримати свої книги. Просто вкажіть
                  номер поштомату, і ваше замовлення буде доступне для забору.
                </p>
              </li>
              <li>
                <h4>
                  Доставка кур'єром Нової Пошти на адресу, вказану замовником:{" "}
                </h4>
                <p>
                  Якщо вам зручніше отримати замовлення безпосередньо до дому чи
                  офісу, скористайтеся цією опцією.
                </p>
              </li>
            </StyledList>

            <SubTitle id="payment">Доступні способи оплати</SubTitle>
            <HiddenSubTitle>
              способи оплати при різних методах доставки
            </HiddenSubTitle>

            <StyledList>
              <li>
                <h4>При доставці у відділення Нової Пошти:</h4>
                <p>
                  Оплата онлайн або при отриманні замовлення через систему "Нова
                  Пошта", в тому числі і наложеним платежем.
                </p>
              </li>
              <li>
                <h4>При доставці у поштомат Нової пошти: </h4>
                <p>
                  Оплата замовлення доступна тільки онлайн через систему "Нова
                  Пошта".
                </p>
              </li>
              <li>
                <h4>При доставці кур'єром Нової Пошти: </h4>
                <p>Можливість оплати онлайн або при отриманні кур'єру.</p>
              </li>
              <li>
                <h4>При доставці у відділення Укрпошти: </h4>
                <p>
                  Оплата замовлення доступна як онлайн, так і при отриманні.
                </p>
              </li>
            </StyledList>

            <SubTitle id="return">Повернення товару</SubTitle>

            <Description>
              Ми розуміємо, що іноді можуть виникати ситуації, коли вам потрібно
              повернути куплений товар. У нашому книжковому онлайн магазині ми
              пропонуємо прості та прозорі умови повернення товару, щоб зробити
              цей процес максимально зручним для вас.
            </Description>

            <ShiftRight>
              <SmallSubTitle>Основні умови</SmallSubTitle>
              <StyledList>
                <li>
                  <h4>Повернення протягом 14 днів: </h4>
                  <p>
                    Ви маєте право повернути товар протягом 14 днів з моменту
                    його отримання без вказівки причини.
                  </p>
                </li>
                <li>
                  <h4>
                    Товар повинен бути в стані, придатному для повторного
                    продажу:{" "}
                  </h4>
                  <p>
                    Для повернення товар повинен бути в оригінальній упаковці та
                    стані, без слідів використання чи пошкоджень.
                  </p>
                </li>
                <li>
                  <h4>Вартість повернення:</h4>
                  <p>
                    Ви несете вартість повернення товару, якщо причина
                    повернення не пов'язана з дефектами товару.
                  </p>
                </li>
              </StyledList>
            </ShiftRight>
            <ShiftRight>
              <SmallSubTitle>Процес повернення</SmallSubTitle>
              <StyledList>
                <li>
                  <h4>Зв'яжіться з нами: </h4>
                  <p>
                    Перш ніж повертати товар, будь ласка, зв'яжіться з нашим
                    сервісним центром для отримання інструкцій та відправлення
                    повідомлення про повернення.
                  </p>
                </li>
                <li>
                  <h4>Підготуйте товар:</h4>
                  <p>
                    Перед відправленням товару нам, переконайтеся, що він
                    відповідає умовам повернення.
                  </p>
                </li>
                <li>
                  <h4>Повернення коштів:</h4>
                  <p>
                    Після отримання та перевірки поверненого товару ми проведемо
                    повернення коштів за придбаний товар на ваш рахунок у
                    найкоротші терміни.
                  </p>
                </li>
              </StyledList>
            </ShiftRight>
            <Description>
              Ми цінуємо кожного нашого клієнта і робимо все можливе, щоб
              забезпечити вам приємний досвід покупок у нашому магазині. Якщо у
              вас виникли будь-які питання щодо повернення товару, будь ласка,
              зв'яжіться з нашою службою підтримки, і ми з радістю вам
              допоможемо.
            </Description>
          </AboutDelivery>
        </Main>
      </PageWrapper>
      <Wrapper>
        <Subscribe />
      </Wrapper>
    </StyledCommonWrapper>
  );
};

export default DeliveryPage;
