import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledSlider,
  StyledPrevArrow,
  StyledNextArrow,
} from "./SimpleSlider.styled";
import CartItem from "../Home/CartItem/CartItem";
import { useEffect, useState } from "react";
import { SliderArrowIcon } from "../../assets/icons";

interface IProps {
  _id: string;
  title: string;
  author: string;
  image: string | null;
  price: number;
  rating: number;
}

function NextArrow(props: any) {
  const { className, style, onClick, isVisible } = props;
  return (
    <StyledNextArrow
      style={{ display: isVisible ? "flex" : "none" }}
      onClick={onClick}
    >
      <SliderArrowIcon />
    </StyledNextArrow>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick, isVisible } = props;
  return (
    <StyledPrevArrow
      style={{ display: isVisible ? "flex" : "none" }}
      onClick={onClick}
    >
      <SliderArrowIcon />
    </StyledPrevArrow>
  );
}

function SimpleSlider() {
  const [books, setBooks] = useState<IProps[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = books.length;
  console.log(books);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bukarka.onrender.com/api/books/new",
        );
        const data = await response.json();
        setBooks(data.data);
      } catch (error) {
        console.error("Помилка при виконанні запиту:", error);
      }
    };

    fetchData();
  }, []);

  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    prevArrow: <PrevArrow isVisible={currentSlide > 0} />,
    nextArrow: <NextArrow isVisible={currentSlide < totalSlides - 5} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <StyledSlider {...settings}>
        {books.map((item, index) => (
          <CartItem
            _id={item._id}
            image={item.image}
            key={item._id}
            price={item.price}
            author={item.author}
            title={item.title}
            rating={item.rating}
          />
        ))}
      </StyledSlider>
    </div>
  );
}

export default SimpleSlider;
