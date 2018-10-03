import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const button = ({ onClick, title, type, size }) => (
    <button
        onClick={onClick}
        className={`btn btn-${type} button button-${type} button-${size}`}
    >
        {title}
    </button>
);

button.propTypes = {
    onClick : PropTypes.func.isRequired,
    title  : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    size : PropTypes.string
};

button.defaultProps = {
    size : ''
};

export default button;