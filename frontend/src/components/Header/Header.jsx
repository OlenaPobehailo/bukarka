import { BurgerIcon } from "assets/icons";
import {
  ButtonWrapper,
  CatalogButton,
  FormButton,
  Input,
  StyledForm,
  StyledHeader,
  StyledLogoUkr,
  Wrapper,
} from "./Header.styled";
import { useState } from "react";
import LanguagesSwitcher from "components/LanguagesSwitcher";
import Catalog from "components/Catalog";
import UserMenu from "components/UserMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <UserMenu />
        </Wrapper>
      </StyledHeader>
      {isOpen && <Catalog onClose={toggleModal} />}
    </>
  );
};

export default Header;
