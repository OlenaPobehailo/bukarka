import styled from "styled-components";

export const StyledCommonWrapper = styled.div`
  margin: 0 auto;
  background-color: var(--bukarka-white);

  @media screen and (min-width: 1440px) {
    max-width: 1296px;
  }
`;

export const PageWrapper = styled.div`
  position: relative;
  display: flex;

  margin-top: 108px;
  background-color: var(--bukarka-white);
`;

export const Aside = styled.aside`
  position: fixed;
  width: 274px;
  padding-left: 31px;
  margin-left: auto;
  overflow-y: auto;
  top: 108px;
  bottom: 0;
  max-height: calc(100vh - 108px);
  
  outline: 1px solid green;
`;

export const Main = styled.main`
  /* width: 100%; */
  margin-left: 274px;
  overflow-y: auto;

  outline: 1px solid red;

  /* flex-grow: 1; */
`;
