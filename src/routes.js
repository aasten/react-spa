import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ProductsLayout from './components/ProductsLayout/component';
import ProductDetailsRoutes from './components/ProductDetails/routes';
import App from './App';

export default (
  <Route component={App} path = {App.path}>
    <IndexRoute component={ProductsLayout}/>

    {ProductDetailsRoutes}

  </Route>
)
