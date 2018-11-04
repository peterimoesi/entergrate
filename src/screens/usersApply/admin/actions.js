import axios from 'axios';
import history from '../../../routes/history';

export function apply(userData, eventData) {
    return dispatch =>
        axios
            .post(`${global.apiUrl}/api/users`, userData)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: 'IS_AUTHENTICATED',
                        data: response.data
                    });
                    history.push('/dashboard');
                    localStorage.setItem(
                        'userCredentials',
                        JSON.stringify(response.data)
                    );
                    axios
                        .post(`${global.apiUrl}/api/event`, {
                            ...eventData,
                            owner: response.data._id
                        })
                        .then(eventRes =>
                            dispatch({
                                type: 'IS_AUTHENTICATED',
                                data: {
                                    ...response.data,
                                    events: eventRes.data
                                }
                            })
                        );
                }
            })
            .catch(error => console.log(error));
}
