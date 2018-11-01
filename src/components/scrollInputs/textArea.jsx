import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const textArea = ({ onChange, value, type, name, error, maxLength }) => (
    <textarea
        className={`form-control ${error ? 'is-invalid' : ''}`}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        rows={4}
        maxLength={maxLength}
    />
);

textArea.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    maxLength: PropTypes.number
};

textArea.defaultProps = {
    onClick: null,
    klass: '',
    error: false,
    maxLength: null
};

export default textArea;
