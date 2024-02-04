"use client";
import React, { useState, useEffect } from "react";
import styles from "./TimeOffer.module.scss";
import timeoffer from "../../assets/timeoffer.png";

const TimeOffer = () => {
  const initialTime = {
    days: 68,
    hours: 12,
    minutes: 34,
    seconds: 56,
  };

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, seconds: 59, minutes: prevTime.minutes - 1 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            seconds: 59,
            minutes: 59,
            hours: prevTime.hours - 1,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            seconds: 59,
            minutes: 59,
            hours: 23,
            days: prevTime.days - 1,
          };
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.timeOffer}>
      <div className={styles.timeOfferImage}>
        <img src={timeoffer.src} alt="time offer banner" />
      </div>
      <div className={styles.timeOfferContent}>
        <div className={styles.textContent}>
          <h2>
            Save <span>40%</span> Off
          </h2>
          <p className={styles.textContent__desc}>
            Your daily dose of nutrition. No added sugar. No more bad stuff no
            flavour and colour
          </p>
          <div className={styles.timer}>
            <div className={styles.timer__item}>
              <p className={styles.timer__item__number}>{time.days}</p>
              <p>Days</p>
            </div>
            <div className={styles.timer__item}>
              <p className={styles.timer__item__number}>{time.hours}</p>
              <p>Hours</p>
            </div>
            <div className={styles.timer__item}>
              <p className={styles.timer__item__number}>{time.minutes}</p>
              <p>Minutes</p>
            </div>
            <div className={styles.timer__item}>
              <p className={styles.timer__item__number}>{time.seconds}</p>
              <p>Seconds</p>
            </div>
          </div>
          <button>Shop now</button>
        </div>
      </div>
    </section>
  );
};

export default TimeOffer;
