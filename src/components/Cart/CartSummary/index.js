import React from "react";
import CartItem from "../CartItem";
import Products from "../../../utilities/Products";
import styles from "./styles.module.css";

function CartSummary() {
  const cartItems = (
    <ul className={styles.listContainer}>
      {Products.map((product) => (
        <CartItem
          key={product.id}
          name={product.name}
          description={product.description}
          /* amount={product.amount} */
          price={product.price}
        />
      ))}
    </ul>
  );

  return (
    <div className={styles.container}>
      <div>{cartItems}</div>
      <div className={styles.totalContainer}>
        <span>Valor Total</span>
        <span>R$ XX,XX</span>
      </div>
    </div>
  );
}

export default CartSummary;
