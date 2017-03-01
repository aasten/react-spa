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

export function loadEntryDetailsFailed(failure) {
  return {type: LOAD_ENTRY_DETAILS_FAILED, failure: failure};
}


export function loadEntryDetails(entryId) {
  return (dispatch) => {
    dispatch(loadingEntryDetails());
    fetch(`${RESTRootURL}/entry/${entryId}`).then(
      (response) => { if (response.ok) return response.json();
          else throw new Error(response.statusText);})
      .then(
        (jsonDetails) => dispatch(loadedEntryDetails(jsonDetails))/*,
        (failure) => dispatch(loadEntryDetailsFailed(failure))*/)
      .catch((errObj) => dispatch(loadEntryDetailsFailed(errObj.message)));
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
