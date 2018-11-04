import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from '../../components/img/nav-logo.png';

const NavigationComponent = ({
    setNavRef,
    isAuthenticated,
    userGroup,
    logout,
    handleNavShow
}) => (
    <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        ref={e => setNavRef(e)}
    >
        <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/">
                <img src={logo} />
            </Link>
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => handleNavShow()}
            >
                Menu
                <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    {!isAuthenticated ? (
                        <li className="nav-item">
                            <Link
                                className="nav-link js-scroll-trigger"
                                to="/for-entergrates"
                            >
                                for entergrates
                            </Link>
                        </li>
                    ) : null}
                    {userGroup !== '2' ? (
                        <li className="nav-item">
                            <Link
                                className="nav-link js-scroll-trigger"
                                to="/open-events"
                            >
                                Open positions
                            </Link>
                        </li>
                    ) : null}
                    <li className="nav-item">
                        <Link
                            className="nav-link js-scroll-trigger"
                            to={isAuthenticated ? '/dashboard' : '/login'}
                        >
                            {isAuthenticated ? 'Dashboard' : 'login'}
                        </Link>
                    </li>
                    {isAuthenticated ? (
                        <li className="nav-item">
                            <Link
                                className="nav-link js-scroll-trigger"
                                to="/login"
                                onClick={e => logout(e)}
                            >
                                Logout
                            </Link>
                        </li>
                    ) : null}
                </ul>
            </div>
        </div>
    </nav>
);

NavigationComponent.propTypes = {
    setNavRef: PropTypes.func.isRequired,
    userGroup: PropTypes.number,
    isAuthenticated: PropTypes.bool,
    handleNavShow: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

NavigationComponent.defaultProps = {
    userGroup: null,
    isAuthenticated: null
};

export default NavigationComponent;
