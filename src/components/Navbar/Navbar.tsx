"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session }: any = useSession();
  return (
    <MaxWidthWrapper>
      <nav className={styles.navbar}>
        <div>
          <p className={styles.navbar__logo}>Vege Shop</p>
        </div>
        <div>
          <ul className={styles.navbar__elements}>
            <li>Home</li>
            <li>Products</li>
            <li>Profile</li>
            <li>FAQ</li>
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
              <div className={styles.cartContainer}>
                <Link href="/cart">
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
                </Link>
                <span className={styles.cartQuantity}>2</span>
              </div>
              <button
                className={styles.buttonRegister}
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
