import React from "react";
import styles from "./Delivery.module.scss";
import delivery from "../../assets/delivery.jpg";

const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <div className={styles.delivery__image}>
        <img src={delivery.src} alt="delivery banner" />
      </div>
      <div className={styles.delivery__content}>
        <h3>Free Home Delivery in 24h</h3>
        <p>Delivery to your home in very fast time just order something</p>
        <button>Learn more</button>
      </div>
    </section>
  );
};

export default Delivery;
