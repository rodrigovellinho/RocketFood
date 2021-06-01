import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../hooks/CartContext";
import CartIcon from "../../Cart/CartIcon";
import styles from "./styles.module.css";

function HeaderCartButton() {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={styles.container}>
      <Link to="/checkout">
        <button className={styles.button}>
          <div className={styles.icon}>
            <CartIcon />
          </div>
        </button>
      </Link>

      <div className={styles.cartContainer}>
        <span className={styles.title}>Seu carrinho</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </div>
    </div>
  );
}

export default HeaderCartButton;
