"use client";
import React, { useEffect, useState } from "react";
import styles from "./products.module.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Rating from "@/components/Rating/Rating";
import useFetch from "@/hooks/useFetch";
import FeaturedItem from "@/components/Featured/FeaturedItem";
import Link from "next/link";

interface Meal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strArea: string;
  strCategory: string;
}

interface Category {
  strCategory: string;
}

interface CategoryResponse {
  categories: Category[];
}

interface Country {
  strArea: string;
}

interface CountryResponse {
  meals: Country[];
}

const Products = () => {
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetch<CategoryResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const {
    data: dataCountries,
    loading: loadingCountries,
    error: errorCountries,
  } = useFetch<CountryResponse>(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );

  const paths = [{ name: "Home", url: "/" }, { name: "Products" }];

  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const fetchAllMeals = async () => {
    setLoadingProducts(true); // Set loading state to true
    const mealPromises = dataCategories?.categories.map(async (category) => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
      );
      const data = await response.json();
      return data.meals || [];
    });
    if (mealPromises)
      Promise.all(mealPromises).then((allMeals) => {
        const mergedMeals = allMeals.flat();
        setFilteredMeals(mergedMeals);
        setLoadingProducts(false); // Set loading state to false when data is fetched
      });
  };

  useEffect(() => {
    if (dataCategories) {
      fetchAllMeals();
    }
  }, [dataCategories]);

  useEffect(() => {
    const fetchFilteredMeals = async () => {
      if (selectedCategory) {
        setCurrentPage(1);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const data = await response.json();
        let filteredMealsByCategory = data.meals || [];

        // If countries are selected, filter by country
        if (selectedCountries.length > 0) {
          const countryPromises = selectedCountries.map(async (country) => {
            const response = await fetch(
              `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
            );
            const data = await response.json();
            return data.meals || [];
          });

          Promise.all(countryPromises).then((allMeals) => {
            const mergedMeals = allMeals.flat();

            const filteredMeals = filteredMealsByCategory.filter((meal: any) =>
              mergedMeals.some((m) => m.idMeal === meal.idMeal)
            );
            setFilteredMeals(filteredMeals);
          });
        } else {
          setFilteredMeals(filteredMealsByCategory);
        }
      } else if (selectedCountries.length > 0) {
        const countryPromises = selectedCountries.map(async (country) => {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
          );
          const data = await response.json();
          return data.meals || [];
        });

        Promise.all(countryPromises).then((allMeals) => {
          const mergedMeals = allMeals.flat();
          setFilteredMeals(mergedMeals);
        });
      } else {
        fetchAllMeals();
      }
    };

    fetchFilteredMeals();
  }, [selectedCategory, selectedCountries]);
  const totalPages = Math.ceil(filteredMeals.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMeals.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Breadcrumbs paths={paths} />
      <MaxWidthWrapper>
        <div className={styles.products}>
          <div className={styles.products__filter}>
            <p>{filteredMeals.length} Results Found</p>
          </div>
          <div className={styles.products__mainWrapper}>
            {/* Filters Section */}
            <div className={styles.products__mainFilters}>
              <div className={styles.products__section__categories}>
                <h3 className={styles.products__header}>All categories</h3>
                <div className={styles.products__categoriesLabels}>
                  <div className={styles.products__categoriesCategory}>
                    <ul className={styles.products__categoryList}>
                      <li key="All">
                        <label className={styles.checkBox}>
                          <input
                            type="radio"
                            name="category"
                            value=""
                            checked={selectedCategory === ""}
                            onChange={() => setSelectedCategory("")}
                            className={styles.checkbox}
                          />
                          All
                        </label>
                      </li>
                      {dataCategories?.categories.map((category) => (
                        <li key={category.strCategory}>
                          <label className={styles.checkBox}>
                            <input
                              type="radio"
                              name="category"
                              value={category.strCategory}
                              checked={
                                selectedCategory === category.strCategory
                              }
                              onChange={() =>
                                setSelectedCategory(category.strCategory)
                              }
                              className={styles.checkbox}
                            />
                            {category.strCategory}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.products__section__countries}>
                    <h3 className={styles.products__header}>By country</h3>
                    <ul className={styles.products__countries}>
                      {dataCountries?.meals.map((country) => (
                        <li key={country.strArea}>
                          <label className={styles.checkBox}>
                            <input
                              type="checkbox"
                              name="country"
                              value={country.strArea}
                              checked={selectedCountries.includes(
                                country.strArea
                              )}
                              onChange={() =>
                                setSelectedCountries((prev) =>
                                  prev.includes(country.strArea)
                                    ? prev.filter((c) => c !== country.strArea)
                                    : [...prev, country.strArea]
                                )
                              }
                              className={styles.checkbox}
                            />
                            {country.strArea}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {loadingProducts && (
              <div className={styles.loaderProducts}>Loading...</div>
            )}
            <div>
              <div className={styles.products__productsItems}>
                {!loadingProducts &&
                  currentItems.map((meal) => (
                    <FeaturedItem
                      id={meal.idMeal}
                      key={meal.idMeal}
                      imageUrl={meal.strMealThumb}
                      productName={meal.strMeal}
                      newPrice={30}
                    />
                  ))}
              </div>
              <div className={styles.pagination}>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? styles.active : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Products;
