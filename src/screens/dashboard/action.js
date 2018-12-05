import axios from 'axios';

import { showNotice } from '../../globalActions';
import history from '../../routes/history';

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

export function deleteAccount() {
    return () => axios.delete('/api/users');
}

export function checkAuthentication() {
    return dispatch =>
        axios
            .get('/api/users/is-authenticated')
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: 'IS_AUTHENTICATED',
                        data: res.data
                    });
                    localStorage.setItem(
                        'userCredentials',
                        JSON.stringify(res.data)
                    );
                    history.push('/dashboard');
                }
            })
            .catch(e => console.log(e));
}
