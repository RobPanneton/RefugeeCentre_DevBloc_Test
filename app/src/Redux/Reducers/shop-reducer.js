const initialState = {
  shopInv: null,
  cart: {},
  categorySelected: "All",
  loadStatus: "",
  shopIndex: 0,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD INVENTORY TO REDUX STORE
    case "POPULATE_INVENTORY":
      const properInvPrices = action.payload.map((item) => {
        return { ...item, price: item.price - (item.price % 1) + 0.99 };
      });
      return {
        ...state,
        shopInv: properInvPrices,
      };
    // ADD ITEM TO CART (+1)
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
    // CHANGE CATEGORY
    case "CHANGE_CATEGORY":
      return {
        ...state,
        categorySelected: action.payload,
      };

    // REMOVE ITEM FROM CART
    case "REMOVE_FROM_CART":
      const stateRemovalCopy = { ...state };
      delete stateRemovalCopy.cart[action.payload];
      return {
        ...stateRemovalCopy,
      };

    // Increase Quantity (+1)
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: {
            ...state.cart[action.payload],
            quantity: state.cart[action.payload].quantity + 1,
          },
        },
      };

    // Decrease Quantity (-1)
    case "DECREMENT_QUANTITY":
      // guard clause
      if (state.cart[action.payload].quantity > 1)
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload]: {
              ...state.cart[action.payload],
              quantity: state.cart[action.payload].quantity - 1,
            },
          },
        };
      return { ...state };
    default:
      return state;
  }
};
