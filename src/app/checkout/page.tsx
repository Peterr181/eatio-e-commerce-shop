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
  };

  return (
    <>
      <Breadcrumbs
        paths={[
          { name: "Home", url: "/" },
          { name: "ShoppingCart", url: "shopping-cart" },
          { name: "Checkout" },
        ]}
      />
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
