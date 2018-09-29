import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './textInput';
import TextArea from './textArea';
import FormList from './lists';

import './styles.scss';

const formElement = (props) => {
    let htmlElement;
    switch (props.inputType) {
    case 'textarea':
        htmlElement = <TextArea {...props} />;
        break;
    case 'formList':
        htmlElement = <FormList {...props} />;
        break;
    default:
        htmlElement = <TextInput {...props} />;
        break;
    }
    return (
        <div
            className={`apply-form-inputs form-input ${props.klass}`}
            onClick={props.onClick}
        >
            <div className="input-label-cont">
                <div className="numbers">
                    <span>{props.number}</span>
                    <i className="fa fa-arrow-right" aria-hidden />
                </div>
                <div className="input-label">
                    {props.children}
                </div>
            </div>
            <div className="form-group">
                <div>
                    <div>*</div>
                    {htmlElement}
                </div>
            </div>
        </div>
    );
};

formElement.propTypes = {
    inputType : PropTypes.string,
    number : PropTypes.number.isRequired,
    children : PropTypes.array.isRequired,
    onClick : PropTypes.func,
    klass : PropTypes.string
};

formElement.defaultProps = {
    inputType : null
};

export default formElement;
