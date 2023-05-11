import React from "react";
import styles from "./HeaderCart.module.scss";
import cartIcon from "../../assets/images/cart_icon.svg";

const HeaderCart: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <img src={cartIcon} alt="cart icon" className={styles.icon} />
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCart;
