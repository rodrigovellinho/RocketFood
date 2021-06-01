import React from "react";
import products from "../../../utilities/Products";
import SingleItem from "../SingleItem";
import styles from "./styles.module.css";

function MenuItems() {
  const productsList = products.map((product) => (
    <SingleItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return <div className={styles.container}>{productsList}</div>;
}

export default MenuItems;
