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
    type
}) => (
    <div>
        <label>{label} :</label>
        <div className="input-container">
            {
                type === 'textArea' ?
                    <textarea
                        className={`profile-input form-control ${(editing !== name || !noIcon) && 'no-editing'}`}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        rows={4}
                    /> :
                    <input
                        className={`profile-input form-control ${(editing !== name || !noIcon) && 'no-editing'}`}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        type={type}
                    />
            }
            {
                !noIcon ?
                    <i
                        className={`fa fa-${editing === name ? 'close' : 'pencil'}`}
                        tabIndex="0"
                        role="button"
                        onClick={() => toggleEditing(editing !== name && name)}
                    /> : null
            }
            
        </div>
    </div>
);

dashboardInput.propTypes = {
    label : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    editing : PropTypes.string,
    toggleEditing : PropTypes.func,
    type : PropTypes.string,
    noIcon : PropTypes.bool
    
};

dashboardInput.defaultProps = {
    type : 'text',
    noIcon : null,
    toggleEditing : null,
    editing : null
};

export default dashboardInput;

