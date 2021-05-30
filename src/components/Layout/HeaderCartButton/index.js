import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../Cart/CartIcon";
import styles from "./styles.module.css";

function HeaderCartButton() {
  return (
    <div className={styles.container}>
      <Link to="/checkout">
        <button className={styles.button}>
          <div className={styles.icon}>
            <CartIcon />
          </div>
        </button>
      </Link>
      <span className={styles.title}>Seu carrinho</span>
    </div>
  );
}

export default HeaderCartButton;
