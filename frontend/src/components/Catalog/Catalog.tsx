import CategoryList from "components/CategoryList";
import { StyledCatalog } from "./Catalog.styled";
import {
  education,
  fiction,
  foreign,
  kids,
  presents,
  scientific,
} from "assets/data";

export interface CatalogProps {
  open: boolean;
  onClose: () => void;
}

const Catalog: React.FC<CatalogProps> = ({ open }) => {
  return (
    <StyledCatalog open={open}>
      <h2>Дитяча</h2>
      <CategoryList categories={kids} />
      <h2>Художня</h2>
      <CategoryList categories={fiction} />
      <h2>Навчальна</h2>
      <CategoryList categories={education} />
      <h2>Нехудожня/наукова</h2>
      <CategoryList categories={scientific} />
      <h2>Подарункові видання</h2>
      <CategoryList categories={presents} />
      <h2>Іноземними мовами</h2>
      <CategoryList categories={foreign} />
    </StyledCatalog>
  );
};

export default Catalog;
