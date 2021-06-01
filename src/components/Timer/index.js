import React, { useContext } from "react";
import Countdown, { zeroPad } from "react-countdown";
import CartContext from "../../hooks/CartContext";

function Timer() {
  const { resetCart } = useContext(CartContext);

  function onComplete() {
    return resetCart();
  }

  const Completionist = () => <span>Volte ao menu</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          Restam: {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + 900000}
      renderer={renderer}
      onComplete={onComplete}
    />
  );
}

export default Timer;
