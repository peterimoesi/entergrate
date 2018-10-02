import React from 'react';

import Profile from '../profile';
import Interest from './interest';
import Search from './search';

class VolunteerDashboard extends React.Component {
    componentDidMount() {
        console.log('silence');
    }
    render() {
        return (
            <div>
                <Profile />
                <Interest />
                <Search />
            </div>
        );
    }
}

export default VolunteerDashboard;
