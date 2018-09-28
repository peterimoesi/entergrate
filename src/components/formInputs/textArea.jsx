import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const textArea = ({
    number,
    children,
    onChange,
    value,
    type,
    onClick,
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
                <textarea
                    className="form-control"
                    onChange={onChange}
                    value={value}
                    type={type}
                    name={name}
                    rows={4}
                />
            </div>
        </div>
    </div>
);

textArea.propTypes = {
    number : PropTypes.number.isRequired,
    children : PropTypes.object.isRequired,
    onChange : PropTypes.func.isRequired,
    value : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    onClick : PropTypes.func,
    klass : PropTypes.string
};

textArea.defaultProps = {
    onClick : null,
    klass : ''
};

export default textArea;
