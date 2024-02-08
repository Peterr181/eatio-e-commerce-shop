"use client";
import React, { useEffect, useState } from "react";
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

interface Category {
  strCategory: string;
}

interface CategoryResponse {
  categories: Category[];
}

const Products = () => {
  const { data, loading, error } = useFetch<{ meals: Meal[] }>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );

  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetch<CategoryResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  console.log(dataCategories);

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

  const paths = [{ icon: homeIcon, url: "/" }, { name: "Products" }];

  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [filteredMealsByCategory, setFilteredMealsByCategory] = useState<
    Meal[]
  >([]);
  const [filteredMealsByName, setFilteredMealsByName] = useState<Meal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [enteredName, setEnteredName] = useState("");

  const handleInput = (e: any) => {
    setEnteredName(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCountryChange = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  useEffect(() => {
    const fetchFilteredMealsByCategory = async () => {
      if (selectedCategory) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const data = await response.json();
        if (data.meals) {
          setFilteredMealsByCategory(data.meals);
        }
      } else {
        setFilteredMealsByCategory([]);
      }
    };

    fetchFilteredMealsByCategory();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchEnteredNameMeals = async () => {
      if (enteredName) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${enteredName}`
        );
        const data = await response.json();
        if (data.meals) {
          setFilteredMealsByName(data.meals);
        } else {
          setFilteredMealsByName([]);
        }
      } else {
        setFilteredMealsByName([]);
      }
    };
    fetchEnteredNameMeals();
  }, [enteredName]);

  console.log(enteredName);

  return (
    <>
      <Breadcrumbs paths={paths} />
      <MaxWidthWrapper>
        <div className={styles.products}>
          <div className={styles.products__filter}>
            <input
              type="text"
              className={styles.products__searchInput}
              placeholder="Enter meal name"
              value={enteredName}
              onChange={handleInput}
            />

            <p>
              {selectedCategory
                ? `${filteredMealsByCategory.length} Results Found`
                : enteredName
                ? `${filteredMealsByName.length} Results Found`
                : `${data?.meals?.length} Results Found`}
            </p>
          </div>
          <div className={styles.products__mainWrapper}>
            <div className={styles.products__mainFilters}>
              <div className={styles.products__section__categories}>
                <h3 className={styles.products__header}>All categories</h3>
                <div>
                  <ul className={styles.products__categoryList}>
                    {/* Render custom "All" category */}
                    <li key="All">
                      <label className={styles.checkBox}>
                        <input
                          type="radio"
                          name="category"
                          value=""
                          checked={selectedCategory === ""}
                          onChange={() => handleCategoryChange("")}
                          className={styles.checkbox}
                        />
                        Random
                      </label>
                    </li>
                    {/* Render fetched categories */}
                    {dataCategories?.categories.map((category) => (
                      <li key={category.strCategory}>
                        <label className={styles.checkBox}>
                          <input
                            type="radio"
                            name="category"
                            value={category.strCategory}
                            checked={selectedCategory === category.strCategory}
                            onChange={() =>
                              handleCategoryChange(category.strCategory)
                            }
                            className={styles.checkbox}
                          />
                          {category.strCategory}
                        </label>
                      </li>
                    ))}
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
              {selectedCategory && filteredMealsByCategory.length > 0 ? (
                filteredMealsByCategory.map((meal) => (
                  <FeaturedItem
                    key={meal.idMeal}
                    imageUrl={meal.strMealThumb}
                    productName={meal.strMeal}
                    newPrice={Math.floor(Math.random() * 501)}
                  />
                ))
              ) : (
                <>
                  {enteredName && filteredMealsByName.length > 0
                    ? filteredMealsByName.map((meal) => (
                        <FeaturedItem
                          key={meal.idMeal}
                          imageUrl={meal.strMealThumb}
                          productName={meal.strMeal}
                          newPrice={Math.floor(Math.random() * 501)}
                        />
                      ))
                    : data &&
                      data.meals &&
                      data.meals.map((meal) => (
                        <FeaturedItem
                          key={meal.idMeal}
                          imageUrl={meal.strMealThumb}
                          productName={meal.strMeal}
                          newPrice={Math.floor(Math.random() * 501)}
                        />
                      ))}
                </>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Products;
