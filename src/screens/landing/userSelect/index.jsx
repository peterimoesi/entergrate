import React from 'react';

import Button from '../../../components/buttons';

import './styles.scss';

class UserSelect extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="usertype-select">
                    <Button
                        type="secondary"
                        onClick={() => null}
                        title="for volunteers"
                    />
                    <div>Or</div>
                    <Button
                        type="secondary"
                        onClick={() => null}
                        title="Want volunteers"
                    />
                </div>
            </div>
        );
    }
}

export default UserSelect;
