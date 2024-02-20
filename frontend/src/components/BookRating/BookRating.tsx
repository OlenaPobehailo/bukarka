import { RatingStars } from "react-rating-stars-component";

interface RatingProps {
  value: number;
}

const BookRating: React.FC<RatingProps> = ({ value }) => {
  return (
    <RatingStars
      count={5}
      size={24}
      value={value}
      activeColor="#ffd700"
      inactiveColor="#ddd"
      edit={false}
      isHalf={true}
    />
  );
};

export default BookRating;
