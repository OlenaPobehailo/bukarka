// import CategoryList from "components/CategoryList";
import data from "assets/data/data.json";
import {
  Item,
  SmallSubTitle,
  StyledBlock,
  StyledCatalog,
  StyledItem,
  SubtitleLink,
  TitleLink,
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
          <TitleLink to="">Усі книги</TitleLink>
        </Item>

        {categories.map((item, index) => (
          <div key={index}>
            <SubtitleLink to="">{item.title}</SubtitleLink>
            <ul>
              {item.categories.map(
                (category: Category, categoryIndex: number) => (
                  <li>
                    <StyledBlock key={categoryIndex}>
                      <SmallSubTitle to="">{category.title}</SmallSubTitle>
                      <ul>
                        {category.links.map((link, linkIndex) => (
                          <li>
                            <StyledItem to="" key={linkIndex}>
                              {link}
                            </StyledItem>
                          </li>
                        ))}
                      </ul>
                    </StyledBlock>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </StyledCatalog>
    </Wrapper>
  );
};

export default Catalog;
