import React, { useContext } from "react";
import CartContext from "../../../hooks/CartContext";
import SingleItemForm from "../SingleItemForm";
import styles from "./styles.module.css";

function SingleItem(props) {
  const cartCtx = useContext(CartContext);
  const price = props.price.toFixed(2);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.description}>{props.description}</span>
        <span className={styles.price}>R$ {price}</span>
      </div>
      <div className={styles.itemForm}>
        <SingleItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
}

export default SingleItem;
