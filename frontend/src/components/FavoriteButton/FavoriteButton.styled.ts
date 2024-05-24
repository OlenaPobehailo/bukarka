import styled from "styled-components";
import React from "react";

interface StyledHeartProps extends React.HTMLAttributes<HTMLDivElement> {
  isfavorite: boolean;
}
export const StyledHeart = styled.div<StyledHeartProps>`
  svg path:hover {
    stroke: #3d7efd;
    cursor: pointer;
  }

  svg path {
    fill: ${(props) => (props.isfavorite ? "#3D7EFD" : "#FFFBFF")};
  }
`;
