import axios from 'axios';

import { showNotice } from '../../globalActions';

export function getOpenEvents() {
    return dispatch =>
        axios
            .get(`${global.apiUrl}/api/event`)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: 'GET_OPEN_EVENTS',
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

export function getOpenSingleEvent(id) {
    return dispatch =>
        axios
            .get(`${global.apiUrl}/api/event/${id}`)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: 'GET_OPEN_EVENTS_ACTIVE',
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

export function clearOpenEvents() {
    return {
        type: 'GET_OPEN_EVENTS',
        data: []
    };
}

export function isInterested(id, entergrateId) {
    return (dispatch, getState) =>
        axios
            .patch(`${global.apiUrl}/api/event/${id}/add-entergrate`, {
                entergrateId
            })
            .then(res => {
                dispatch({
                    type: 'ADD_ONE_INTEREST',
                    data: res.data
                });
                dispatch(showNotice('Interest added'));
                // update user credentials
                localStorage.setItem(
                    'userCredentials',
                    JSON.stringify(getState().authentication.userData)
                );
            })
            .catch(e => console.log(e));
}
