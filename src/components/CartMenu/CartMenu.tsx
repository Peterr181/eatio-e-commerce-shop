import React from "react";
import { useSelector } from "react-redux";

import styles from "./CartMenu.module.scss";
import Link from "next/link";
import { clearCart } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";

interface CartItem {
  id: string;
  imageUrl: string;
  productName: string;
  price: number;
  quantity: number;
}

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector((state: any) => state.cart.items);

  const calculateSubtotal = (item: CartItem) => {
    return item.price * item.quantity;
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  return (
    <div className={`${styles.cartMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.cartMenu__header}>
        <h2>Shopping cart</h2>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          onClick={onClose}
        >
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
        </svg>
      </div>
      {cartItems.length !== 0 && (
        <button
          className={styles.clearCart}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      )}
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.imageUrl} alt={item.productName} />
            <div className={styles.itemInfo}>
              <p>{item.productName}</p>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p> {/* Display quantity */}
              <p>Subtotal: ${calculateSubtotal(item)}</p>{" "}
              {/* Display subtotal */}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.totalData}>
        <div className={styles.totalContainer}>
          <p>Total Quantity: {totalQuantity}</p>
          <p>
            Total Price:{" "}
            <span className={styles.totalPrice}>${totalPrice}</span>
          </p>
        </div>
        <div className={styles.cartButtons}>
          <button className={styles.closeButton} onClick={onClose}>
            Continue shopping
          </button>
          <Link href="/shopping-cart">
            <button className={styles.checkoutButton} onClick={onClose}>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
