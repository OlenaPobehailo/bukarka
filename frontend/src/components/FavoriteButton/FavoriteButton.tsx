import { useBooks } from "components/Book/BooksContext";
import React, { useEffect } from "react";
import { HeartIconThin } from "../../assets/icons";
import { StyledHeart } from "./FavoriteButton.styled";

interface IProp {
  itemId: string;
  children?: React.ReactNode;
}

const FavoriteButton: React.FC<IProp> = ({ itemId }) => {
  const { favorites, addFavorite, removeFavorite } = useBooks();
  const isFavorite = favorites.includes(itemId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(itemId);
    } else {
      addFavorite(itemId);
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    if (isFavorite) {
      favorites[itemId] = true;
    } else {
      delete favorites[itemId];
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [isFavorite, itemId]);

  return (
    <StyledHeart isfavorite={isFavorite} onClick={toggleFavorite}>
      <HeartIconThin />
    </StyledHeart>
  );
};

export default FavoriteButton;
