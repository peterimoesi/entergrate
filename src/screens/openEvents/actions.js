import axios from 'axios';

export function getOpenEvents () {
    return dispatch => axios.get(`${global.apiUrl}/api/event`)
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type : 'GET_OPEN_EVENTS',
                    data : response.data
                });
                return true;
            }
        }).catch(error => {
            console.log(error);
            return false;
        });
}

export function getOpenSingleEvent (id) {
    return dispatch => axios.get(`${global.apiUrl}/api/event/${id}`)
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type : 'GET_OPEN_EVENTS_ACTIVE',
                    data : response.data
                });
                return true;
            }
        }).catch(error => {
            console.log(error);
            return false;
        });
}


export function clearOpenEvents () {
    return {
        type : 'GET_OPEN_EVENTS',
        data : []
    };
}
