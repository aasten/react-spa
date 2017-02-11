import {combineReducers} from 'redux';
import entrySelection from './components/Product/reducers';

export default combineReducers(
    {
      currentEntry: entrySelection,
      isShowingDetailsModal: showingModal
    });
