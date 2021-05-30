import React from "react";
import SingleItemForm from "../SingleItemForm";
import styles from "./styles.module.css";

function SingleItem(props) {
  function numberFormat(number) {
    if (!number) return null;
    return new Intl.NumberFormat("pt-br", {
      style: "decimal",
      maximumFractionDigits: 2,
    }).format(number);
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.description}>{props.description}</span>
        <span className={styles.price}>R$ {numberFormat(props.price)}</span>
      </div>
      <div className={styles.itemForm}>
        <SingleItemForm />
      </div>
    </div>
  );
}

export default SingleItem;
