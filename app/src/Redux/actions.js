export const populateInventory = (item) => ({
  type: "POPULATE_INVENTORY",
  payload: item,
});

export const changeCategory = (category) => ({
  type: "CHANGE_CATEGORY",
  payload: category,
});

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const incrementQuantity = (item) => ({
  type: "INCREMENT_QUANTITY",
  payload: item,
});

export const decrementQuantity = (item) => ({
  type: "DECREMENT_QUANTITY",
  payload: item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});
