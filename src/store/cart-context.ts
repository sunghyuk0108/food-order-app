import React from "react";

export type Item = {
  id: string;
  name: string;
  amount: number;
  description?: string;
  price: number;
};

export type State = {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
};

const CartContext = React.createContext<State | null>({
  items: [],
  totalAmount: 0,
  addItem: (item: Item) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
