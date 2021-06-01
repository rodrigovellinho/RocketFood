import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer";
import CheckOutCartButton from "../Layout/CheckOutCartButton";
import CartSummary from "../Cart/CartSummary";
import styles from "./styles.module.css";
import CartContext from "../../hooks/CartContext";

function CartCheckOut(props) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

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
        {hasItems && <span>Revise seus items</span>}
      </div>
      <div className={styles.cartReturn}>
        {!hasItems && <span>Volte ao menu de compras!!</span>}
      </div>
      <CartSummary />
      <div className={styles.btnContainer}>
        <Link to="/">
          <button className={styles.buttonMenu} type="button">
            Voltar ao menu
          </button>
        </Link>
        {hasItems && (
          <button
            className={styles.button}
            type="submit"
            onClick={props.onShow}
          >
            Finalizar compra
          </button>
        )}
      </div>
    </div>
  );
}

export default CartCheckOut;
