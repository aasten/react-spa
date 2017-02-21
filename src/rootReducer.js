import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {entryDetails} from './components/ProductDetails/reducers';

export default combineReducers(
    {
      entryDetails,
      routing: routerReducer,
    });
