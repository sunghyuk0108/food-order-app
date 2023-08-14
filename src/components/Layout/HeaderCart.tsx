import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCart.module.scss";
import cartIcon from "../../assets/images/cart_icon.svg";
import { Item } from "../../store/cart-context";

const HeaderCart: React.FC<{ onClick: () => void }> = (props) => {
  // context가 변결될 때마다 컴포넌트 재평가
  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHiglighted] = useState(false);

  // reduce는 데이터 배열을 값 하나로 변환해 주는 메소드 첫번째 인수는 함수 이때 해당 함수에 인수는  두개의 인수를 받는데 첫번째 curNumber(현재수량)을 입력하고 두번째 인수로 관리될 item을 입력, 두번째 인수는 초기값이 설정됨.
  const numberOfCartItems = cartCtx?.items?.reduce((curNumber, item: Item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartCtx?.items && cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHiglighted(true);
    const timer = setTimeout(() => {
      setBtnIsHiglighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx?.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <img src={cartIcon} alt="cart icon" className={styles.icon} />
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCart;
