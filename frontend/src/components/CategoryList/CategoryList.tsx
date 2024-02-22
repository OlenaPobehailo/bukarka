import { StyledBlock, StyledItem, Title } from "./CategoryList.styled";

interface Category {
  [key: string]: Category[] | string[];
}

interface CategoryListProps {
  categories: (Category | string)[];
}

const renderCategory = (category: Category | string, index: number) => {
  if (typeof category === "string") {
    return <StyledBlock key={index}>{category}</StyledBlock>;
  } else {
    return (
      <StyledBlock key={index}>
        {Object.entries(category).map(([title, links]) => (
          <div key={title}>
            <Title>{title}</Title>
            <ul>
              {(links as string[]).map((link: string, linkIndex: number) => (
                <StyledItem key={linkIndex}>{link}</StyledItem>
              ))}
            </ul>
          </div>
        ))}
      </StyledBlock>
    );
  }
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <>{categories.map((category, index) => renderCategory(category, index))}</>
  );
};

export default CategoryList;
