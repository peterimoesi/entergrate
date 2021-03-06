import React from 'react';
import PropTypes from 'prop-types';

import Button from '../buttons';

import './styles.scss';

const list = ({ onChange, value, name, addToList, removeFromList, error }) => (
    <div>
        {value.map((elem, i) => (
            <span key={i} className="list-form">
                <span className="form-list-num">{i + 1})</span>
                <input
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    onChange={e => onChange(e.target.value, i, name)}
                    value={value[i]}
                    name={name}
                    onClick={e => {
                        e.stopPropagation();
                        return;
                    }}
                />
                <span className="form-list-close">
                    <i
                        className="fa fa-close"
                        onClick={e => {
                            e.stopPropagation();
                            removeFromList(name, i);
                        }}
                        role="button"
                        tabIndex="0"
                    />
                </span>
            </span>
        ))}
        <div>
            <Button
                title="Add new +"
                onClick={() => addToList(name)}
                type="secondary"
            />
        </div>
    </div>
);

list.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    addToList: PropTypes.func.isRequired,
    removeFromList: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

list.defaultProps = {
    onClick: null,
    klass: '',
    error: false
};

export default list;
