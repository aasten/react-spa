import {RESTRootURL} from '../../params';
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const LOADING_ENTRY_DETAILS = 'LOADING_ENTRY_DETAILS';
export const LOADED_ENTRY_DETAILS = 'LOADED_ENTRY_DETAILS';
export const LOAD_ENTRY_DETAILS_FAILED = 'LOAD_ENTRY_DETAILS_FAILED';

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

export function loadingEntryDetails() {
  return {type: LOADING_ENTRY_DETAILS};
}

export function loadedEntryDetails(details) {
console.log('loaded:',details);
  return {type: LOADED_ENTRY_DETAILS, details: details};
}

export function loadEntryDetailsFailed(failure, entryId) {
  return {type: LOAD_ENTRY_DETAILS_FAILED, failure: failure, entryId: entryId};
}


export function loadEntryDetails(entryId) {
  console.log('invoked loadEntryDetails');
  return (dispatch) => {
    dispatch(loadingEntryDetails());
console.log('fetching',`${RESTRootURL}/product/${entryId}`);
    fetch(`${RESTRootURL}/product/${entryId}`).then(
      (data) => data.json(),
      (failure) => dispatch(loadEntryDetailsFailed(failure)))
      .then(
        (jsonDetails) => dispatch(loadedEntryDetails(jsonDetails)),
        (failure) => dispatch(loadEntryDetailsFailed(failure)));
  };
}

// export function selectEntryAndShowModal(entryId) {
//   return (dispatch,getState) => {
// console.log('state before selectEntry: ',getState());
//     dispatch(selectEntry(entryId));
//     console.log('state before showModal: ',getState());
//     dispatch(loadEntryDetails(entryId));
//     dispatch(showModal());
//     console.log('state after showModal: ',getState());
//   };
// }
