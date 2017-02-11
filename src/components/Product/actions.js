
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function showModal() {
  return () => {type: SHOW_MODAL};
}

export function closeModal() {
  return () => {type: CLOSE_MODAL};
}

// loading details after selection
export function selectEntry(entryId) {
  return () => {type:SELECT_ENTRY, id: entryId};
}

export function selectEntryAndShowModal(entryId) {
  return (dispatch,getStage) => {
    dispatch(selectEntry(entryId));
    dispatch(showModal);
  }
}
