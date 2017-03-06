import React from 'react';
import { IndexRoute, Route } from 'react-router';
import ProductsLayout from './component';

export default (
  <Route>
    <IndexRoute component={ ProductsLayout } />
    <Route component={ ProductsLayout } path={ ProductsLayout.path } />
  </Route>
);
