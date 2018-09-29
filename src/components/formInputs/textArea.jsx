import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const textArea = ({
    onChange,
    value,
    type,
    name,
}) => (
    
    <textarea
        className="form-control"
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        rows={4}
    />
);

textArea.propTypes = {
    onChange : PropTypes.func.isRequired,
    value : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired
};

textArea.defaultProps = {
    onClick : null,
    klass : ''
};

export default textArea;
