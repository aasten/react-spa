import * as Actions from './actions';

export function productsLayout(state = {isLoading: false, countOnLayout: 4}, action) {
  switch(action.type) {
    case Actions.LOADING_ENTRIES: {
console.log('loading entries');
      return Object.assign({}, state, {isLoading: true, failure: undefined});
    } break;
    case Actions.LOADED_ENTRIES: {
console.log('loaded entries');
      return Object.assign({}, state, {isLoading: false, entries: action.entries});
    } break;
    case Actions.LOAD_ENTRIES_FAILED: {
console.log('load entries failed');
      return Object.assign({}, state, {isLoading: false, entries: undefined, failure: action.failure});
    } break;
    case Actions.SET_CURRENT_PAGE_NUMBER: {
      return Object.assign({}, state, {page: action.page});
    } break;
  }
  return state;
}
