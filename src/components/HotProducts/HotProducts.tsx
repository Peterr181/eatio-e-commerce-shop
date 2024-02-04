"use client";

import React, { useState } from "react";
import styles from "./HotProducts.module.scss";
import FeaturedItem from "../Featured/FeaturedItem";
import strawberries from "../../assets/straw.png";
import cake from "../../assets/cake.png";
import vegets from "../../assets/veget.png";

const HotProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className={styles.hotProducts}>
      <div className={styles.hotProducts__header}>
        <h2>Hot Products</h2>
        <div className={styles.hotProducts__header__shop}>
          <p>Shop all</p>
          <div className={styles.arrowIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#131022"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.hotProducts__categories}>
        <p
          className={
            activeCategory === "All"
              ? styles.hotProducts__categories__active
              : ""
          }
          onClick={() => handleCategoryClick("All")}
        >
          All
        </p>
        <p
          className={
            activeCategory === "Fruits"
              ? styles.hotProducts__categories__active
              : ""
          }
          onClick={() => handleCategoryClick("Fruits")}
        >
          Fruits
        </p>
        <p
          className={
            activeCategory === "Meat"
              ? styles.hotProducts__categories__active
              : ""
          }
          onClick={() => handleCategoryClick("Meat")}
        >
          Meat
        </p>
        <p
          className={
            activeCategory === "Seafood"
              ? styles.hotProducts__categories__active
              : ""
          }
          onClick={() => handleCategoryClick("Seafood")}
        >
          Seafood
        </p>
        <p
          className={
            activeCategory === "Dried"
              ? styles.hotProducts__categories__active
              : ""
          }
          onClick={() => handleCategoryClick("Dried")}
        >
          Dried
        </p>
      </div>
      <div className={styles.hotProducts__items}>
        <FeaturedItem
          imageUrl={strawberries.src}
          productName="Strawberries"
          newPrice={200}
          oldPrice={300}
        />
        <FeaturedItem
          imageUrl={cake.src}
          productName="Cake"
          newPrice={200}
          oldPrice={300}
        />
        <FeaturedItem
          imageUrl={vegets.src}
          productName="Vegetables"
          newPrice={200}
          oldPrice={300}
        />
        <FeaturedItem
          imageUrl={vegets.src}
          productName="Vegetables"
          newPrice={200}
          oldPrice={300}
        />
      </div>
    </section>
  );
};

export default HotProducts;
