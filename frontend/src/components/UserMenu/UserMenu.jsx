import { AvatarIcon, CartIcon, HeartIcon } from "assets/icons";
import React from "react";
import { IconWrapper, StyledUserMenu, UserMenuItem } from "./UserMenu.styled";

const UserMenu = () => {
  return (
    <StyledUserMenu>
      <UserMenuItem>
        <IconWrapper>
          <HeartIcon />
        </IconWrapper>
        <p>Обране</p>
      </UserMenuItem>

      <UserMenuItem>
        <IconWrapper>
          <CartIcon />
        </IconWrapper>
        <p>Кошик</p>
      </UserMenuItem>
      
      <UserMenuItem>
        <IconWrapper>
          <AvatarIcon />
        </IconWrapper>

        <p>Вхід / Реєстрація</p>
      </UserMenuItem>
    </StyledUserMenu>
  );
};

export default UserMenu;
