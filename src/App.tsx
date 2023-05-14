import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartState, setCartState] = useState(false);

  const showCartHandler = () => {
    setCartState(true);
  };

  const hideCartHandler = () => {
    setCartState(false);
  };
  return (
    <CartProvider>
      {cartState && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
