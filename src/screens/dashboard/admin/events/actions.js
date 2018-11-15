import axios from 'axios';

import { showNotice } from '../../../../globalActions';

export function getEvents(userId) {
    return dispatch =>
        axios
            .get(`${global.apiUrl}/api/event/admin/${userId}`)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: 'GET_EVENTS',
                        data: response.data
                    });
                    return true;
                }
            })
            .catch(error => {
                console.log(error);
                return false;
            });
}

export function submit(eventData, userId, modify) {
    if (modify) {
        return dispatch =>
            axios
                .patch(`${global.apiUrl}/api/event/${eventData._id}`, {
                    ...eventData
                })
                .then(() => {
                    dispatch({
                        type: 'UPDATE_EVENT',
                        data: eventData
                    });
                    return 200;
                })
                .catch(e => console.log(e));
    } else {
        return dispatch =>
            axios
                .post(`${global.apiUrl}/api/event`, {
                    ...eventData,
                    owner: userId
                })
                .then(eventRes => {
                    dispatch({
                        type: 'ADD_EVENT',
                        data: eventRes.data
                    });
                    return 200;
                })
                .catch(e => console.log(e));
    }
}

export function contact(contactForm) {
    return dispatch =>
        axios
            .post(`${global.apiUrl}/api/contact`, contactForm)
            .then(res => {
                console.log(res);
                dispatch(showNotice('Message sent'));
                return 200;
            })
            .catch(e => {
                console.log(e), dispatch(showNotice('Message  sending failed'));
                return 400;
            });
}
