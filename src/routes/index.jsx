import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingScreen from '../screens/landing';
import UserApplyScreen from '../screens/usersApply';
import VolunteerDashboard from '../screens/dashboard/volunteers';
import NoPage from '../screens/no-page';

const routes = (
    <Switch>
        <Route path="/app/volunteers" component={VolunteerDashboard} />
        <Route path="/apply" component={UserApplyScreen} />
        <Route path="/" component={LandingScreen} />
        <Route component={NoPage} />
    </Switch>
);

export default routes;
