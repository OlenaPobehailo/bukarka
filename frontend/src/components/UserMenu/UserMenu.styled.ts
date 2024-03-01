import styled from "styled-components";

export const StyledUserMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const UserMenuItem = styled.li`
  min-height: 48px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: var(--bukarka-black);
  background-color: transparent;

  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;

export const AuthButton = styled(Button)`
  width: 112px;
  height: 48px;
`;

export const CartButton = styled(Button)`
  width: 56px;
  height: 48px;
`;

export const FavoriteButton = styled(Button)`
  width: 56px;
  height: 48px;
`;
