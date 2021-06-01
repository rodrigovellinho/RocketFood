import React, { useState } from "react";
import Header from "../Layout/Header";
import CartCheckOut from "../CartCheckOut";
import CartSucced from "../Cart/CartSucced";

function CheckOut() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <CartSucced onClose={hideCartHandler} />}
      <Header />
      <CartCheckOut onShow={showCartHandler} />
    </div>
  );
}

export default CheckOut;
