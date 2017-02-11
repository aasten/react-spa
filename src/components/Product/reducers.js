import './actions';

export function entrySelection(state, action) {
  switch(action.type) {
    // state.currentEntry.id = action.id
    case SELECT_ENTRY: return Object.assign({},state,
      Object.assign(state.currentEntry, {id: action.id}));
  }
  return state;
}

export function showingModal(state,action) {
  switch(action.type) {
    // state.currentEntry.isShowingModal = true
    case SHOW_MODAL: return Object.assign({},state, true);
    // state.currentEntry.isShowingModal = false
    case CLOSE_MODAL: return Object.assign({},state, false); 
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
