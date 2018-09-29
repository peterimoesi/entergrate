import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingScreen from '../screens/landing';
import UserApplyScreen from '../screens/usersApply';

const routes = (
    <Switch>
        <Route path="/apply" component={UserApplyScreen} />
        <Route path="/" component={LandingScreen} />
    </Switch>
);

export default routes;
