import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarsWrapper, StyledStarIcon } from "../../Slider/SimpleSlider.styled";
import {
  StyledItemCart,
  StyledItemImage,
  StyledTitle,
  StyledPrice,
  StyledNameAuthor,
  FormButton,
} from "./CartItem.styled";
import { images } from "../../../assets/images";
import ReactStars from "react-rating-stars-component";
import Modal from "../../Modal";
import FavoriteButton from "../../FavoriteButton/FavoriteButton";
import {
  StyledAmountOfBooks,
  StyledAuthor,
  StyledBasketHeader,
  StyledBasketImage,
  StyledBasketItem,
  StyledBasketPricePrice,
  StyledBasketTitle,
  StyledBasketWrapper,
  StyledChangeButtons,
  StyledCountBlock,
  StyledDelete,
  StyledDescription,
  StyledItemAbout,
  StyledMainTitle,
  StyledPriceBlock,
} from "../../Basket/BasketItem/BasketItem.styled";
import axios from "axios";

interface IProps {
  _id: string;
  title: string;
  author: string;
  image: string | null;
  price: number;
  rating: number;
  index: number;
}
const CartItem: React.FC<IProps> = ({
  _id,
  title,
  author,
  image,
  price,
  rating,
  index,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [basketList, setBusketList] = useState();
  console.log("Responce:", basketList);

  let navigate = useNavigate();
  const firstExample = {
    size: 20,
    count: 5,
    edit: false,
    emptyIcon: <StyledStarIcon fillColor="#FFFBFF" />,
    filledIcon: <StyledStarIcon />,
  };

  useEffect(() => {
    if (currentId) {
      // Only perform the request if currentId is not null
      const fetchData = async () => {
        try {
          const response = await axios.post(
            `https://bukarka.onrender.com/api/orders/${currentId}`,
            {
              id: currentId,
            },
          );
          console.log("Response:", response.data);
          // Handle the response data as needed
        } catch (error) {
          console.error("Error making POST request:", error);
          // Handle the error as needed
        }
      };

      fetchData();
    }
  }, [currentId]); // Dependency array includes currentId, so the effect runs when currentId changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bukarka.onrender.com/api/orders`,
        );
        // console.log("Response:", response.data);

        setBusketList(response.data);
        // Handle the response data as needed
      } catch (error) {
        console.error("Error making POST request:", error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    navigate(`/books/${target.id}`);
  };
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <StyledItemCart>
        <FavoriteButton itemId={_id} />
        <StyledItemImage id={_id} onClick={handleClick}>
          <img
            src={
              image ||
              (index === 0 && images.BookNetflix) ||
              (index === 2 && images.BookCover) ||
              images.BookDarkSide
            }
            alt=""
          />
        </StyledItemImage>
        <StyledTitle style={{ width: "192px" }}>
          <div
            id={_id}
            onClick={handleClick}
            title={`${title.length > 25 ? title : ""}`}
          >
            {truncateString(title, 25)}
          </div>
        </StyledTitle>
        <StyledNameAuthor>
          <div title={`${author.length > 25 ? author : ""}`}>
            {truncateString(author, 25)}
          </div>
        </StyledNameAuthor>
        <StarsWrapper>
          <ReactStars {...firstExample} value={index === 0 ? 5 : rating} />
          {/*<div>{rating}</div>*/}
        </StarsWrapper>
        <StyledPrice>{price} грн</StyledPrice>
        {/*<FormButton onClick={toggleModal}>Купити</FormButton>*/}
        <FormButton id={_id} onClick={() => setCurrentId(_id)}>
          Купити
        </FormButton>
        {/*onClick={() => setCurrentId(1)}*/}

        {isOpen && (
          <Modal close={closeModal} showCloseButton={true}>
            <StyledBasketWrapper>
              <StyledMainTitle>Кошик</StyledMainTitle>
              <StyledBasketHeader>
                <StyledAmountOfBooks>3 шт.</StyledAmountOfBooks>
                <StyledDelete>Видалити все</StyledDelete>
              </StyledBasketHeader>
              <StyledBasketItem>
                <StyledItemAbout>
                  <StyledBasketImage
                    id={_id}
                    // onClick={handleClick}
                  >
                    <img
                      src={
                        image ||
                        (index === 0 && images.BookNetflix) ||
                        (index === 2 && images.BookCover) ||
                        images.BookDarkSide
                      }
                      alt=""
                    />
                  </StyledBasketImage>
                  <StyledDescription>
                    <StyledBasketTitle>
                      <div
                        id={_id}
                        // onClick={handleClick}
                      >
                        {title}
                      </div>
                    </StyledBasketTitle>
                    <StyledAuthor>
                      <div
                        id={_id}
                        // onClick={handleClick}
                      >
                        {author}
                      </div>
                    </StyledAuthor>
                    <div>
                      <FavoriteButton itemId={_id} />
                      <p>До обраного</p>
                    </div>
                  </StyledDescription>
                </StyledItemAbout>
                <StyledPriceBlock>
                  <StyledBasketPricePrice>{price} грн</StyledBasketPricePrice>
                  <StyledCountBlock>
                    <StyledChangeButtons>-</StyledChangeButtons>
                    {/*<StyledCountBooks></StyledCountBooks>*/}
                    <input type="text" value={1} />
                    <StyledChangeButtons>+</StyledChangeButtons>
                  </StyledCountBlock>
                  <StyledBasketPricePrice>{price} грн</StyledBasketPricePrice>
                </StyledPriceBlock>
              </StyledBasketItem>

              <FormButton
              // onClick={toggleModal}
              >
                Купити
              </FormButton>
            </StyledBasketWrapper>
          </Modal>
        )}
      </StyledItemCart>
    </>
  );
};

export default CartItem;
