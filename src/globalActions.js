import axios from 'axios';
import history from './routes/history';

export function removeCredentials() {
    return dispatch => {
        dispatch({
            type: 'USER_LOGOUT'
        });
        localStorage.removeItem('userCredentials');
        history.push('/login');
    };
}

export function logout() {
    return dispatch =>
        axios.post('/api/users/logout').then(() => {
            dispatch(removeCredentials());
        });
}

export function showNotice(message) {
    // hide notification after 3 seconds
    return dispatch => {
        setTimeout(() => dispatch(hideNotice()), 3000);
        dispatch({
            type: 'SHOW_NOTICE',
            message
        });
    };
}

export function hideNotice() {
    return {
        type: 'HIDE_NOTICE'
    };
}
