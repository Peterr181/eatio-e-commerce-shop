"use client";

import React, { useEffect, useState } from "react";
import Category from "./Category";
import styles from "./Categories.module.scss";
import useFetch from "@/hooks/useFetch";

interface CategoryData {
  categories: {
    idCategory: string;
    strCategoryThumb: string;
    strCategory: string;
  }[];
}

const Categories = () => {
  const { data, loading, error } = useFetch<CategoryData>(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);

  const handleMoreClick = () => {
    if (data) {
      setCurrentCategoryIndex((prevIndex) => {
        if (prevIndex === data.categories.length - 8) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(handleMoreClick, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.categories}>
      <div className={styles.categoriesHeader}>
        <h2>Search by Category</h2>
        <div
          className={styles.categoriesHeader__slide}
          onClick={handleMoreClick}
        >
          <p>More</p>
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
      <div className={styles.categories__items}>
        {data &&
          data.categories
            .slice(currentCategoryIndex, currentCategoryIndex + 8)
            .map((category) => (
              <Category
                key={category.idCategory}
                imageUrl={category.strCategoryThumb}
                categoryName={category.strCategory}
              />
            ))}
      </div>
    </section>
  );
};

export default Categories;
