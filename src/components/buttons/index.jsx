import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const button = ({ onClick, title, type }) => (
    <button
        onClick={onClick}
        className={`btn btn-${type}`}
    >
        {title}
    </button>
);

button.propTypes = {
    onClick : PropTypes.func.isRequired,
    title  : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired
};

export default button;