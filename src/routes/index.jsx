import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingScreen from '../screens/landing';
import UserApplyScreen from '../screens/usersApply';
import Dashboard from '../screens/dashboard';
import Login from '../screens/login';
import NoPage from '../screens/no-page';
import OpenEvents from '../screens/openEvents';

const routes = (
    <Switch>
        <Route path="/dashboard/:ext?" component={Dashboard} />
        <Route path="/open-events/:id?" component={OpenEvents} />
        <Route path="/apply" component={UserApplyScreen} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={LandingScreen} />
        <Route path="*" component={NoPage} />
    </Switch>
);

export default routes;
