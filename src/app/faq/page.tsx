"use client";
import styling from "./faq.module.scss";
import React from "react";
import Faq from "react-faq-component";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const data = {
  rows: [
    {
      title: "How can I place an order?",
      content: `Placing an order is simple! Just browse through our delicious menu, select the items you'd like to order, and proceed to checkout. You can also customize your order based on your preferences.`,
    },
    {
      title: "What are the delivery hours?",
      content:
        "Our delivery hours are from [insert your delivery hours here]. We strive to deliver your meals promptly within these hours to ensure you enjoy your food while it's fresh and hot.",
    },
    {
      title: "Is there a minimum order requirement?",
      content: `Yes, we have a minimum order requirement of [insert minimum order amount here]. This helps us ensure efficient delivery and maintain the quality of our service.`,
    },
    {
      title: "What safety measures are in place during delivery?",
      content: `Your safety is our top priority. Our delivery team follows strict hygiene and safety protocols. They wear masks and gloves during delivery and maintain social distancing guidelines to ensure a safe and contactless delivery experience.`,
    },
    {
      title: "How can I track my order?",
      content: `Once your order is confirmed, you'll receive a confirmation email or SMS with a tracking link. You can click on the link to track the status of your order in real-time.`,
    },
    {
      title: "Do you offer contactless delivery?",
      content: `Yes, we offer contactless delivery options for your convenience and safety. You can request contactless delivery during checkout, and our delivery team will leave your order at your doorstep.`,
    },
    {
      title: "What if I have dietary restrictions or allergies?",
      content: `We understand the importance of catering to dietary restrictions and allergies. Simply let us know about your dietary preferences or allergies in the special instructions section during checkout, and we'll ensure your order is prepared accordingly.`,
    },
    {
      title: "How can I provide feedback or report an issue?",
      content: `We welcome your feedback and are here to assist you with any concerns. You can reach out to our customer support team via email at [insert email address] or call us directly at [insert phone number]. Your satisfaction is our priority, and we're committed to resolving any issues promptly.`,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "grey",
  arrowColor: "orange",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true,
};

const faq = () => {
  return (
    <>
      <Breadcrumbs paths={[{ name: "Home", url: "/" }, { name: "FAQ" }]} />
      <MaxWidthWrapper>
        <section className={styling.faq}>
          <Faq data={data} styles={styles} config={config} />
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default faq;
