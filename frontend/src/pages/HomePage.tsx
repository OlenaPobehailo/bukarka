import { PageWrapper, StyledCommonWrapper } from "styles/CommonStyled";
import CategorySlider from "../components/Home/CategorySlider/CategorySlider";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <StyledCommonWrapper>
      <PageWrapper>
        <h1>HomePage</h1>
        <CategorySlider />
      </PageWrapper>
    </StyledCommonWrapper>
  );
};

export default HomePage;
