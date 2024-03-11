import { PageWrapper, StyledCommonWrapper } from "styles/CommonStyled";
import SimpleSlider from "../../src/components/Slider/SimpleSlider";
import CategoryPoster from "../components/Home/CategoryPoster/CategoryPoster";
import CategorySlider from "../components/Home/CategorySlider/CategorySlider";

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
