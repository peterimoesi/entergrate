import React from 'react';

import Profile from '../profile';
import Events from './events';
import Search from '../entergrates/openPositions';
import NotificationMenu from '../../../components/notificationMenu';

const AdminDashboard = () => (
    <div>
        <Profile />
        <Events />
        <Search />
        <NotificationMenu />
    </div>
);

export default AdminDashboard;
