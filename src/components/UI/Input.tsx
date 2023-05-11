import React from "react";
import styles from "./Input.module.scss";

const Input = (props: any) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* 전개 연산자를 사용하여 porps.input을 넣어 iput 요소가 모두 추가될 수 있도록함. */}
    </div>
  );
};

export default Input;
