import React from 'react';
import DateTime from 'react-datetime';
import PropTypes from 'prop-types';

import './styles.scss';

const dashboardInput = ({
    label,
    placeholder,
    name,
    value,
    onChange,
    editing,
    toggleEditing,
    noIcon,
    readOnly,
    error,
    type,
    formType,
    maxLength
}) => (
    <div>
        <label>{label} :</label>
        <div className="input-container form-group">
            {formType === 'textArea' ? (
                <React.Fragment>
                    <textarea
                        className={`profile-input form-control ${editing !==
                            name && 'no-editing'}`}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        rows={4}
                        maxLength={maxLength}
                    />
                    {editing ? (
                        <span className="text-remaining">
                            {maxLength - parseInt(value.length, 10)}
                        </span>
                    ) : null}
                </React.Fragment>
            ) : null}
            {formType === 'input' ? (
                <input
                    className={`profile-input form-control ${editing !== name &&
                        'no-editing'} ${error ? 'is-invalid' : ''}`}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    type={type}
                    readOnly={readOnly}
                />
            ) : null}
            {formType === 'dateTime' ? (
                <DateTime
                    className={`${error ? 'is-invalid' : ''}`}
                    onChange={onChange}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                />
            ) : null}
            {!noIcon ? (
                <i
                    className={`fa fa-${editing === name ? 'close' : 'pencil'}`}
                    tabIndex="0"
                    role="button"
                    onClick={() => toggleEditing(editing !== name ? name : '')}
                />
            ) : null}
        </div>
        {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
);

dashboardInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
        .isRequired,
    onChange: PropTypes.func,
    editing: PropTypes.string,
    toggleEditing: PropTypes.func,
    type: PropTypes.string,
    noIcon: PropTypes.bool,
    readOnly: PropTypes.bool,
    formType: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    maxLength: PropTypes.number
};

dashboardInput.defaultProps = {
    type: 'text',
    noIcon: null,
    onChange: null,
    toggleEditing: null,
    editing: null,
    readOnly: false,
    error: '',
    maxLength: null
};

export default dashboardInput;
