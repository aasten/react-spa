import * as Actions from './actions';

export function basket(state={isShowingModal: false, positions: []}, action) {
  switch(action.type) {
    case Actions.SHOW_BASKET: return Object.assign({},state,{isShowingModal: true});
    case Actions.HIDE_BASKET: return Object.assign({},state,{isShowingModal: false});
    // TODO check existence of the position and increment in such a case
    case Actions.ADD_TO_BASKET:
    let newPosition = Object.assign(action.position,{quantity:1});
    return Object.assign({},state,{positions: [...state.positions, Object.assign(action.position,{quantity:1})]});
  }
  return state;
}
