import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import history from '../../routes/history';
import VolunteerDashboard from './entergrates';
import AdminDashboard from './admin';
import Loading from '../../components/loading';
import { checkAuthentication } from './action';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.timeout = null;
        this.userGroupCheck = this.userGroupCheck.bind(this);
    }

    componentDidMount() {
        const { isAuthenticated, match, checkAuthentication } = this.props;
        if (match.params.ext === 'facebook') {
            checkAuthentication();
        } else {
            // prevent users from entering the wrong dashboard
            if (isAuthenticated) {
                this.userGroupCheck();
            } else {
                history.push('/login');
            }
        }
    }

    userGroupCheck() {
        const { userGroup } = this.props;
        if (userGroup === 2) {
            history.push('/dashboard/admin');
        } else if (userGroup === 1) {
            history.push('/dashboard/entergrates');
        } else {
            history.push('/login');
        }
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
    pathname: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    checkAuthentication: PropTypes.func.isRequired
};

function mapStateToProps({ authentication, router }) {
    return {
        isAuthenticated: authentication.isAuthenticated,
        userGroup: authentication.userData.userGroup,
        pathname: router.location.pathname
    };
}

export default connect(
    mapStateToProps,
    { checkAuthentication }
)(Dashboard);
