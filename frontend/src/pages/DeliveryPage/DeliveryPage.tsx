import {
  Aside,
  InfoPageWrapper,
  Main,
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
    const headerHeight = 108;
    if (element) {
      const topOffset = element.offsetTop - headerHeight;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledCommonWrapper>
      <InfoPageWrapper>
        <Aside>
          <Label>Доставка, оплата і повернення</Label>
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
              Доставка замовлень на суму 500 грн та вище &mdash; безкоштовна!
            </AccentText>

            <SubTitle id="delivery">Доступні способи доставки</SubTitle>
            <HiddenSubTitle>Способи отримання замовлення</HiddenSubTitle>

            <StyledList>
              <li>
                <h4>Самовивіз з відділення Укрпошти</h4>
              </li>
              <li>
                <h4>Самовивіз з відділення Нової Пошти</h4>
              </li>
              <li>
                <h4>Самовивіз з поштомату Нової Пошти</h4>
              </li>
              <li>
                <h4>Доставка кур'єром Нової Пошти</h4>
              </li>
            </StyledList>

            <SubTitle id="payment">Доступні способи оплати</SubTitle>
            <HiddenSubTitle>
              способи оплати при різних методах доставки
            </HiddenSubTitle>

            <StyledList>
              <li>
                <h4>Онлайн оплата карткою</h4>
              </li>
              <li>
                <h4>Післяплата</h4>
              </li>
              <li>
                <h4>За реквізитами</h4>
              </li>
            </StyledList>

            <p>Зверніть увагу:</p>
            <p>
              При доставці у відділення Укрпошти, Нової Пошти та кур’єром Нової
              Пошти вам будуть доступні всі способи оплати.
            </p>
            <p>
              При доставці у поштомат Нової Пошти доступна онлайн оплата
              карткою.
            </p>

            <SubTitle id="return">Повернення товару</SubTitle>

            <Description>
              Ми розуміємо, що іноді можуть виникати ситуації, коли вам потрібно
              повернути придбаний товар. У нашому книжковому онлайн магазині ми
              пропонуємо прості та прозорі умови повернення товару, щоб зробити
              цей процес максимально зручним для вас.
            </Description>

            <ShiftRight>
              <SmallSubTitle>Основні умови</SmallSubTitle>
              <StyledList>
                <li>
                  <h4>Повернення протягом 14 днів</h4>
                  <p>
                    Ви маєте право повернути товар в належному вигляді протягом
                    14 днів з моменту його отримання без зазначення причини
                    повернення.
                  </p>
                </li>
                <li>
                  <h4>
                    Товар повинен бути в стані, придатному для повторного
                    продажу:
                  </h4>
                  <p>
                    Для повернення товар повинен бути без пошкоджень та слідів
                    використання.
                  </p>
                </li>
              </StyledList>
            </ShiftRight>
            <ShiftRight>
              <SmallSubTitle>Процес повернення</SmallSubTitle>
              <StyledList>
                <li>
                  <h4>Зв'яжіться з нами:</h4>
                  <p>
                    Перш ніж повертати товар, будь ласка, зв'яжіться з нашим
                    сервісним центром для отримання інструкцій.
                  </p>
                </li>
                <li>
                  <h4>Підготуйте товар:</h4>
                  <p>
                    Перед відправленням товару нам переконайтеся, що він
                    відповідає умовам повернення.
                  </p>
                </li>
                <li>
                  <h4>Повернення коштів:</h4>
                  <p>
                    Після отримання та перевірки поверненого товару ми повернемо
                    кошти на рахунок, з якого була здійснена оплата, протягом
                    3-х банківських днів.
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
        <Wrapper>
          <Subscribe />
        </Wrapper>
      </InfoPageWrapper>
    </StyledCommonWrapper>
  );
};

export default DeliveryPage;
