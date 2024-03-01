import styled, { keyframes, css } from "styled-components";
import theme from "styles/theme";

const { colors } = theme;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;

  inset: 0;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

export const ModalContent = styled.div<{ animation?: string }>`
  position: relative;
  max-height: 90vh;
  overflow-y: auto;

  /* overflow-y: auto; */
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  background: var(--bukarka-white);

  ${({ animation }) =>
    animation === "fade" &&
    css`
      animation: ${fadeIn} 0.3s ease forwards;
    `}

  ${({ animation }) =>
    animation === "slide" &&
    css`
      animation: ${slideIn} 0.3s ease forwards;
    `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
