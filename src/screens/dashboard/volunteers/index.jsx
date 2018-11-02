import React from 'react';
import Profile from '../profile';
import Interest from './interest';
import Search from './openPositions';
import NotificationMenu from '../../../components/notificationMenu';

class VolunteerDashboard extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {}
    render() {
        return (
            <div>
                <Profile />
                <Interest />
                <Search />
                <NotificationMenu />
            </div>
        );
    }
}

export default VolunteerDashboard;
