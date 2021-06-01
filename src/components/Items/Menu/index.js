import React, { useState } from "react";
import MenuItems from "../MenuItems";
import styles from "./styles.module.css";
import categories from "../../../utilities/Categories";
import products from "../../../utilities/Products";

function Menu() {
  const [filteredCategory, setFilteredCategory] = useState("0");

  const dropdownChangeCategory = (event) => {
    setFilteredCategory(event.target.value);
  };

  const selectCategories = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ));

  const filteredProducts = products.filter((product) => {
    return product.idCategory.toString() === filteredCategory;
  });

  return (
    <div className={styles.container}>
      <div className={styles.selectedCategories}>
        <select
          value={filteredCategory}
          onChange={dropdownChangeCategory}
          className={styles.selectCategory}
        >
          {selectCategories}
        </select>
      </div>
      <div>
        <MenuItems filteredProducts={filteredProducts} />
      </div>
    </div>
  );
}

export default Menu;
