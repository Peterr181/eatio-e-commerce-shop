import React from "react";
import person from "../../assets/person.png";
import TestimonialItem from "./TestimonialItem";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h2>Why customers love us ?</h2>
      <div className={styles.testimonials__items}>
        <TestimonialItem
          imageUrl={person.src}
          personName="John Doe"
          personRole="CEO"
          testimonialText="I am very happy with the service"
        />
        <TestimonialItem
          imageUrl={person.src}
          personName="John Doe"
          personRole="CEO"
          testimonialText="I am very happy with the service asdaddassdsadasdsad "
        />
        <TestimonialItem
          imageUrl={person.src}
          personName="John Doe"
          personRole="CEO"
          testimonialText="I am very happy with the serviceasda sdasdasdsadasdsadasd"
        />
      </div>
    </div>
  );
};

export default Testimonials;
