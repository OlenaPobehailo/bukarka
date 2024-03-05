import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bestsellers from "../../assets/data/bestsellers";
import sliderIconVertical from "../../assets/icons/slider-icon-vertical.png";
import ReactStars from "react-rating-stars-component";
import {StyledStarIcon} from "./SimpleSlider.styled";

function SimpleSlider() {
    const firstExample = {
        size: 30,
        value: 2.5,
        emptyIcon: <StyledStarIcon fillColor="transparent" />,
        filledIcon: <StyledStarIcon />,
    };

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {bestsellers.map((item, index) => (
                    <div>
                        <div style={{"width": "200px", "marginRight": "10px"}}>
                            <img style={{"width": "200px", "marginRight": "10px"}} src={item.image ? item.image : sliderIconVertical} alt=""/>
                        </div>
                        <h2>{item.title}</h2>
                        <div>{item.authorsName}</div>
                        <ReactStars {...firstExample} />
                        <div>{item.price} грн</div>
                        <button>Купити</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SimpleSlider;