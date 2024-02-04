import React from "react";
import Rating from "../Rating/Rating";
import Image from "next/image";
import styles from "./Testimonials.module.scss";

interface TestimonialItemProps {
  imageUrl: string;
  personName: string;
  personRole: string;
  testimonialText: string;
}

const TestimonialItem = ({
  imageUrl,
  personName,
  personRole,
  testimonialText,
}: TestimonialItemProps) => {
  return (
    <div className={styles.testimonials__item}>
      <svg
        width="25"
        height="27"
        viewBox="0 0 25 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 12.25V7.25M23.75 1H1.25V21H7.5V26L12.5 21H18.75L23.75 16V1ZM11.25 12.25V7.25V12.25Z"
          stroke="#118D57"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Rating initialValue={5} maxRating={5} />
      <p className={styles.testimonials__text}>{testimonialText}</p>
      <div className={styles.testimonials__person}>
        <Image
          src={imageUrl}
          alt="person testimonial face"
          width={70}
          height={70}
        />
        <div>
          <p>{personName}</p>
          <p className={styles.testimonials__person__role}>{personRole}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
