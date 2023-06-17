import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart: React.FC<{ onHideCart: () => void }> = (props) => {
  // const cartItems = () => {
  //   <ul className={styles["cart-items"]}>
  //     {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>;
  // };

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx?.totalAmount?.toFixed(2)}`;
  const hasItems = cartCtx!.items!.length > 0;
  console.log(cartCtx);

  const onAddHandler = (item: {}) => {
    console.log("add");
  };
  const onRemoveHandler = (id: string) => {
    console.log("remove");
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={styles["cart-items"]}>
        {cartCtx?.items?.map((item, index) => (
          <CartItem
            key={index}
            id={item.id}
            price={item.price}
            amount={item.amount}
            name={item.name}
            onAdd={onAddHandler.bind(null, item)}
            onRemove={onRemoveHandler.bind(null, item.id)}
          >
            {item.name}
          </CartItem>
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
