"use client";
import React, { useState } from "react";
import styles from "./HotProducts.module.scss";
import FeaturedItem from "../Featured/FeaturedItem";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";

interface Meal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

const HotProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Seafood");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const { data, loading, error } = useFetch<{ meals: Meal[] }>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
  );

  console.log(data);

  return (
    <section className={styles.hotProducts}>
      <div className={styles.hotProducts__header}>
        <h2>Hot Products</h2>
        <div className={styles.hotProducts__header__shop}>
          <Link href="/products">
            <p>Shop all</p>
          </Link>
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
            activeCategory === "Chicken"
              ? styles.hotProducts__categories__active
              : ""
          }
          onClick={() => handleCategoryClick("Chicken")}
        >
          Chicken
        </p>
        <p
          className={
            activeCategory === "Vegetarian"
              ? styles.hotProducts__categories__active
              : ""
          }
          onClick={() => handleCategoryClick("Vegetarian")}
        >
          Vegetarian
        </p>
        <p
          className={
            activeCategory === "Pasta"
              ? styles.hotProducts__categories__active
              : ""
          }
          onClick={() => handleCategoryClick("Pasta")}
        >
          Pasta
        </p>
      </div>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <div className={styles.hotProducts__items}>
          {data &&
            data.meals &&
            data.meals.slice(0, 4).map((product) => {
              const randomNumber = Math.floor(Math.random() * 501);
              return (
                <FeaturedItem
                  id={product.idMeal}
                  key={product.idMeal}
                  imageUrl={product.strMealThumb}
                  productName={product.strMeal}
                  newPrice={randomNumber}
                  oldPrice={randomNumber + 100}
                />
              );
            })}
        </div>
      )}
    </section>
  );
};

export default HotProducts;
