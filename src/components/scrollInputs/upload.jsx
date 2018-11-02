import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const uploadInput = ({
    onUpload,
    name,
    number,
    onClick,
    klass,
    children
}) => (
    <div
        className={`apply-form-inputs scroll-input ${klass}`}
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
                    type="file"
                    name={name}
                    className="form-control"
                    accept="image/*"
                    id="fileUpload"
                    onChange={onUpload}
                />
            </div>
        </div>
    </div>
);

uploadInput.propTypes = {
    number : PropTypes.number.isRequired,
    children : PropTypes.element.isRequired,
    onUpload : PropTypes.func.isRequired,
    name : PropTypes.string.isRequired,
    onClick : PropTypes.func,
    klass : PropTypes.string,
};

uploadInput.defaultProps = {
    onClick : null,
    klass : ''
};

export default uploadInput;
