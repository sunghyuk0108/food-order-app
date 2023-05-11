import React, { Fragment } from "react";
import styles from "./Header.module.scss";
import mealsImg from "../../assets/images/meals.jpeg";
import HeaderCart from "../Layout/HeaderCart";

const Header: React.FC<{ onShowCart: () => void }> = (props) => {
  console.log(props);
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCart onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
