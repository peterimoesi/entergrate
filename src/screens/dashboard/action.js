import axios from 'axios';

import { showNotice } from '../../globalActions';

export function userUpdate(data) {
    return dispatch =>
        axios
            .patch('/api/users', data)
            .then(() => {
                dispatch(showNotice('Profile updated'));
                delete data.password;
                dispatch({
                    type: 'AUTH_UPDATED',
                    data
                });
                let userCredentials = JSON.parse(
                    localStorage.getItem('userCredentials')
                );
                userCredentials = {
                    ...userCredentials,
                    ...data
                };
                localStorage.setItem(
                    'userCredentials',
                    JSON.stringify(userCredentials)
                );
            })
            .catch(e => console.log(e));
}
