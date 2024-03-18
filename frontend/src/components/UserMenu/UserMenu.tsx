import { AvatarIcon, CartIcon, HeartIcon } from "assets/icons";
import {
  AuthButton,
  CartButton,
  FavoriteButton,
  IconWrapper,
  StyledUserMenu,
  UserMenuItem,
} from "./UserMenu.styled";
import { useState } from "react";
import Modal from "components/Modal";
import Login from "components/Auth/Login/Login";

const UserMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledUserMenu>
        <UserMenuItem>
          <FavoriteButton>
            <IconWrapper>
              <HeartIcon />
            </IconWrapper>
            Обране
          </FavoriteButton>
        </UserMenuItem>

        <UserMenuItem>
          <CartButton>
            <IconWrapper>
              <CartIcon />
            </IconWrapper>
            Кошик
          </CartButton>
        </UserMenuItem>

        <UserMenuItem>
          <AuthButton onClick={showModal}>
            <IconWrapper>
              <AvatarIcon />
            </IconWrapper>
            Вхід / Реєстрація
          </AuthButton>
        </UserMenuItem>
      </StyledUserMenu>
      {isModalOpen && (
        <Modal close={closeModal} showCloseButton={true}>
          <Login title="Вхід до акаунту" prompt="Реєстрація нового акаунту" />
        </Modal>
      )}
    </>
  );
};

export default UserMenu;
