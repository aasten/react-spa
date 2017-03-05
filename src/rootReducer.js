import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {entryDetails} from './components/ProductDetails/reducers';
import {basket} from './components/Basket/reducers';
import {productsLayout} from './components/ProductsLayout/reducers';

export default combineReducers(
    {
      entryDetails,
      basket,
      productsLayout,
      routing: routerReducer,
    });
