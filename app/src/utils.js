export const calculateTotal = (cart) => {
  //reduce method to add totals, fixed to 2 decimals
  return Object.keys(cart)
    .reduce((accumulator, key) => {
      return accumulator + Number(cart[key].price) * Number(cart[key].quantity);
    }, 0)
    .toFixed(2);
};

export const initialData = {
  firstName: null,
  lastName: null,
  email: null,
  address1: null,
  address2: null,
  creditcard: null,
  expiry: null,
  ccv: null,
};
