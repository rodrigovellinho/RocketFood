import React, { useRef } from "react";
import Input from "../../UI/Input";
import styles from "./styles.module.css";

function SingleItemForm() {
  const amountInputRef = useRef();
  return (
    <form className={styles.container}>
      <Input
        label="Quantidade"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "1000",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={styles.button}>Adicionar</button>
    </form>
  );
}

export default SingleItemForm;
