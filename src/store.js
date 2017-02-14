import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState={currentEntry: {}, isShowingDetailsModal: false}) {
  return createStore(rootReducer,initialState,applyMiddleware(thunk));
}
