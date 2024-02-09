"use client";
import React from "react";
import Image from "next/image";
import Rating from "../Rating/Rating";
import styles from "./Featured.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/CartSlice";
import { useSelector } from "react-redux";

interface FeaturedItemProps {
  id: string;
  imageUrl: string;
  productName: string;
  newPrice: number;
  oldPrice?: number;
}

const FeaturedItem = ({
  id,
  imageUrl,
  productName,
  newPrice,
  oldPrice,
}: FeaturedItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const itemToAdd = {
      id: id,
      imageUrl: imageUrl,
      productName: productName,
      price: newPrice,
    };
    dispatch(addToCart(itemToAdd));
  };

  return (
    <div className={styles.featured__item}>
      <Image src={imageUrl} alt="featured shop item" width={230} height={230} />
      <h3>{productName}</h3>

      <div className={styles.featured__items__price}>
        <span>${newPrice}</span>
        {oldPrice && (
          <span className={styles.featured__items__discount}>${oldPrice}</span>
        )}
      </div>
      <Rating initialValue={5} maxRating={5} />
      <button onClick={handleAddToCart}>
        Add to cart{" "}
        <svg
          width="25"
          height="23"
          viewBox="0 0 25 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1H5.5L8.18 14.39C8.27144 14.8504 8.52191 15.264 8.88755 15.5583C9.25318 15.8526 9.7107 16.009 10.18 16H19.9C20.3693 16.009 20.8268 15.8526 21.1925 15.5583C21.5581 15.264 21.8086 14.8504 21.9 14.39L23.5 6H6.5M10.5 21C10.5 21.5523 10.0523 22 9.5 22C8.94772 22 8.5 21.5523 8.5 21C8.5 20.4477 8.94772 20 9.5 20C10.0523 20 10.5 20.4477 10.5 21ZM21.5 21C21.5 21.5523 21.0523 22 20.5 22C19.9477 22 19.5 21.5523 19.5 21C19.5 20.4477 19.9477 20 20.5 20C21.0523 20 21.5 20.4477 21.5 21Z"
            stroke="#131022"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default FeaturedItem;
