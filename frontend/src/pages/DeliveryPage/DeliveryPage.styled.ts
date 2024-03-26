import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 104px 0;
`;

export const Label = styled.p`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  min-width: 192px;
  width: fit-content;
  height: 32px;
  margin-top: 32px;

  margin-bottom: 40px;
  padding: 4px 16px;

  background-color: var(--bukarka-yellow);

  font-family: var(--semibold);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background: var(--bukarka-blue);
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
`;

export const MenuItem = styled.li`
  color: var(--bukarka-black);

  button {
    background-color: transparent;
    font-family: var(--medium);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const AboutDelivery = styled.div`
  margin-top: 104px;
`;

const HiddenStyle = css`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const HiddenTitle = styled.h1`
  ${HiddenStyle}
`;

export const HiddenSubTitle = styled.h3`
  ${HiddenStyle}
`;

export const AccentText = styled.p`
  font-family: var(--semibold);
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;

  color: var(--bukarka-orange);
`;

export const SubTitle = styled.h2`
  margin-bottom: 16px;

  font-family: var(--semibold);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  color: var(--bukarka-black);
`;

export const ShiftRight = styled.div`
  padding-left: 32px;
`;

export const SmallSubTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
`;

export const StyledList = styled.ol`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  list-style-position: inside;

  li {
    margin-bottom: 24px;
    list-style-type: decimal;
    list-style-position: inside;
  }

  h4 {
    display: inline;
    font-weight: 400;
    color: var(--bukarka-blue);
  }

  p {
    color: var(--bukarka-black);
    padding-left: 0;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`;
