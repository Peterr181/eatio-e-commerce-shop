"use client";

import React from "react";
import styles from "./Rating.module.scss";

interface RatingProps {
  initialValue?: number;
  maxRating?: number;
  onChange?: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  initialValue = 0,
  maxRating = 5,
  onChange,
}) => {
  const [rating, setRating] = React.useState<number>(initialValue);

  const handleClick = (value: number) => {
    if (value !== rating) {
      setRating(value);
      if (onChange) {
        onChange(value);
      }
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          className={`${styles.star} ${
            i <= rating ? styles.filled : styles.empty
          }`}
          onClick={() => handleClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div className={styles.rating}>{renderStars()}</div>;
};

export default Rating;
