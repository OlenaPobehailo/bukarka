import styled from "styled-components";

export const StyledUserMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const UserMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-height: 48px;

  p {
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: var(--bukarka-black);
  }
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
`;
