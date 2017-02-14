import {combineReducers} from 'redux';
import {entrySelection, showingModal} from './components/Product/reducers';

export default combineReducers(
    {
      currentEntry: entrySelection,
      isShowingDetailsModal: showingModal
    });
