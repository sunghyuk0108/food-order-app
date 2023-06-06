import { useReducer } from "react";
import CartContext from "./cart-context";
import { Item } from "./cart-context";
//store에 별도의 provider로 관리하는 이유는 앱 수준 state가 여러 개 있는 더 큰 어플리케이션이(예를 들어 제품 state, 장바구니 state, 사용자 state 등)라면 app.tsx에서 관리하는것보다 훨씬 간결하게 유지할 수 있음
// 해당 컴포넌트는 CartContext 데이터를 관리하고 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 것이 목표임
// 일단 any로 지정해둠

type Action =
  | {
      type: "ADD";
      item: any;
    }
  | { type: "REMOVE"; id: string };

type DefaultCartStateType = {
  items: [];
  totalAmount: number;
};

const defaultCartState: any = {
  items: [],
  totalAmount: 0,
};

//
const cartReducer = (state: DefaultCartStateType, action: Action) => {
  if (action.type === "ADD") {
    console.log("item 추가");
    // push와 달리 기존 배열을 편집하는게 아니라 추가 후 새 배열을 반환함
    const updatedItems = state.items?.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    console.log(state.totalAmount, " 토탈 금액 확인");
    console.log(action.item.price, action.item.amount, "음식 금액, 수량 확인");
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props: any) => {
  // 첫번째 인수로 reducerFn : 리듀서 함수에는 최신 state 스냅샷과 디스패치된 액션을 인수 값으로 받음 (state, action)
  // 두번째 인수로 초기 state 설정
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: Item) => {
    // dispatch 보통은 객체로 사용함
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
