import React, { Fragment, useState } from "react";
import "./App.scss";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartState, setCartState] = useState(false);

  const showCartHandler = () => {
    setCartState(true);
  };

  const hideCartHandler = () => {
    setCartState(false);
  };
  return (
    <Fragment>
      {cartState && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
