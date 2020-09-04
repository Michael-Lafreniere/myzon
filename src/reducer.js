export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.item] };
    case 'REMOVE_FROM_CART':
      let tempCart = [...state.cart];

      const index = state.cart.findIndex(
        (tempCart) => tempCart.id === action.id
      );

      if (index >= 0) {
        tempCart.splice(index, 1);
      }

      return { ...state, cart: tempCart };
    case 'SET_USER':
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => amount + item.price, 0);

export default reducer;
