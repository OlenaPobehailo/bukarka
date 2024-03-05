import { PageWrapper, StyledCommonWrapper } from "styles/CommonStyled";
import SimpleSlider from "../../src/components/Slider/SimpleSlider"

const HomePage: React.FC = () => {
  return (
    <StyledCommonWrapper>
      <PageWrapper>
        <h1>HomePage</h1>
          <SimpleSlider />
      </PageWrapper>
    </StyledCommonWrapper>
  );
};

export default HomePage;
