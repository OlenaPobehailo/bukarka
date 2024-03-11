import CategoryPoster from "../CategoryPoster/CategoryPoster";
import SimpleSlider from "../../Slider/SimpleSlider";
import {StyledCategorySlider} from "./CategorySlider.styled";

const CategorySlider = () => {
    return (
        <StyledCategorySlider>
            <CategoryPoster title={"НОВИНКИ"}/>
            <SimpleSlider />
        </StyledCategorySlider>
    )
}

export default CategorySlider;