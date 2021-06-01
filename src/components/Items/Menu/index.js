import React from "react";
import MenuItems from "../MenuItems";
import styles from "./styles.module.css";
import categories from "../../../utilities/Categories";

function Menu() {
  const selectCategories = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ));

  console.log(selectCategories);

  return (
    <div className={styles.container}>
      <div className={styles.selectedCategories}>
        <select className={styles.selectCategory}>{selectCategories}</select>
      </div>
      <div>
        <MenuItems />
      </div>
    </div>
  );
}

export default Menu;
