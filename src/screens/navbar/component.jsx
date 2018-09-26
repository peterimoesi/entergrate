import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const NavigationComponent = ({
    setNavRef
}) => (
    <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        ref={e => setNavRef(e)}
    >
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="img/nav-logo.png"/></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#events">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
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
