"use client";
import React, { useState, useRef } from "react";
import styles from "./Delivery.module.scss";

const Delivery = () => {
  const [showStartButton, setShowStartButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setShowStartButton(false);
    }
  };

  const handleVideoEnd = () => {
    setShowStartButton(true);
  };

  return (
    <section className={styles.delivery}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          id="deliveryVideo"
          src={"/mealvideo.mp4"}
          onEnded={handleVideoEnd}
        />
        {showStartButton && (
          <div className={styles.startButtonContainer}>
            <p>We prepare meals carefully</p>
            <button className={styles.startButton} onClick={handlePlay}>
              <svg
                height="64px"
                version="1.1"
                viewBox="0 0 32 32"
                width="64px"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
              >
                <g id="Layer_1" />
                <g id="play_x5F_alt">
                  <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M10,24V8l16.008,8L10,24z   " />
                </g>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Delivery;
