import React from 'react';
import PropTypes from 'prop-types';
import DateTime from './dateTime';
import TextInput from './textInput';
import TextArea from './textArea';
import FormList from './lists';

import './styles.scss';

const scrollFormInput = props => {
    let htmlElement;
    switch (props.inputType) {
    case 'textarea':
        htmlElement = <TextArea {...props} />;
        break;
    case 'formList':
        htmlElement = <FormList {...props} />;
        break;
    case 'dateTime':
        htmlElement = <DateTime {...props} />;
        break;
    default:
        htmlElement = <TextInput {...props} />;
        break;
    }
    return (
        <div
            className={`apply-form-inputs scroll-input ${props.klass}`}
            onClick={props.onClick}
        >
            <div className="input-label-cont">
                <div className="numbers">
                    <span>{props.number}</span>
                    <i className="fa fa-arrow-right" aria-hidden />
                </div>
                <div className="input-label">{props.children}</div>
            </div>
            <div className="form-group">
                <div>
                    <div>*</div>
                    {htmlElement}
                </div>
                {props.error ? (
                    <div className="invalid-feedback">{props.error}</div>
                ) : null}
            </div>
        </div>
    );
};

scrollFormInput.propTypes = {
    inputType: PropTypes.string,
    number: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
    klass: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

scrollFormInput.defaultProps = {
    inputType: null,
    error: false
};

export default scrollFormInput;
