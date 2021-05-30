import React from "react";
import Header from "../Layout/Header";
import Menu from "../Items/Menu";

function MainPage() {
  return (
    <div>
      <Header /* onShowModal={showModalHandler} */ />
      <Menu />
    </div>
  );
}

export default MainPage;
