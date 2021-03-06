import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const textInput = ({
    onChange,
    value,
    type,
    onKeyDown,
    name,
    placeholder,
    error,
    autocomplete
}) => (
    <input
        className={`form-control ${error ? 'is-invalid' : ''}`}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        autoComplete={autocomplete}
    />
);

textInput.propTypes = {
    number: PropTypes.number.isRequired,
    children: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
    klass: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    autocomplete: PropTypes.string
};

textInput.defaultProps = {
    onClick: null,
    placeholder: '',
    klass: '',
    error: false,
    autocomplete: ''
};

export default textInput;
