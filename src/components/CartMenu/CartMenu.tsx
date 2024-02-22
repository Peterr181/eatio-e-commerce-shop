import React from "react";
import { useSelector } from "react-redux";

import styles from "./CartMenu.module.scss";
import Link from "next/link";

interface CartItem {
  id: string;
  imageUrl: string;
  productName: string;
  price: number;
  quantity: number; // Add quantity to CartItem interface
}

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ isOpen, onClose }) => {
  const cartItems: CartItem[] = useSelector((state: any) => state.cart.items);

  // Calculate subtotal for each item (price * quantity)
  const calculateSubtotal = (item: CartItem) => {
    return item.price * item.quantity;
  };

  // Calculate total quantity of all items in cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate total price of all items in cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  return (
    <div className={`${styles.cartMenu} ${isOpen ? styles.open : ""}`}>
      <h2>Shopping cart</h2>
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
      <div className={styles.totalContainer}>
        <p>Total Quantity: {totalQuantity}</p>
        <p>
          Total Price: <span className={styles.totalPrice}>${totalPrice}</span>
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
  );
};

export default CartMenu;
