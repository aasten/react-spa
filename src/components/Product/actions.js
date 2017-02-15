
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function showModal() {
  return {type: SHOW_MODAL};
}

export function closeModal() {
  return {type: CLOSE_MODAL};
}

// loading details after selection
export function selectEntry(entryId) {
  return {type:SELECT_ENTRY, id: entryId};
}

export function selectEntryAndShowModal(entryId) {
  return (dispatch,getState) => {
    console.log('state before selectEntry: ',getState());
    dispatch(selectEntry(entryId));
    console.log('state before showModal: ',getState());
    dispatch(showModal());
    console.log('state after showModal: ',getState());
  };
}
