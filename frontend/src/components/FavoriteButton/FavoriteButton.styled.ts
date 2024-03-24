import styled from "styled-components";
import React from "react";

interface StyledHeartProps extends React.HTMLAttributes<HTMLDivElement> {
  isFavorite: boolean;
}
export const StyledHeart = styled.div<StyledHeartProps>`
  position: absolute;
  top: 0;
  right: 0;
  svg path:hover {
    stroke: #3d7efd;
    cursor: pointer;
  }

  svg path {
    fill: ${(props) => (props.isFavorite ? "#3D7EFD" : "#FFFBFF")};
  }
`;
