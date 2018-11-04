import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import history from '../../routes/history';
import VolunteerDashboard from './entergrates';
import AdminDashboard from './admin';
import Loading from '../../components/loading';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.timeout = null;
    }

    componentDidMount() {
        const { isAuthenticated, userGroup } = this.props;

        // prevent users from entering the wrong dashboard
        this.timeout = setTimeout(() => {
            if (isAuthenticated) {
                if (userGroup === 2) {
                    history.push('/dashboard/admin');
                } else if (userGroup === 1) {
                    history.push('/dashboard/entergrates');
                } else {
                    history.push('/login');
                }
            } else {
                history.push('/login');
            }
        }, 0);
    }

    componentDidUpdate(prevProps) {
        const { userGroup, isAuthenticated, pathname } = this.props;
        if (
            isAuthenticated &&
            (prevProps.userGroup !== userGroup ||
                prevProps.pathname !== pathname)
        ) {
            if (userGroup === 2) {
                history.push('/dashboard/admin');
            } else if (userGroup === 1) {
                history.push('/dashboard/entergrates');
            } else {
                history.push('/login');
            }
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <Switch>
                <Route path="/dashboard/admin" component={AdminDashboard} />
                <Route
                    path="/dashboard/entergrates"
                    component={VolunteerDashboard}
                />
                <Route path="/dashboard" component={Loading} />
            </Switch>
        );
    }
}

Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    userGroup: PropTypes.number.isRequired,
    pathname: PropTypes.string.isRequired
};

function mapStateToProps({ authentication, router }) {
    return {
        isAuthenticated: authentication.isAuthenticated,
        userGroup: authentication.userData.userGroup,
        pathname: router.location.pathname
    };
}

export default connect(mapStateToProps)(Dashboard);
