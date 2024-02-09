import React from "react";
import { useSelector } from "react-redux";

import styles from "./CartMenu.module.scss";

interface CartItem {
  id: string;
  imageUrl: string;
  productName: string;
  price: number;
}

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ isOpen, onClose }) => {
  const cartItems: CartItem[] = useSelector((state: any) => state.cart.items);

  return (
    <div className={`${styles.cartMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.imageUrl} alt={item.productName} />
            <div>
              <p>{item.productName}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default CartMenu;
