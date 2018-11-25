import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../img/loading.gif';
import './collapseSection.scss';

const collapseSection = props => (
    <div className="container">
        <section className="collapse-section">
            <div className="section-title">
                <h4>{props.name}</h4>
                <i
                    className={`fa fa-chevron-${props.expand ? 'up' : 'down'}`}
                    onClick={props.toggleExpand}
                    tabIndex="0"
                    role="button"
                />
            </div>
            <div
                className={`sec-info sec-info-${
                    props.expand ? 'show' : 'hide'
                }`}
            >
                {props.dataLoaded ? (
                    props.children
                ) : (
                    <div className="loading-gif">
                        <img src={Loading} />
                    </div>
                )}
            </div>
        </section>
    </div>
);

collapseSection.propTypes = {
    name: PropTypes.string.isRequired,
    expand: PropTypes.bool.isRequired,
    dataLoaded: PropTypes.bool.isRequired,
    toggleExpand: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

export default collapseSection;
