import React, { useState, useEffect } from "react";
import { StyledHeart } from "./FavoriteButton.styled";
import { HeartIconThin } from "../../assets/icons";

interface IProp {
  itemId: string;
}

const FavoriteButton: React.FC<IProp> = ({ itemId }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    return favorites[itemId] || false;
  });

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
    <StyledHeart
      isFavorite={isFavorite}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <HeartIconThin />
    </StyledHeart>
  );
};

export default FavoriteButton;
