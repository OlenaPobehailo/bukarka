interface Category {
  [key: string]: Category[] | string[];
}

interface CategoryListProps {
  categories: (Category | string)[];
}

const renderCategory = (category: Category | string, index: number) => {
  if (typeof category === "string") {
    return <li key={index}>{category}</li>;
  } else {
    return (
      <li key={index}>
        {Object.entries(category).map(([title, books]) => (
          <div key={title}>
            <h4>{title}</h4>
            <ul>
              {(books as string[]).map((book: string, bookIndex: number) => (
                <li key={bookIndex}>{book}</li>
              ))}
            </ul>
          </div>
        ))}
      </li>
    );
  }
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <>{categories.map((category, index) => renderCategory(category, index))}</>
  );
};

export default CategoryList;
