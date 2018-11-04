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
        this.handleNavShow = this.handleNavShow.bind(this);
        this.logout = this.logout.bind(this);
        this.navRef = null;
    }
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            const elem = this.navRef.querySelector('#navbarResponsive');
            if (elem.classList.contains('show')) {
                elem.classList.remove('show', 'collapse');
                elem.classList.add('collapsing');
                this.timeout = setTimeout(() => {
                    elem.classList.remove('collapsing');
                    elem.classList.add('collapse');
                }, 350);
            }
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
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

    handleNavShow() {
        const elem = this.navRef.querySelector('#navbarResponsive');
        if (elem.classList.contains('show')) {
            elem.classList.replace('collapse', 'collapsing');
            elem.classList.remove('show');
            this.timeout = setTimeout(() => {
                elem.classList.replace('collapsing', 'collapse');
            }, 350);
        } else {
            elem.classList.remove('collapse');
            elem.classList.add('collapsing');
            this.timeout = setTimeout(() => {
                elem.style.height = '129px';
            }, 0);
            this.timeout = setTimeout(() => {
                elem.style.height = '';
                elem.classList.replace('collapsing', 'collapse');
                elem.classList.add('show');
            }, 350);
        }
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
                handleNavShow={this.handleNavShow}
                logout={this.logout}
            />
        );
    }
}

function mapStateToProps({ authentication, router }) {
    return {
        isAuthenticated: authentication.isAuthenticated,
        userGroup: authentication.userData.userGroup,
        locationKey: router.location.key
    };
}

Navigation.propTypes = {
    userGroup: PropTypes.number,
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    locationKey: PropTypes.string.isRequired
};

Navigation.defaultProps = {
    userGroup: null
};
export default connect(
    mapStateToProps,
    { logout }
)(Navigation);
