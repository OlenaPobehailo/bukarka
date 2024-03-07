// import CategoryList from "components/CategoryList";
import { instance } from "utils/fetchInstance";
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
  subcategories: Category[];
}

const Catalog: React.FC = () => {
  const [categories, setCategories] = useState<CatalogData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
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
              {item.subcategories.map(
                (subcategory: Category, categoryIndex: number) => (
                  <li>
                    <StyledBlock key={categoryIndex}>
                      <SmallSubTitle to="">{subcategory.title}</SmallSubTitle>
                      <ul>
                        {subcategory.links.map((link, linkIndex) => (
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
