import React from "react";
import Category from "./Category";
import fish from "../../assets/fish.png";
import vegetables from "../../assets/vege.png";
import meat from "../../assets/meat.png";
import groceries from "../../assets/groceries.png";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.categoriesHeader}>
        <h2>Search by Category</h2>
      </div>
      <div className={styles.categories__items}>
        <Category imageUrl={groceries.src} categoryName="Groceries" />
        <Category imageUrl={fish.src} categoryName="Fish" />
        <Category imageUrl={vegetables.src} categoryName="Vegetables" />
        <Category imageUrl={meat.src} categoryName="Meat" />
      </div>
    </section>
  );
};

export default Categories;
