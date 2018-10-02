import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from '../../components/img/nav-logo.png';

const NavigationComponent = ({
    setNavRef
}) => (
    <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        ref={e => setNavRef(e)}
    >
        <div className="container">
            <Link
                className="navbar-brand js-scroll-trigger" to="/">
                <img src={logo}/>
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/for-volunteers">for Volunteers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/need-volunteers">Need Volunteers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/">Open positions</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

NavigationComponent.propTypes = {
    setNavRef : PropTypes.func.isRequired
};
export default NavigationComponent;
