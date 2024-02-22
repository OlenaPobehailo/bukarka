import { LogoUkr } from "assets/icons";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  /* position: fixed;
  bottom: 0;
  left: 0; */
  width: 100%;

  background-color: var(--bukarka-light-grey-2);
  padding: 48px 104px 24px;
  box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.25);
  /* z-index: 2; */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  padding-left: 72px;
  padding-right: 72px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogoUkr = styled(LogoUkr)`
  min-width: 120px;
  min-height: 71px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;

  width: 608px;
`;

export const StyledList = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: 16px;

  a {
    font-weight: 500;
    font-size: 16px;

    line-height: 1.5;
    color: var(--bukarka-black);
  }
`;
