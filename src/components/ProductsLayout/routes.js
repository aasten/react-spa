import React from 'react';
import { IndexRoute, Route } from 'react-router';
import ProductsLayout from './component';

export default (
    <IndexRoute>
        <Route component={ ProductsLayout } path={ ProductsLayout.path } />
    </IndexRoute>
);
