import styled from "styled-components";

export const Label = styled.p`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: fit-content;
  height: 32px;

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
    background: var(--bukarka-deep-blue);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 56px 96px;
`;

export const GridPageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 336px 1fr;
  margin-top: 88px;
  padding-top: 32px;
  padding-bottom: 104px;

  text-align: left;

  background-color: var(--bukarka-white);
`;

export const LeftPart = styled.div`
  width: 396px;
  padding-left: 32px;
`;

export const RightPart = styled.div`
  padding: 40px 120px 96px 110px;
`;

export const InfoPageWrapper = styled.div`
  margin-top: 88px;
  padding-top: 32px;
  padding-left: 32px;
  padding-bottom: 104px;

  background-color: var(--bukarka-white);
`;

export const InfoWrapper = styled.div`
  padding-right: 240px;
  margin-left: 208px;
  margin-top: 40px;
`;

export const Image = styled.img`
  width: 336px;
  height: 459px;
`;

export const SubscribeWrapperGrid = styled.div`
  width: 672px;
  grid-column: span 2;
  justify-self: center;
`;

export const TextAccent = styled.p`
  font-family: var(--regular);
  font-size: 14px;
  line-height: 1.43;
  color: var(--bukarka-deep-blue);
`;

export const StyledList = styled.ol`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  list-style-position: inside;

  li {
    margin-bottom: 20px;
    list-style-type: decimal;
    list-style-position: inside;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h2 {
    display: inline-block;

    margin-bottom: 16px;

    font-family: var(--semibold);
    font-size: 14px;
    line-height: 1.43;
    color: var(--bukarka-black);
  }

  h4 {
    display: inline;
    font-family: var(--regular);
    color: var(--bukarka-black);
  }

  span {
    display: inline;
    font-family: var(--regular);
    color: var(--bukarka-deep-blue);
  }

  p {
    color: var(--bukarka-black);
    padding-left: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;

  font-family: var(--semibold);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  color: var(--bukarka-black);
`;

export const SubscribeWrapper = styled.div`
  margin: 96px auto 0;
  padding-right: 32px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;
