"use client";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import storage from "redux-persist/lib/storage";

const Navbar = () => {
  const { data: session } = useSession();
  const cartItems = useSelector((state: any) => state.cart.items);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleCartIconClick = () => {
    setCartMenuOpen(!cartMenuOpen);
  };

  const handleLogout = () => {
    signOut();
    storage.removeItem("persist:root");
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 800) {
        // Adjust this value based on when you want the navbar to become sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MaxWidthWrapper>
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
        <Link href="/">
          <div>
            <p className={styles.navbar__logo}>Meally</p>
          </div>
        </Link>
        <div>
          <ul className={styles.navbar__elements}>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/faq">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className={styles.navbar__buttons}>
          {!session ? (
            <>
              <Link href="/login">
                <button className={styles.buttonLogin}>Login</button>
              </Link>
              <Link href="/register">
                <button className={styles.buttonRegister}>Sign Up</button>
              </Link>
            </>
          ) : (
            <div className={styles.registeredButtons}>
              <div
                className={styles.cartContainer}
                onClick={handleCartIconClick}
              >
                <svg
                  width="34"
                  height="35"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className={styles.cartQuantity}>{cartItems.length}</span>
              </div>
              <button className={styles.buttonRegister} onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <CartMenu isOpen={cartMenuOpen} onClose={() => setCartMenuOpen(false)} />
    </MaxWidthWrapper>
  );
};

export default Navbar;
