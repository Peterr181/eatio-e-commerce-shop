import React from "react";
import styles from "./ShopNow.module.scss";

interface ShopNowProps {
  imageUrl: string;
  itemHeader: string;
  itemDesc: string;
  textColor: "white" | "black";
}

const ShopNow = ({
  imageUrl,
  itemHeader,
  itemDesc,
  textColor,
}: ShopNowProps) => {
  return (
    <div className={styles.shopNowContainer}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt="info for next shopping"
          className={styles.shopNowImage}
        />
        <div
          className={`${styles.overlayContent} ${
            textColor === "white" ? styles.whiteText : styles.blackText
          }`}
        >
          <h3 className={styles.itemHeader}>{itemHeader}</h3>
          <p>{itemDesc}</p>
          <button
            className={
              textColor === "white" ? styles.whiteButton : styles.blackButton
            }
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
