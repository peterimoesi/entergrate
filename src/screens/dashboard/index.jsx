import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import history from '../../routes/history';
import VolunteerDashboard from './volunteers';
import OrganisationDashboard from './organisations';
import Loading from '../../components/loading';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.timeout = null;
    }

    componentDidMount() {
        const { isAuthenticated, userGroup } = this.props;
        this.timeout = setTimeout(() => {
            if (isAuthenticated) {
                if (userGroup === '2') {
                    history.push('/dashboard/organisations');
                } else if (userGroup === '1') {
                    history.push('/dashboard/volunteers');
                } else {
                    history.push('/login');
                }
            } else {
                history.push('/login');
            }
        }, 0);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        console.log(this.props);
        return (
            <Switch>
                <Route path="/dashboard/organisations" component={OrganisationDashboard} />
                <Route path="/dashboard/volunteers" component={VolunteerDashboard} />
                <Route path="/dashboard" component={Loading} />
            </Switch>
        );
    }
}

Dashboard.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    userGroup : PropTypes.string.isRequired
};

function mapStateToProps({ authentication }) {
    return {
        isAuthenticated : authentication.isAuthenticated,
        userGroup : authentication.userData.userGroup 
    };
}

export default connect(mapStateToProps)(Dashboard);
