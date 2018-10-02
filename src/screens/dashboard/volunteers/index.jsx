import React from 'react';
import axios from 'axios';

import Profile from '../profile';
import Interest from './interest';
import Search from './search';

class VolunteerDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            header: 'Init'
        };
    }
    componentDidMount() {
        axios.get(`${global.apiUrl}/api/users`).then(response => {
            if (response.status === 200) {
                this.setState({
                    header : response.data.message
                });
            } else {
                this.setState({
                    header : 'Forbidden'
                });
            }
        }).catch(e => {
            this.setState({
                header : 'Forbidden ' + e
            });
        });


        console.log('silence');
    }
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <Profile />
                <Interest />
                <Search />
            </div>
        );
    }
}

export default VolunteerDashboard;
