import React, { useContext } from "react";
import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

type MealItemType = {
  id: string;
  name: string;
  price: number;
  description: string;
};

const MealItem = (props: MealItemType) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price}`;

  const addToCartHandler = (amount: number) => {
    cartCtx?.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
