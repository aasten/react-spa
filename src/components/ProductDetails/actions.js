import {RESTRootURL} from '../../params';
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const LOADING_ENTRY_DETAILS = 'LOADING_ENTRY_DETAILS';
export const LOADED_ENTRY_DETAILS = 'LOADED_ENTRY_DETAILS';
export const LOAD_ENTRY_DETAILS_FAILED = 'LOAD_ENTRY_DETAILS_FAILED';

// export function showModal() {
//   return {type: SHOW_MODAL};
// }
//
// export function closeModal() {
//   return {type: CLOSE_MODAL};
// }

// // loading details after selection
// export function selectEntry(entryId) {
//   return {type:SELECT_ENTRY, id: entryId};
// }

export function loadingEntryDetails() {
  return {type: LOADING_ENTRY_DETAILS};
}

export function loadedEntryDetails(details) {
if (process.env.NODE_ENV == 'development') console.log('loaded:',details);
  return {type: LOADED_ENTRY_DETAILS, details: details};
}

export function loadEntryDetailsFailed(failure) {
  return {type: LOAD_ENTRY_DETAILS_FAILED, failure: failure};
}


export function loadEntryDetails(entryId) {
  return (dispatch) => {
    dispatch(loadingEntryDetails());
    fetch(`${RESTRootURL}/entry/${entryId}`).then(
      (response) => {
        if (response.ok) response.json().then(
          (jsonDetails) => dispatch(loadedEntryDetails(jsonDetails)));
        else response.text().then((failure) => dispatch(loadEntryDetailsFailed(failure)));});
  };
}
