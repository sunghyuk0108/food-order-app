import CartContext from "./cart-context";
//store에 별도의 provider로 관리하는 이유는 앱 수준 state가 여러 개 있는 더 큰 어플리케이션이(예를 들어 제품 state, 장바구니 state, 사용자 state 등)라면 app.tsx에서 관리하는것보다 훨씬 간결하게 유지할 수 있음
// 해당 컴포넌트는 CartContext 데이터를 관리하고 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 것이 목표임
// 일단 any로 지정해둠
const CartProvider = (props : any) => {
    const addItemToCartHandler = () => {

    }
    const removeItemFromCartHandler = () => {

    }
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;