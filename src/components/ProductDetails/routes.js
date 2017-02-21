import React from 'react';
import { Route } from 'react-router';
import MoreInfo from './MoreInfo';

export default (
    <Route>
        <Route component={ MoreInfo } path={ MoreInfo.path } />
    </Route>
);
