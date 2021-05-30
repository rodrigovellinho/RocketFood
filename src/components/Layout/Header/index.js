import React from "react";
import HeaderCartButton from "../HeaderCartButton";
import RocketLogo from "../../../assets/rocketLogo.png";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <img src={RocketLogo} alt="Food Rocket Logo" className={styles.image} />
        <span className={styles.title}>Rocket Food</span>
      </div>
      <div>
        <HeaderCartButton />
      </div>
    </div>
  );
}

export default Header;
