import React from "react";
import styles from "./Navbar.module.scss";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

const Navbar = () => {
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
          <button className={styles.buttonLogin}>Login</button>
          <button className={styles.buttonRegister}>Sign Up</button>
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
