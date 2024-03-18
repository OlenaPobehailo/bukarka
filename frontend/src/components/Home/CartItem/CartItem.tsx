import React, { useState } from "react";
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
  let navigate = useNavigate();
  const firstExample = {
    size: 20,
    edit: false,
    emptyIcon: <StyledStarIcon fillcolor="white" />,
    filledIcon: <StyledStarIcon />,
  };

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
          <ReactStars {...firstExample} value={rating} />
          {/*<div>{rating}</div>*/}
        </StarsWrapper>
        <StyledPrice>{price} грн</StyledPrice>
        <FormButton onClick={toggleModal}>Купити</FormButton>

        {isOpen && (
          <Modal close={closeModal} showCloseButton={true}>
            <div style={{ width: "200px", height: "200px" }}>Кошик</div>
          </Modal>
        )}
      </StyledItemCart>
    </>
  );
};

export default CartItem;
