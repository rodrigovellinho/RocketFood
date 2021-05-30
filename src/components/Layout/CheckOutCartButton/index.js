import React from "react";
import CartIcon from "../../Cart/CartIcon";
import styles from "./styles.module.css";

function CheckOutCartButton() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
    </div>
  );
}

export default CheckOutCartButton;
