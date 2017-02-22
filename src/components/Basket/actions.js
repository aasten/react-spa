export const SHOW_BASKET = 'SHOW_BASKET';
export const HIDE_BASKET = 'HIDE_BASKET';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export function showModal() {
  return {type: SHOW_BASKET};
}

export function closeModal() {
  return {type: HIDE_BASKET};
}

// TODO retreving name and price by id in async action (Promise), only id should retain
export function addToBasket(id, name, price) {
  return {type: ADD_TO_BASKET, position: {id: id, name: name, price: price}};
}

export function removeFromBasket(id) {
  console.log('remove',id);
  return {type: REMOVE_FROM_BASKET, id: id};
}
