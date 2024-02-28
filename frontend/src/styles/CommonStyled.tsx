import styled from "styled-components";

export const StyledCommonWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: var(--bukarka-white);

  @media screen and (min-width: 1440px) {
    max-width: 1296px;
    padding-bottom: 80px;
  }
`;

export const PageWrapper = styled.div`
  position: relative;
  display: flex;

  margin-top: 108px;
  padding-bottom: 84px;
  background-color: var(--bukarka-white);
`;

export const Aside = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 274px;
  padding-left: 31px;

  outline: 1px solid green;
`;

export const Main = styled.main`
  margin-left: 274px;
  outline: 1px solid red;

  /* flex-grow: 1; */
`;
