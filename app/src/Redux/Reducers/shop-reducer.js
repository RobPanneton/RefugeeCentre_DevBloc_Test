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
    default:
      return state;
  }
};
