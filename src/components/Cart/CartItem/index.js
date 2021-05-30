import React from "react";
import styles from "./styles.module.css";

function CartItem(props) {
  return (
    <li className={styles.container}>
      <div className={styles.namePosition}>
        <div className={styles.btnContainer}>
          {/*  <span>{props.amount}</span> */}
          <button className={styles.buttonRemove}>-</button>
          <span>XX</span>
          <button className={styles.buttonAdd}>+</button>
        </div>
        <div className={styles.description}>
          <span>{props.name}</span>
        </div>
      </div>
      <div className={styles.price}>R$ {props.price}</div>
    </li>
  );
}

export default CartItem;
