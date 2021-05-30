import React, { useState } from "react";
import Header from "../Layout/Header";
import CartCheckOut from "../CartCheckOut";
import CartSucced from "../Cart/CartSucced";

function CheckOut() {
  return (
    <div>
      {/*  {modalIsShown && <CartCheckOut onClose={hideModalHandler} />} */}
      <Header />
      <CartCheckOut />
    </div>
  );
}

export default CheckOut;
