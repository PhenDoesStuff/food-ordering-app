import { createContext } from "react/cjs/react.development";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {}
  removeItem: (id) => {}
})

export default CartContext;