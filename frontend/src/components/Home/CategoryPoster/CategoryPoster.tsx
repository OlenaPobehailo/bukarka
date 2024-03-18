import { StyledPoster } from "./CategoryPoster.styled";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
}
const CategoryPoster: React.FC<IProps> = ({ title }) => {
  return (
    <StyledPoster>
      <Link to={`/catalog`}>
        <span>{title}</span>
      </Link>
    </StyledPoster>
  );
};

export default CategoryPoster;
