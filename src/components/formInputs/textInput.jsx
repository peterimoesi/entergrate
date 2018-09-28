import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const textInput = ({
    number,
    children,
    onChange,
    value,
    type,
    onClick,
    onKeyDown,
    name,
    klass
}) => (
    <div
        className={`apply-form-inputs form-input ${klass}`}
        onClick={onClick}
    >
        <div className="input-label-cont">
            <div className="numbers">
                <span>{number}</span>
                <i className="fa fa-arrow-right" aria-hidden />
            </div>
            <div className="input-label">
                {children}
            </div>
        </div>
        <div className="form-group">
            <div>
                <div>*</div>
                <input
                    className="form-control"
                    onChange={onChange}
                    value={value}
                    type={type}
                    name={name}
                    onKeyDown={onKeyDown}
                />
            </div>
        </div>
    </div>
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
