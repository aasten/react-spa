import {combineReducers} from 'redux';
import entrySelection from 'entrySelection';

export default function (initialState={}) {
  return combineReducers(
    {
      selectedEntryId: entrySelection
    });
}
