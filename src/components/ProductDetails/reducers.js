import * as Actions from './actions';

export function entryDetails(state={isShowingModal: false}, action) {
  switch(action.type) {
    case Actions.SELECT_ENTRY: return Object.assign({},state, {entryId: action.id});
    case Actions.LOADING_ENTRY_DETAILS: return Object.assign({},state, {dataIsLoading: true});
    case Actions.LOAD_ENTRY_DETAILS_FAILED: return Object.assign({},state, {dataIsLoading: false, failure: action.failure, details:undefined});
    case Actions.LOADED_ENTRY_DETAILS: return Object.assign({},state, {dataIsLoading: false, details: action.details});
    case Actions.SHOW_MODAL: return Object.assign({},state,{isShowingModal: true});
    case Actions.CLOSE_MODAL: return Object.assign({},state,{isShowingModal: false});
  }
  return state;
}


// export function closingModal(state, action) {
//   switch(action.type) {
//     // state.currentEntry.isShowingModal = false
//     case CLOSE_MODAL: return Object.assign({},state,
//       Object.assign(state.currentEntry, {isShowingModal: false}));
//   }
// }
