// import CategoryList from "components/CategoryList";
import data from "assets/data/data.json";
import {
  Item,
  SmallSubTitle,
  StyledBlock,
  StyledCatalog,
  StyledItem,
  Subtitle,
  // Subtitle,
  Title,
  Wrapper,
} from "./Catalog.styled";
import { useEffect, useState } from "react";
interface Category {
  title: string;
  links: string[];
  // [key: string]: any;
}

interface CatalogData {
  title: string;
  categories: Category[];
}

const Catalog: React.FC = () => {
  const [categories, setCategories] = useState<CatalogData[]>([]);

  useEffect(() => {
  //   fetch("https://6570466809586eff6641087a.mockapi.io/categories")
  //     .then((response) => response.json())
  //     .then((data) => setCategories(data))
  //     .catch((error) => console.error("Error fetching categories:", error));

  setCategories(data);

  }, []);

  console.log(categories);

  return (
    <Wrapper>
      <StyledCatalog>
        <Item>
          <Title>Усі книги</Title>
        </Item>

        {categories.map((item, index) => (
          <div key={index}>
            <Subtitle>{item.title}</Subtitle>
            <ul>
              {item.categories.map(
                (category: Category, categoryIndex: number) => (
                  <StyledBlock key={categoryIndex}>
                    <SmallSubTitle>{category.title}</SmallSubTitle>
                    <ul>
                      {category.links.map((link, linkIndex) => (
                        <StyledItem key={linkIndex}>{link}</StyledItem>
                      ))}
                    </ul>
                  </StyledBlock>
                )
              )}
            </ul>
          </div>
        ))}
        {/* <Item>
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
        </Item> */}
      </StyledCatalog>
    </Wrapper>
  );
};

export default Catalog;
