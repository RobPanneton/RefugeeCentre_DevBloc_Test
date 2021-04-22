const initialState = {
  shopInv: null,
  cart: {},
  categorySelected: "All",
  loadStatus: "",
  shopIndex: 0,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POPULATE_INVENTORY":
      const properInvPrices = action.payload.map((item) => {
        return { ...item, price: item.price - (item.price % 1) + 0.99 };
      });
      return {
        ...state,
        shopInv: properInvPrices,
      };
    case "ADD_TO_CART":
      const currentItem = state.cart[action.payload.title];
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.title]: {
            ...action.payload,
            quantity: currentItem ? currentItem.quantity + 1 : 1,
          },
        },
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        categorySelected: action.payload,
      };
    default:
      return state;
  }
};
