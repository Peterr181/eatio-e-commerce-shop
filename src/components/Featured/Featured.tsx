import React from "react";

import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import styles from "./Featured.module.scss";
import FeaturedItem from "./FeaturedItem";
import strawberries from "../../assets/straw.png";
import cake from "../../assets/cake.png";
import vegets from "../../assets/veget.png";

function Featured() {
  return (
    <MaxWidthWrapper>
      <section className={styles.featured}>
        <div className={styles.featured__header}>
          <h2>Featured Product</h2>
        </div>
        <div className={styles.featured__items}>
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
    </MaxWidthWrapper>
  );
}

export default Featured;
