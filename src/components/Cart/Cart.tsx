import React from "react";
import styles from "./Cart.module.scss";
import Modal from "../UI/Modal";

const Cart: React.FC<{ onHideCart: () => void }> = (props) => {
  // const cartItems = () => {
  //   <ul className={styles["cart-items"]}>
  //     {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>;
  // };

  return (
    <Modal onHideCart={props.onHideCart}>
          <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
      {/* 리액트노드에 포함될 수 있도록 랩핑함. */}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
