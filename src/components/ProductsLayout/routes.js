import React from 'react';
import { IndexRoute, Route } from 'react-router';
import ProductsLayout from './component';

export default (
  <Route>
    <Route component={ ProductsLayout } path={ ProductsLayout.path } />
  </Route>
);

{/* <Route component={ ProductsLayout } path={ ProductsLayout.path } />
</IndexRoute> */}
