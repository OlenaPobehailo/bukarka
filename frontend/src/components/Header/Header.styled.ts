import { LogoUkr } from "assets/icons";
import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 16px;

  background-color: var(--bukarka-light-grey-2);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);

  z-index: 1;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  padding-left: 72px;
  padding-right: 72px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const StyledLogoUkr = styled(LogoUkr)`
  min-width: 120px;
  min-height: 71px;
`;

export const CatalogButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  padding: 11px 8px;

  background-color: var(--bukarka-yellow);

  font-weight: 600;
  font-size: 16px;
  color: var(--bukarka-black);
`;

export const ButtonWrapper = styled.div``;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 1px;
`;

export const Input = styled.input`
  padding: 8px 16px;
  width: 384px;
  min-height: 40px;

  border: none;
  &:focus {
    outline: 1px solid var(--bukarka-orange);
  }
`;

export const FormButton = styled.button`
  padding: 8px 16px;
  border: none;

  background: var(--bukarka-orange);
  color: var(--bukarka-black);

  font-weight: 600;
  font-size: 16px;
`;

// export const Wrapper = styled.p`
//   position: relative;
// `;
