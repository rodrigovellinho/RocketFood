import React from "react";
import styles from "./styles.module.css";

function CartItem(props) {
  const totalAmount = (props.price * props.amount).toFixed(2);
  return (
    <li className={styles.container}>
      <div className={styles.namePosition}>
        <div className={styles.btnContainer}>
          <button className={styles.buttonRemove} onClick={props.onRemove}>
            -
          </button>
          <span>{props.amount}</span>
          <button className={styles.buttonAdd} onClick={props.onAdd}>
            +
          </button>
        </div>
        <div className={styles.description}>
          <span>{props.description}</span>
        </div>
      </div>
      <div className={styles.price}>R$ {totalAmount}</div>
    </li>
  );
}

export default CartItem;
