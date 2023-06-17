import React, { ReactNode } from "react";
import classes from "./CartItem.module.css";

interface CartItemType {
  id: string;
  name: string;
  price: number;
  amount: number;
  // event 형식의 타입을 지정함.
  onRemove?: (event: React.MouseEvent<HTMLElement>) => void;
  onAdd?: (event: React.MouseEvent<HTMLElement>) => void;
  // React element, primitives, portals, fragments 모든것을 받아들임.
  children: ReactNode;
}

const CartItem: React.FC<CartItemType> = (props) => {
  const price = `$${props.price?.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
