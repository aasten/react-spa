export default function entrySelection(state, action) {
  switch(action.type) {
    case SELECT_ENTRY: return Object.assign({},state,{selectedEntryId: action.selectedEntryId})
  }
  return state;
}
