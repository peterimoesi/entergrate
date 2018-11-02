import React from 'react';

import Profile from '../profile';
import Events from './events';
import Search from '../volunteers/openPositions';
import NotificationMenu from '../../../components/notificationMenu';

const OrganisationDashboard = () => (
    <div>
        <Profile />
        <Events />
        <Search />
        <NotificationMenu />
    </div>
);

export default OrganisationDashboard;
