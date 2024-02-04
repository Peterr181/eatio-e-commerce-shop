// Category.js
import React from "react";
import styles from "./Categories.module.scss";
import Image from "next/image";

interface CategoryProps {
  imageUrl: string;
  categoryName: string;
}

const Category = ({ imageUrl, categoryName }: CategoryProps) => {
  return (
    <div className={styles.categoryItem}>
      <Image src={imageUrl} alt="category image" width={200} height={200} />
      <p>{categoryName}</p>
    </div>
  );
};

export default Category;
