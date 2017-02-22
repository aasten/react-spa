import * as Actions from './actions';

export function basket(state={isShowingModal: false, positions: [], totalItemsCount: 0, totalPrice: 0}, action) {
  switch(action.type) {
    case Actions.SHOW_BASKET: return Object.assign({},state,{isShowingModal: true});
    case Actions.HIDE_BASKET: return Object.assign({},state,{isShowingModal: false});

    case Actions.ADD_TO_BASKET:
    {
      let alreadyExists = false;
      let totalItemsCount = state.totalItemsCount + 1;
      let totalPrice = state.totalPrice + action.position.price;
      state.positions.forEach((o) => {
        if(o.id===action.position.id) {
          alreadyExists = true;
          o.quantity += 1;
          // total price for the current quantity
          o.price = action.position.price * o.quantity;
        }
      });
      let positionsArray = (alreadyExists) ? state.positions : [...state.positions, Object.assign(action.position,{quantity:1})];
      return Object.assign({},state,{positions: positionsArray, totalItemsCount: totalItemsCount, totalPrice: totalPrice});
    }

    case Actions.REMOVE_FROM_BASKET:
    {
      let updatedPositions = state.positions;
      let removingIndex = state.positions.findIndex((o) => o.id===action.id);
      let totalItemsCount = state.totalItemsCount;
      let totalPrice = state.totalPrice;
      if(removingIndex > -1) {
        totalItemsCount -= state.positions[removingIndex].quantity;
        totalPrice -= state.positions[removingIndex].price;
        updatedPositions.splice(removingIndex,1);
      }
      return Object.assign({},state,{positions: updatedPositions, totalItemsCount: totalItemsCount, totalPrice: totalPrice});
    }
  }
  return state;
}
