import React from 'react';
import Profile from '../profile';
import Interest from './interest';
import Search from './openPositions';

class VolunteerDashboard extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {}
    render() {
        return (
            <div>
                <Profile uploadCV />
                <Interest />
                <Search />
            </div>
        );
    }
}

export default VolunteerDashboard;
