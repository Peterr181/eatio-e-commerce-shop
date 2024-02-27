import React from "react";
import styles from "./Hero.module.scss";
import heroImage from "../../../src/assets/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__text}>
        <h2 className={styles.mobileLogo}>Meally</h2>
        <p className={styles.header__discount}>Save up 30% off</p>
        <h1 className={styles.header__heading}>
          Bengal Vegetable Farm Organic 100%
        </h1>
        <p className={styles.header__desc}>
          Vegetable is a mobile patlform that enabels you to deliver your
          favourite meals anytime
        </p>
        <button className={styles.header__button}>Shop now</button>
      </div>
      <div className={styles.header__image}>
        <Image src={heroImage} alt="hero" />
      </div>
    </header>
  );
};

export default Hero;
