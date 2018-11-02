import React from 'react';
import DateTime from 'react-datetime';
import PropTypes from 'prop-types';

import './styles.scss';

const dateInput = ({
    onChange,
    value,
    type,
    onKeyDown,
    placeholder,
    error
}) => (
    <DateTime
        className={`${error ? 'is-invalid' : ''}`}
        onChange={onChange}
        value={value}
        type={type}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
    />
);

dateInput.propTypes = {
    number: PropTypes.number.isRequired,
    children: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    type: PropTypes.string.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
    klass: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

dateInput.defaultProps = {
    onClick: null,
    placeholder: '',
    klass: '',
    error: false
};

export default dateInput;
