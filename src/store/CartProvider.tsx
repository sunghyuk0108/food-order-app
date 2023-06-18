import { useReducer } from "react";
import CartContext from "./cart-context";
import { Item, State } from "./cart-context";
//store에 별도의 provider로 관리하는 이유는 앱 수준 state가 여러 개 있는 더 큰 어플리케이션이(예를 들어 제품 state, 장바구니 state, 사용자 state 등)라면 app.tsx에서 관리하는것보다 훨씬 간결하게 유지할 수 있음
// 해당 컴포넌트는 CartContext 데이터를 관리하고 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 것이 목표임
// 일단 any로 지정해둠

// export type CartContextType = {
//   items: Item[];
//   totalAmount: number;
//   addItem: (item: Item) => void;
//   removeItem: (id: string) => void;
// };

type Action =
  | {
      type: "ADD";
      item: Item;
    }
  | { type: "REMOVE"; id: string };

type DefaultCartStateType = {
  items: Item[];
  totalAmount: number;
};

const defaultCartState: any = {
  items: [],
  totalAmount: 0,
};

//
const cartReducer = (state: DefaultCartStateType, action: Action) => {
  if (action.type === "ADD") {
    // push와 달리 기존 배열을 편집하는게 아니라 추가 후 새 배열을 반환함
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // 배열 항목의 인덱스를 찾는 findIndex 활용 찾는 항목이 맞으면 true, 아니라면 false
    const existingCartItemIndex = state.items.findIndex((item: Item) => {
      return item.id === action.item.id;
    });
    // 0,1,2,3 4개 항목의 index가 확인됨
    // console.log(existingCartItemIndex, "인덱스 확인");

    const existingCartItem = state.items[existingCartItemIndex];
    // state.items[1] 2, 3 ... 확인됨
    // console.log(existingCartItem, "state.items[찾는 인덱스]");

    let updatedItems;

    if (existingCartItem) {
      // item 객체의 다른값은 동일하고 amount 수량만 업데이트해줌
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      console.log(updatedItem, "item이 이미 추가됐을 때");
      // updatedItems는 기존 배열과 같다 메모리에 있는 기존 배열을 편집하지 않고 기존 객체를 복사하는 새 배열을 만듬.
      updatedItems = [...state.items];
      // updatedItems[인덱스] 찾은 객체를 updatedItem으로 덮음.
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // 만약 새로 추가된다면 updatedItem = {...action.item}과 같고 updatedItems 배열에 action.item 객체를 추가함.
      updatedItems = state.items?.concat(action.item);
    }

    // const updatedItems = state.items?.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // if ((action.type = "REMOVE")) {
  // }
  return defaultCartState;
};

const CartProvider = (props: any) => {
  // 첫번째 인수로 reducerFn : 리듀서 함수에는 최신 state 스냅샷과 디스패치된 액션을 인수 값으로 받음 (state, action)
  // 두번째 인수로 초기 state 설정
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // item 추가 action
  const addItemToCartHandler = (item: Item) => {
    // dispatch 보통은 객체로 사용함
    dispatchCartAction({ type: "ADD", item: item });
  };

  // item 삭제 action
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext: State = {
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
