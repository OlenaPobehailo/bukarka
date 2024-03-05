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
import Modal from "components/Modal";
import { StyledCommonWrapper } from "styles/CommonStyled";
import UserMenu from "components/UserMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledHeader>
        {/* <StyledCommonWrapper> */}
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
        {/* </StyledCommonWrapper> */}
      </StyledHeader>
      {isOpen && (
        <Modal close={closeModal} showCloseButton={false}>
          <Catalog />
        </Modal>
      )}
    </>
  );
};

export default Header;
