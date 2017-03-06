import {RESTRootURL} from '../../params';

export const LOADING_ENTRIES = 'LOADING_ENTRIES';
export const LOADED_ENTRIES = 'LOADED_ENTRIES';
export const LOAD_ENTRIES_FAILED = 'LOAD_ENTRIES_FAILED';
export const SET_CURRENT_PAGE_NUMBER = 'SET_CURRENT_PAGE_NUMBER';


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
console.log('fetched');
        if (response.ok) response.json().then(
          (jsonDetails) => dispatch(loadedEntries(jsonDetails)));
        else response.text().then((failure) => dispatch(loadEntriesFailed(failure)));});
  };
}

export function setCurrentPageNumber(page) {
  return {type: SET_CURRENT_PAGE_NUMBER, page: page};
}

export function setCurrentPageNumberAsync(page) {
  return (dispatch) => dispatch(setCurrentPageNumber(page));
}
