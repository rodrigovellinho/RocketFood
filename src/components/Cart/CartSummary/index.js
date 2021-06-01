import React, { useContext } from "react";
import CartItem from "../CartItem";
import styles from "./styles.module.css";
import CartContext from "../../../hooks/CartContext";

function CartSummary(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles.listContainer}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartHasItems = (
    <div className={styles.container}>
      <div>{cartItems}</div>
      <div className={styles.totalContainer}>
        <span>Valor Total</span>
        <span>R$ {totalAmount}</span>
      </div>
    </div>
  );

  return <div>{cartCtx.items.length ? cartHasItems : ""}</div>;
}

export default CartSummary;
