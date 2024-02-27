"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartItemQuantity } from "@/redux/CartSlice";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import styles from "./productDetails.module.scss";

interface PageProps {
  params: {
    productId: string;
  };
}

const ProductDetails = ({ params }: PageProps) => {
  const { productId } = params;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const [productDetails, setProductDetails] = useState<any>({});
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProductDetails(data.meals[0]);
      })
      .catch((error) => {});
  }, []);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item: any) => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity < 10) {
        dispatch(
          updateCartItemQuantity({
            id: productId,
            quantity: existingItem.quantity + 1,
          })
        );
        setIsAdded(true);
      } else {
        setIsAdded(false);
        alert("You have reached the maximum quantity for this item.");
      }
    } else {
      const itemToAdd = {
        id: productId,
        imageUrl: productDetails.strMealThumb,
        productName: productDetails.strMeal,
        price: 30, // You can modify this based on your data
        quantity: 1,
      };
      dispatch(addToCart(itemToAdd));
      setIsAdded(true);
    }

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const productName = productDetails.strMeal;

  return (
    <div>
      <Breadcrumbs
        paths={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: productName },
        ]}
      />
      <MaxWidthWrapper>
        <div className={styles.productDetails}>
          <div className={styles.productDetails__image}>
            <img
              src={productDetails.strMealThumb}
              alt={productDetails.strMeal}
            />
          </div>
          <div className={styles.productDetails__text}>
            <div className={styles.productDetails__text__header}>
              <h1>{productDetails.strMeal}</h1>
              <a href={productDetails.strYoutube} target="_blank">
                <button className={styles.productDetails__text__button}>
                  Youtube
                </button>
              </a>
            </div>
            <div className={styles.productDetails__text__category}>
              <p>{productDetails.strCategory}</p>
              <p>{productDetails.strArea}</p>
            </div>
            <p className={styles.productDetails__text__price}>$30</p>

            <p className={styles.productDetails__text__details}>
              {productDetails.strInstructions}
            </p>
            <div className={styles.addToCart}>
              <button
                onClick={handleAddToCart}
                className={isAdded ? styles.added : ""}
              >
                {isAdded ? "Added!" : "Add to cart"}
                <svg
                  width="25"
                  height="23"
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1H5.5L8.18 14.39C8.27144 14.8504 8.52191 15.264 8.88755 15.5583C9.25318 15.8526 9.7107 16.009 10.18 16H19.9C20.3693 16.009 20.8268 15.8526 21.1925 15.5583C21.5581 15.264 21.8086 14.8504 21.9 14.39L23.5 6H6.5M10.5 21C10.5 21.5523 10.0523 22 9.5 22C8.94772 22 8.5 21.5523 8.5 21C8.5 20.4477 8.94772 20 9.5 20C10.0523 20 10.5 20.4477 10.5 21ZM21.5 21C21.5 21.5523 21.0523 22 20.5 22C19.9477 22 19.5 21.5523 19.5 21C19.5 20.4477 19.9477 20 20.5 20C21.0523 20 21.5 20.4477 21.5 21Z"
                    stroke="#131022"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductDetails;
