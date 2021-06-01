import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import styles from "./styles.module.css";

function SingleItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.container} onSubmit={submitHandler}>
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
      {!amountIsValid && <p>Entre com um valor válido</p>}
    </form>
  );
}

export default SingleItemForm;
