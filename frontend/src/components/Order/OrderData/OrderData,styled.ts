import styled from "styled-components";
import { Wrapper } from "../OrderCommonStyled";

export const OrderDataWrapper = styled(Wrapper)`
  width: 400px;
  min-height: 576px;
`;

export const BlockWrapper = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Data = styled.p`
  margin-left: 24px;
  margin-bottom: 8px;

  font-family: var(--regular);
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-dark-grey);
`;

export const SmallSubTitle = styled.p`
  margin-bottom: 16px;

  font-family: var(--semibold);
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-black);
`;

export const Text = styled.p`
  margin-left: 24px;
  margin-bottom: 16px;

  font-family: var(--regular);
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-black);
`;
