import React from "react";
import styles from "./Input.module.scss";

// 컴포넌트에 ref 사용을 위해 forwardRef로 감싸고 두번째 인수로 ref를 얻게함.
const Input = React.forwardRef((props: any, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* 전개 연산자를 사용하여 porps.input을 넣어 iput 요소가 모두 추가될 수 있도록함. */}
    </div>
  );
});

export default Input;
