import CategoryList from "components/CategoryList";
import {
  education,
  fiction,
  foreign,
  kids,
  presents,
  scientific,
} from "assets/data";
import {
  Item,
  StyledCatalog,
  Subtitle,
  Title,
  Wrapper,
} from "./Catalog.styled";

const Catalog: React.FC = () => {
  return (
    <Wrapper>
      <StyledCatalog>
        <Item>
          <Title>Всі книги</Title>
        </Item>
        <Item>
          <Subtitle>Дитяча</Subtitle>
          <CategoryList categories={kids} />
        </Item>
        <Item>
          <Subtitle>Художня</Subtitle>
          <CategoryList categories={fiction} />
        </Item>
        <Item>
          <Subtitle>Навчальна</Subtitle>
          <CategoryList categories={education} />
        </Item>
        <Item>
          <Subtitle>Нехудожня/наукова</Subtitle>
          <CategoryList categories={scientific} />
        </Item>
        <Item>
          <Subtitle>Подарункові видання</Subtitle>
          <CategoryList categories={presents} />
        </Item>
        <Item>
          <Subtitle>Іноземними мовами</Subtitle>
          <CategoryList categories={foreign} />
        </Item>
      </StyledCatalog>
    </Wrapper>
  );
};

export default Catalog;
