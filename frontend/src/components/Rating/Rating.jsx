import React from "react";

const Rating = ({ value }) => {
  return (
    <Rating
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

export default Rating;
