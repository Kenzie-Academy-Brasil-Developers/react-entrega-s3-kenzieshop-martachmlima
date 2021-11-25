import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_FROM_CART:
      const { id } = action;
      const newCart = state.filter((product) => product.id !== id);

      return newCart;

    default:
      return state;
  }
};

export default cartReducer;
