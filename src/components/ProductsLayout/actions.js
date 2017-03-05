import {RESTRootURL} from '../../params';

export const LOADING_ENTRIES = 'LOADING_ENTRIES';
export const LOADED_ENTRIES = 'LOADED_ENTRIES';
export const LOAD_ENTRIES_FAILED = 'LOAD_ENTRIES_FAILED';


export function loadingEntries() {
  return {type: LOADING_ENTRIES};
}

export function loadedEntries(entries) {
  return {type: LOADED_ENTRIES, entries: entries};
}

export function loadEntriesFailed(failure) {
  return {type: LOAD_ENTRIES_FAILED, failure: failure};
}

export function loadEntriesNoCategoryFromWithCount(from, count) {
  return (dispatch) => {
    dispatch(loadingEntries());
    fetch(`${RESTRootURL}/entries/?from=${from}&count=${count}`).then(
      (response) => {
        if (response.ok) response.json().then(
          (jsonDetails) => dispatch(loadedEntries(jsonDetails)));
        else response.text().then((failure) => dispatch(loadEntriesFailed(failure)));});
  };
}
