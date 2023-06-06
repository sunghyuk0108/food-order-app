import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart: React.FC<{ onHideCart: () => void }> = (props) => {
  // const cartItems = () => {
  //   <ul className={styles["cart-items"]}>
  //     {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>;
  // };

  const cartCtx = useContext(CartContext);

  const totalAmount = `₩${cartCtx?.totalAmount?.toFixed(2)}`;
  const hasItems = cartCtx!.items!.length > 0;
  console.log(cartCtx);

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={styles["cart-items"]}>
        {cartCtx?.items?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {/* 리액트노드에 포함될 수 있도록 랩핑함. */}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
