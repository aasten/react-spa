import * as Actions from './actions';

// TODO get rid of failure property?
export function entryDetails(state={isShowingModal: false}, action) {
  switch(action.type) {
    case Actions.SELECT_ENTRY: return Object.assign({},state, {entryId: action.id});
    case Actions.LOADING_ENTRY_DETAILS: return Object.assign({},state, {dataIsLoading: true, failure: undefined});
    case Actions.LOAD_ENTRY_DETAILS_FAILED: return Object.assign({},state, {dataIsLoading: false, failure: action.failure, details:undefined});
    case Actions.LOADED_ENTRY_DETAILS: return Object.assign({},state, {dataIsLoading: false, details: action.details, failure: undefined});
    case Actions.SHOW_MODAL: return Object.assign({},state,{isShowingModal: true});
    case Actions.CLOSE_MODAL: return Object.assign({},state,{isShowingModal: false});
  }
  return state;
}
