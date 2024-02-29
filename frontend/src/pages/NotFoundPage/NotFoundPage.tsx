import { PageWrapper, StyledCommonWrapper } from "styles/CommonStyled";
import {
  Image,
  Main,
  NotFoundInfo,
  StyledLink,
  Text,
  Title,
} from "./NotFoundPage.styled";
import {images} from "assets/images";


const NotFoundPage: React.FC = () => {
  return (
    <StyledCommonWrapper>
      <PageWrapper>
        <Main>
          <NotFoundInfo>
            <Title>Сторінка не знайдена.</Title>
            <Text>
              Спробуйте знайти потрібний вам товар за допомогою рядка пошука або
              в каталозі. Ви також можете зв’язатися з нами на сторінці Контакти
              і зворотний зв’язок.
            </Text>

            {/* <StyledLink to={backRef.current}>Назад</StyledLink> */}
            <StyledLink to="/">Головна</StyledLink>
            <StyledLink to="/contacts">Контакти</StyledLink>
          </NotFoundInfo>
          <Image src={images.NotFoundImage} alt="Букарка - онлайн-книгарня. Сторінка не знайдена" />
        </Main>
      </PageWrapper>
    </StyledCommonWrapper>
  );
};

export default NotFoundPage;
