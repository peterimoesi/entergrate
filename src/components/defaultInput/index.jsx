import React from 'react';
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
    type
}) => (
    <div>
        <label>{label} :</label>
        <div className="input-container form-group">
            {type === 'textArea' ? (
                <textarea
                    className={`profile-input form-control ${editing !== name &&
                        'no-editing'}`}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    rows={4}
                />
            ) : (
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
            )}
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
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    editing: PropTypes.string,
    toggleEditing: PropTypes.func,
    type: PropTypes.string,
    noIcon: PropTypes.bool,
    readOnly: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

dashboardInput.defaultProps = {
    type: 'text',
    noIcon: null,
    onChange: null,
    toggleEditing: null,
    editing: null,
    readOnly: false,
    error: ''
};

export default dashboardInput;
