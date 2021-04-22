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
      return {
        ...state,
        shopInv: action.payload,
      };
    case "ADD_TO_CART":
      const currentItem = state.cart[action.payload.title];
      return {
        ...state,
        cart:{
          ...state.cart,
          [action.payload.title]:
          {...action.payload,
          quantity: currentItem ? currentItem.quantity + 1 : 1,
          }
        }
      }
    case "CHANGE_CATEGORY":
      return {
        ...state,
        categorySelected: action.payload,
      }
    default:
      return state;
  }
};
