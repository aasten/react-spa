import {SELECT_ENTRY,SHOW_MODAL,CLOSE_MODAL} from './actions';

export function currentEntry(state={isShowingDetailsModal: false}, action) {
  switch(action.type) {
    // state.currentEntry.id = action.id
    case SELECT_ENTRY: return Object.assign({},state, {id: action.id});
    // state.currentEntry.isShowingModal = true
    case SHOW_MODAL: return Object.assign({},state,{isShowingDetailsModal: true});
    // state.currentEntry.isShowingModal = false
    case CLOSE_MODAL: return Object.assign({},state,{isShowingDetailsModal: false});
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
