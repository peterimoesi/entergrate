import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingScreen from '../screens/landing';
import UserApplyScreen from '../screens/usersApply';
import VolunteerDashboard from '../screens/dashboard/volunteers';
import OrganisationDashboard from '../screens/dashboard/organisations';
import Login from '../screens/login';
import NoPage from '../screens/no-page';

const routes = (
    <Switch>
        <Route path="/app/organisations" component={OrganisationDashboard} />
        <Route path="/app/volunteers" component={VolunteerDashboard} />
        <Route path="/apply" component={UserApplyScreen} />
        <Route path="/login" component={Login} />
        <Route path="/" component={LandingScreen} />
        <Route component={NoPage} />
    </Switch>
);

export default routes;
