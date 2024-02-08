"use client";
import React, { useState } from "react";
import styles from "./products.module.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Rating from "@/components/Rating/Rating";
import useFetch from "@/hooks/useFetch";
import FeaturedItem from "@/components/Featured/FeaturedItem";
interface Meal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

const Products = () => {
  const { data, loading, error } = useFetch<{ meals: Meal[] }>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );

  const homeIcon = (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8L9 1L17 8V18H12V14C12 13.2044 11.6839 12.4413 11.1213 11.8787C10.5587 11.3161 9.79565 11 9 11C8.20435 11 7.44129 11.3161 6.87868 11.8787C6.31607 12.4413 6 13.2044 6 14V18H1V8Z"
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const paths = [
    { icon: homeIcon, url: "/" }, // Change here
    { name: "Products" },
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleCountryChange = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  return (
    <>
      <Breadcrumbs paths={paths} />
      <MaxWidthWrapper>
        <div className={styles.products}>
          <div className={styles.products__filter}>
            <button>
              Filter{" "}
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 5H9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 14H4"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="5" cy="5" r="4" stroke="white" stroke-width="1.5" />
                <circle
                  cx="17"
                  cy="14"
                  r="4"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </button>
            <p>52 Results Found</p>
          </div>
          <div className={styles.products__mainWrapper}>
            <div className={styles.products__mainFilters}>
              <div className={styles.products__section__categories}>
                <h3 className={styles.products__header}>All categories</h3>
                <div>
                  <ul className={styles.products__categoryList}>
                    <li>
                      <label className={styles.checkBox}>
                        <input
                          type="checkbox"
                          value="Fresh Fruit"
                          checked={selectedCategories.includes("Fresh Fruit")}
                          onChange={() => handleCategoryChange("Fresh Fruit")}
                          className={styles.checkbox}
                        />
                        Fresh Fruit
                      </label>
                    </li>
                    <li>
                      <label className={styles.checkBox}>
                        <input
                          type="checkbox"
                          value="Fresh Fruit"
                          checked={selectedCategories.includes("Fresh Fruit")}
                          onChange={() => handleCategoryChange("Fresh Fruit")}
                          className={styles.checkbox}
                        />
                        Fresh Fruit
                      </label>
                    </li>
                    <li>
                      <label className={styles.checkBox}>
                        <input
                          type="checkbox"
                          value="Fresh Fruit"
                          checked={selectedCategories.includes("Fresh Fruit")}
                          onChange={() => handleCategoryChange("Fresh Fruit")}
                          className={styles.checkbox}
                        />
                        Fresh Fruit
                      </label>
                    </li>
                    <li>
                      <label className={styles.checkBox}>
                        <input
                          type="checkbox"
                          value="Fresh Fruit"
                          checked={selectedCategories.includes("Fresh Fruit")}
                          onChange={() => handleCategoryChange("Fresh Fruit")}
                          className={styles.checkbox}
                        />
                        Fresh Fruit
                      </label>
                    </li>
                    <li>
                      <label className={styles.checkBox}>
                        <input
                          type="checkbox"
                          value="Fresh Fruit"
                          checked={selectedCategories.includes("Fresh Fruit")}
                          onChange={() => handleCategoryChange("Fresh Fruit")}
                          className={styles.checkbox}
                        />
                        Fresh Fruit
                      </label>
                    </li>
                    <li>
                      <label className={styles.checkBox}>
                        <input
                          type="checkbox"
                          value="Fresh Fruit"
                          checked={selectedCategories.includes("Fresh Fruit")}
                          onChange={() => handleCategoryChange("Fresh Fruit")}
                          className={styles.checkbox}
                        />
                        Fresh Fruit
                      </label>
                    </li>
                    <li>
                      <label className={styles.checkBox}>
                        <input
                          type="checkbox"
                          value="Fresh Fruit"
                          checked={selectedCategories.includes("Fresh Fruit")}
                          onChange={() => handleCategoryChange("Fresh Fruit")}
                          className={styles.checkbox}
                        />
                        Fresh Fruit
                      </label>
                    </li>
                    <li>
                      <label className={styles.checkBox}>
                        <input
                          type="checkbox"
                          value="Fresh Fruit"
                          checked={selectedCategories.includes("Fresh Fruit")}
                          onChange={() => handleCategoryChange("Fresh Fruit")}
                          className={styles.checkbox}
                        />
                        Fresh Fruit
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.products__section__price}>
                <h3 className={styles.products__header}>Price</h3>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className={styles.inputRange}
                  />
                  <p>Price: $0 - $100</p>
                </div>
              </div>
              <div className={styles.products__section__ratings}>
                <h3 className={styles.products__header}>Rating</h3>
                <Rating initialValue={5} maxRating={5} />
                <Rating initialValue={4} maxRating={5} />
                <Rating initialValue={3} maxRating={5} />
                <Rating initialValue={2} maxRating={5} />
                <Rating initialValue={1} maxRating={5} />
              </div>
              <div className={styles.products__section__countries}>
                <h3 className={styles.products__header}>By country</h3>
                <div>
                  <ul className={styles.products__countries}>
                    <li>Indian</li>
                    <li>Italian</li>
                    <li>Chinese</li>
                    <li>Japanese</li>
                    <li>Thai</li>
                    <li>Mexican</li>
                    <li>American</li>
                    <li>French</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.products__productsItems}>
              {data &&
                data.meals &&
                data.meals.map((product) => {
                  const randomNumber = Math.floor(Math.random() * 501);
                  return (
                    <FeaturedItem
                      key={product.idMeal}
                      imageUrl={product.strMealThumb}
                      productName={product.strMeal}
                      newPrice={randomNumber}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Products;
