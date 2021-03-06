import axios from 'axios';
import history from '../../routes/history';

export function onLogin(userData, referrer) {
    return dispatch =>
        axios
            .post(`${global.apiUrl}/api/users/login`, userData)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: 'IS_AUTHENTICATED',
                        data: response.data
                    });
                    localStorage.setItem(
                        'userCredentials',
                        JSON.stringify(response.data)
                    );
                    history.push(referrer || '/dashboard');
                }
            })
            .catch(error => console.log(error));
}
