import styled from "styled-components";

export const StyledCommonWrapper = styled.div`
  /* max-width: 375px;
  padding-left: 20px;
  padding-right: 20px; */
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  /* @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  } */

  @media screen and (min-width: 1440px) {
    max-width: 1296px;
    //  padding-left: 72px;
    //  padding-right: 72px;
  }
`;

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  margin-top: 108px;
  background-color: var(--bukarka-white);
`;

export const InfoPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;

  /* margin-top: 108px; */
  background-color: var(--bukarka-white);
`;

export const Aside = styled.aside`
  position: fixed;
  min-width: 296px;
  padding-left: 32px;
  margin-left: auto;
  overflow-y: auto;
  top: 108px;
  bottom: 0;
  max-height: calc(100vh - 108px);
`;

export const Main = styled.main`
  margin-left: 346px;
  overflow-y: auto;
  /* flex-grow: 1; */
  margin-top: 104px;
  //background-color: white;
  /* min-height: calc(75vh); */
`;
