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
            <li>Shop</li>
            <li>Blog</li>
            <li>Page</li>
            <li>Vendor</li>
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
            <button className={styles.buttonRegister} onClick={() => signOut()}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
