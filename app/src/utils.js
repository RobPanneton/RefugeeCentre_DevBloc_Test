export const calculateTotal = (cart) => {
  //reduce method to add totals, fixed to 2 decimals
  return Object.keys(cart)
    .reduce((accumulator, key) => {
      return accumulator + Number(cart[key].price) * Number(cart[key].quantity);
    }, 0)
    .toFixed(2);
};
