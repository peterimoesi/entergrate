import React from 'react';
import PropTypes from 'prop-types';

const dashboardInput = ({
    label,
    placeholder,
    name,
    value,
    onChange,
    editing,
    toggleEditing,
    type
}) => (
    <div>
        <label>{label} :</label>
        <div className="input-container">
            {
                type === 'textArea' ?
                    <textarea
                        className={`profile-input form-control ${editing !== name && 'no-editing'}`}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        rows={4}
                    /> :
                    <input
                        className={`profile-input form-control ${editing !== name && 'no-editing'}`}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        type={type}
                    />
            }
            
            <i
                className={`fa fa-${editing === name ? 'close' : 'pencil'}`}
                tabIndex="0"
                role="button"
                onClick={() => toggleEditing(editing !== name && name)}
            />
        </div>
    </div>
);

dashboardInput.propTypes = {
    label : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    editing : PropTypes.string.isRequired,
    toggleEditing : PropTypes.func.isRequired,
    type : PropTypes.string
};

dashboardInput.defaultProps = {
    type : 'text'
};

export default dashboardInput;

