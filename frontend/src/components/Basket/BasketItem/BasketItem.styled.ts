import styled from "styled-components";

export const StyledBasketWrapper = styled.div`
  margin: 56px 104px 96px 104px;
`;

export const StyledMainTitle = styled.h3`
  color: #1e1e1e;
  font-size: 24px;
  font-family: "Montserrat-Semibold";
  font-weight: 600;
  line-height: 32px;
  text-align: center;
`;

export const StyledBasketHeader = styled.div`
  display: flex;
`;

export const StyledAmountOfBooks = styled.div`
  font-family: "Montserrat-Semibold";
  font-weight: 600;
  color: #1e1e1e;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledDelete = styled.div`
  color: #7c7165;
  font-size: 12px;
  font-family: "Montserrat-Semibold";
  font-weight: 400;
  line-height: 16px;
`;
export const StyledBasketItem = styled.li`
  width: 816px;
  //margin-left: 104px;
  //margin-right: 104px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #dad3cd;
  margin-bottom: 16px;
`;

export const StyledItemAbout = styled.div`
  display: flex;
`;

export const StyledDescription = styled.div`
  width: 400px;
  margin-right: 16px;
`;

export const StyledBasketImage = styled.div`
  width: 88px;
  height: 120px;
  margin-right: 16px;
  img {
    display: block;
  }
`;

export const StyledBasketTitle = styled.h3`
  font-family: "Montserrat-Semibold";
  color: #1e1e1e;
  font-size: 16px;
  margin-top: 0;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px;
  letter-spacing: 0;
`;

export const StyledAuthor = styled.div`
  color: #1e1e1e;
  font-size: 16px;
  font-style: normal;
  font-family: "Montserrat-Regular";
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 24px;
`;

export const StyledPriceBlock = styled.div`
  font-family: "Montserrat-Semibold";
  font-weight: 600;
  width: 296px;
  display: flex;
  justify-content: space-between;
`;

export const StyledBasketPricePrice = styled.div`
  font-size: 16px;
  height: 32px;
`;

export const StyledCountBlock = styled.div`
  font-family: "Montserrat-Semibold";
  font-weight: 600;
  display: flex;
  border-top: 1px solid #dad3cd;
  border-bottom: 1px solid #dad3cd;
  width: 88px;
  height: 32px;
  input {
    font-family: "Montserrat-Semibold";
    font-weight: 600;
    width: 100%;
    display: flex;
    position: relative;
    max-width: 40px;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border: none;
  }
`;

export const StyledChangeButtons = styled.button`
  font-family: "Montserrat-Semibold";
  font-weight: 600;
  width: 100%;
  display: flex;
  padding: 8px;
  position: relative;
  max-width: 24px;
  //height: 32px;
  //border-top: 1px solid #dad3cd;
  align-items: center;
  border-left: 1px solid #dad3cd;
  border-right: 1px solid #dad3cd;
  flex-direction: column;
  justify-content: center;
  background-color: #ffdc00;
`;

export const FormButton = styled.button`
  font-size: 16px;
`;
