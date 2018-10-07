const initialState = {
    events : []
};

export default (state = initialState, action) => {
    if (action.type === 'GET_EVENTS') {
        return {
            events : action.data
        };
    } else if (action.type === 'CLEAR_EVENTS') {
        return {
            events : []
        };
    } else if (action.type === 'ADD_EVENT') {
        return {
            events : [ ...state.events, action.data]
        };
    } else {
        return state;
    }
};