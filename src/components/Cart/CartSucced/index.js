import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";
import styles from "./styles.module.css";
import Checked from "../../../assets/check.png";
import CartContext from "../../../hooks/CartContext";

function CartSucced(props) {
  const cartCtx = useContext(CartContext);

  return (
    <Modal className={styles.modal} onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={Checked} alt="Compra confimada" />
          <h2>Sua compra foi realizada com sucesso!!</h2>
        </div>
        <div>
          <Link to="/">
            <button className={styles.button} onClick={cartCtx.resetCart}>
              Finalizar
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default CartSucced;
