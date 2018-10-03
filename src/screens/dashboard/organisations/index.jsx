import React from 'react';

import Profile from '../profile';
import Events from './events';
import Search from '../search';

class OrganisationDashboard extends React.Component {
    render() {
        return (
            <div>
                <Profile />
                <Events />
                <Search />
            </div>
        );
    }
}

export default OrganisationDashboard;
