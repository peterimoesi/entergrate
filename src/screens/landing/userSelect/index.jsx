import React from 'react';

import history from '../../../routes/history';
import Button from '../../../components/buttons';

import './styles.scss';

class UserSelect extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="usertype-select">
                    <div className="usertype-select-buttons">
                        <Button
                            type="primary"
                            onClick={() => history.push('/for-volunteers')}
                            title="for volunteers"
                            size="xl"
                        />
                        <div className="buttons-separator">Or</div>
                        <Button
                            type="primary"
                            size="xl"
                            onClick={() => history.push('/need-volunteers')}
                            title="Want volunteers"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserSelect;
