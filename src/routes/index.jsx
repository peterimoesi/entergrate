import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingScreen from '../screens/landing';

const routes = (
    <Switch>
        <Route path="/" component={LandingScreen} />
    </Switch>
);

export default routes;
