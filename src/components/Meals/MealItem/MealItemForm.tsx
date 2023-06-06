import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.scss";
import Input from "../../UI/Input";

const MealItemForm = (props: any) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredAmount = Number(amountInputRef.current?.value);

    if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    console.log(enteredAmount, "수량");
    props.onAddToCart(enteredAmount);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>1~5개 수량을 입력하세요</p>}
    </form>
  );
};

export default MealItemForm;
