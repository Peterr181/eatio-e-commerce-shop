"use client";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./ShoppingCart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "@/redux/CartSlice";
import Link from "next/link";

const ShoppingCart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
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

  const handleDeleteItem = (itemId: number) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const handleIncreaseQuantity = (itemId: number) => {
    dispatch(
      updateCartItemQuantity({
        id: itemId,
        quantity:
          cartItems.find((item: any) => item.id === itemId)?.quantity + 1 || 1,
      })
    );
  };

  const handleDecreaseQuantity = (itemId: number) => {
    dispatch(
      updateCartItemQuantity({
        id: itemId,
        quantity:
          cartItems.find((item: any) => item.id === itemId)?.quantity - 1 || 1,
      })
    );
  };

  return (
    <div>
      <Breadcrumbs
        paths={[{ name: "Home", url: "/" }, { name: "ShoppingCart" }]}
      />
      <h1 className={styles.shoppingHeader}>Shopping Cart</h1>
      <div className={styles.checkout}>
        <table className={styles.checkout__table}>
          <thead className={styles.tableMobile}>
            <tr>
              <th className={styles.tableMobile}>Image</th>
              <th>Name</th>
              <th className={styles.tableMobile}>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item: any) => (
              <tr key={item.id} className={styles.tableRow}>
                <td className={styles.tableImage}>
                  <img src={item.imageUrl} alt={item.name} />
                </td>
                <td>{item.productName}</td>
                <td className={styles.tableMobile}>${item.price}</td>
                <td>
                  <button
                    className={styles.quantityBtnRemove}
                    onClick={() => handleDecreaseQuantity(item.id)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className={styles.quantityBtnAdd}
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className={styles.checkout__delete}
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cartItems.length === 0 && (
          <div className={styles.emptyCartContainer}>
            <p className={styles.emptyCart}>Oops cart is empty add some!</p>
          </div>
        )}
        <div>
          <h2 className={styles.total}>
            Total: $
            {cartItems
              .reduce(
                (acc: any, item: any) => acc + item.price * item.quantity,
                0
              )
              .toFixed(2)}
          </h2>
        </div>
        <div className={styles.checkoutButtons}>
          <Link href="/">
            <button className={styles.backShoppingBtn}>Back to shopping</button>
          </Link>
          <Link href="/checkout">
            <button className={styles.buyItemsBtn}>Buy items</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
