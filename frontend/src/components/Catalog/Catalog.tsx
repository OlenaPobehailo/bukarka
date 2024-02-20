import { StyledCatalog } from "./Catalog.styled";

export interface CatalogProps {
  open: boolean;
  onClose: () => void;
}

const Catalog: React.FC<CatalogProps> = ({ open }) => {
  return (
    <StyledCatalog open={open}>
      <h1>Тут буде каталог</h1>
      <ul>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
        <li>Тут буде каталог</li>
      </ul>
    </StyledCatalog>
  );
};

export default Catalog;
