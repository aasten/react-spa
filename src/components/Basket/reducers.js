import * as Actions from './actions';

export function basket(state={isShowingModal: false, positions: []}, action) {
  switch(action.type) {
    case Actions.SHOW_BASKET: return Object.assign({},state,{isShowingModal: true});
    case Actions.HIDE_BASKET: return Object.assign({},state,{isShowingModal: false});

    case Actions.ADD_TO_BASKET:
    let alreadyExists = false;
    state.positions.forEach((o) => {
      if(o.id===action.position.id) {
        alreadyExists = true;
        o.quantity += 1;
        // total price for the current quantity
        o.price = action.position.price * o.quantity;
      }
    });
    let positionsArray = (alreadyExists) ? state.positions : [...state.positions, Object.assign(action.position,{quantity:1})];
    return Object.assign({},state,{positions: positionsArray});

    case Actions.REMOVE_FROM_BASKET:
    let updatedPositions = state.positions;
    let removingIndex = state.positions.findIndex((o) => o.id===action.id);
    if(removingIndex > -1) updatedPositions.splice(removingIndex,1);
    return Object.assign({},state,{positions: updatedPositions});
  }
  return state;
}
