"use client";
import React from "react";

import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import styles from "./Featured.module.scss";
import FeaturedItem from "./FeaturedItem";
import strawberries from "../../assets/straw.png";
import cake from "../../assets/cake.png";
import vegets from "../../assets/veget.png";
import useFetch from "@/hooks/useFetch";

interface MealData {
  meals: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }[];
}

function Featured() {
  const { data, loading, error } = useFetch<MealData>(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  console.log(data);

  let featuredItems = [];

  if (data && data.meals && data.meals.length > 0) {
    const meals = data.meals.slice(0, 4);
    featuredItems = meals.map((meal, index) => (
      <FeaturedItem
        key={index}
        id={meal.idMeal}
        imageUrl={meal.strMealThumb}
        productName={meal.strMeal}
        newPrice={200}
      />
    ));
  } else {
    featuredItems = [
      <FeaturedItem
        key="1"
        id="1"
        imageUrl={strawberries.src}
        productName="Strawberries"
        newPrice={200}
      />,
      <FeaturedItem
        key="2"
        id="2"
        imageUrl={cake.src}
        productName="Cake"
        newPrice={200}
      />,
      <FeaturedItem
        key="3"
        id="3"
        imageUrl={vegets.src}
        productName="Vegetables"
        newPrice={200}
      />,
      <FeaturedItem
        key="4"
        id="4"
        imageUrl={vegets.src}
        productName="Vegetables"
        newPrice={200}
      />,
    ];
  }

  return (
    <MaxWidthWrapper>
      <section className={styles.featured}>
        <div className={styles.featured__header}>
          <h2>Popular meals</h2>
        </div>
        <div className={styles.featured__items}>{featuredItems}</div>
      </section>
    </MaxWidthWrapper>
  );
}

export default Featured;
