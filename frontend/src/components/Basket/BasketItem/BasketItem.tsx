import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarsWrapper, StyledStarIcon } from "../../Slider/SimpleSlider.styled";
import {
  StyledBasketItem,
  StyledBasketTitle,
  StyledAuthor,
  FormButton,
  StyledItemAbout,
  StyledPriceBlock,
  StyledBasketImage,
  StyledDescription,
  StyledBasketPricePrice,
} from "./BasketItem.styled";
import { images } from "../../../assets/images";
import ReactStars from "react-rating-stars-component";
import Modal from "../../Modal";
import FavoriteButton from "../../FavoriteButton/FavoriteButton";

interface IProps {
  _id: string;
  title: string;
  author: string;
  image: string | null;
  price: number;
  // rating: number;
  index: number;
}
const CartItem: React.FC<IProps> = ({
  _id,
  title,
  author,
  image,
  price,
  // rating,
  index,
}) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
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
            <StyledBasketTitle style={{ width: "192px" }}>
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
        </StyledPriceBlock>
        <FormButton
        // onClick={toggleModal}
        >
          Купити
        </FormButton>
      </StyledBasketItem>
    </>
  );
};

export default CartItem;
