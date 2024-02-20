import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
/* 0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 0;
    transform: translateY(110px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  } */

  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface StyledCatalogProps {
  open: boolean;
}

export const StyledCatalog = styled.div<StyledCatalogProps>`
  position: fixed;
  top: 104px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  animation: ${slideIn} 0.3s ease forwards;
`;
