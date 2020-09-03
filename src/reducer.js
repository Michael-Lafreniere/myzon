export const initialState = {
  cart: [
    {
      id: '9854723',
      title:
        'Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6" Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, WiFi 6, RGB Keyboard',
      price: 1289.99,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81iyZv5W83L._AC_SL1500_.jpg',
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.item] };
    case 'REMOVE_FROM_CARD':
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
