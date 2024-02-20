import { useState } from "react";
import { Link } from "react-router-dom";
import {
  // BurgerIcon,
  ButtonWrapper,
  CatalogButton,
  FormButton,
  Input,
  StyledForm,
  StyledHeader,
  StyledLogoUkr,
  Wrapper,
} from "./Header.styled";
import LanguagesSwitcher from "components/LanguagesSwitcher";
import Catalog from "components/Catalog";
import { BurgerIcon } from "assets/icons";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Link to="/">
            <StyledLogoUkr />
          </Link>
          <ButtonWrapper>
            <CatalogButton onClick={toggleModal}>
              <BurgerIcon />
              Каталог
            </CatalogButton>
          </ButtonWrapper>
          <StyledForm>
            <Input type="text" value="" />
            <FormButton>Знайти</FormButton>
          </StyledForm>
          <LanguagesSwitcher />
        </Wrapper>
      </StyledHeader>
      {isOpen && <Catalog open={isOpen} onClose={toggleModal} />}
    </>
  );
};

export default Header;
