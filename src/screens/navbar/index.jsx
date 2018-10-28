import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavComponent from './component';
import { logout } from '../../globalActions';

class Navigation extends React.Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.setNavRef = this.setNavRef.bind(this);
        this.logout = this.logout.bind(this);
        this.navRef = null;
    }
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 100) {
            if (
                this.navRef &&
                !this.navRef.classList.contains('navbar-shrink')
            ) {
                this.navRef.classList.add('navbar-shrink');
            }
        } else {
            if (
                this.navRef &&
                this.navRef.classList.contains('navbar-shrink')
            ) {
                this.navRef.classList.remove('navbar-shrink');
            }
        }
    }
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    setNavRef(e) {
        this.navRef = e;
    }

    render() {
        return (
            <NavComponent
                setNavRef={this.setNavRef}
                isAuthenticated={this.props.isAuthenticated}
                userGroup={this.props.userGroup}
                logout={this.logout}
            />
        );
    }
}

function mapStateToProps({ authentication }) {
    return {
        isAuthenticated: authentication.isAuthenticated,
        userGroup: authentication.userData.userGroup
    };
}

Navigation.propTypes = {
    userGroup: PropTypes.string,
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

Navigation.defaultProps = {
    userGroup: null
};
export default connect(
    mapStateToProps,
    { logout }
)(Navigation);
