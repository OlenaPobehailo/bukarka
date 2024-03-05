import styled from "styled-components";
import {StarIcon} from "../../assets/icons";

export const StyledStarIcon = styled(StarIcon)`
  path {
    fill: ${props => props.fillColor || ''};
  }
`;