import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const button = ({ onClick, title, type, size, icon, disabled, lowercase }) => (
    <button
        onClick={onClick}
        className={`btn btn-${type} button button-${type} button-${size} entergrate-btn ${
            lowercase ? 'btn-lowercase' : ''
        }`}
        disabled={disabled}
    >
        {title}
        {icon ? <i className={`fa fa-${icon}`} /> : null}
    </button>
);

button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    lowercase: PropTypes.bool,
    size: PropTypes.string
};

button.defaultProps = {
    size: '',
    icon: null,
    disabled: false,
    lowercase: false
};

export default button;
