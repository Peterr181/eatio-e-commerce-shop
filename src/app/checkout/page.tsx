"use client";
import React, { useState } from "react";
import styles from "./checkout.module.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/CartSlice";
interface CheckoutFormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
}

const CheckoutForm: React.FC = () => {
  const dispatch = useDispatch();
  const homeIcon = (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8L9 1L17 8V18H12V14C12 13.2044 11.6839 12.4413 11.1213 11.8787C10.5587 11.3161 9.79565 11 9 11C8.20435 11 7.44129 11.3161 6.87868 11.8787C6.31607 12.4413 6 13.2044 6 14V18H1V8Z"
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const paths = [{ icon: homeIcon, url: "/" }, { name: "Checkout" }];
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearCart());
    console.log("Form data:", formData);
  };

  return (
    <>
      <Breadcrumbs paths={paths} />
      <form className={styles.checkoutForm} onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Buy items</button>
        <Link href="/shopping-cart">
          <button type="submit" className={styles.order}>
            Browse your order
          </button>
        </Link>
      </form>
    </>
  );
};

export default CheckoutForm;
