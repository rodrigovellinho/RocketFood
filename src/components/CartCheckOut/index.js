import React from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer";
import CheckOutCartButton from "../Layout/CheckOutCartButton";
import CartSummary from "../Cart/CartSummary";
import styles from "./styles.module.css";

function CartCheckOut(props) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Finalizar Pedido</span>
      <div className={styles.cartContainer}>
        <div>
          <CheckOutCartButton />
        </div>
        <div className={styles.establishment}>
          <span>Armazém do seu Zé</span>
          <div className={styles.timer}>
            <Timer />
          </div>
        </div>
      </div>
      <div className={styles.cartSummary}>
        <span>Revise seus items</span>
      </div>
      <CartSummary />

      <div className={styles.btnContainer}>
        <Link to="/">
          <button className={styles.buttonMenu} type="button">
            Voltar ao menu
          </button>
        </Link>
        <button className={styles.button} type="submit">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default CartCheckOut;
