import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const textInput = ({
    onChange,
    value,
    type,
    onKeyDown,
    name
}) => (
    <input
        className="form-control"
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        onKeyDown={onKeyDown}
    />
);

textInput.propTypes = {
    number : PropTypes.number.isRequired,
    children : PropTypes.object.isRequired,
    onChange : PropTypes.func.isRequired,
    value : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    onKeyDown : PropTypes.func.isRequired,
    onClick : PropTypes.func,
    klass : PropTypes.string
};

textInput.defaultProps = {
    onClick : null,
    klass : ''
};

export default textInput;
