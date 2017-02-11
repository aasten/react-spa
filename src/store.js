import {createStore} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState={isShowingDetailsModal: false}) {
  return createStore(rootReducer,initialState,applyMiddleware(thunk));
}
