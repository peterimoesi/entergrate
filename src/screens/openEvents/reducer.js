const initialState = {
    events: [],
    activeEvent: {
        title: '',
        description: ''
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'GET_OPEN_EVENTS':
        return {
            ...state,
            events: action.data
        };
    case 'GET_OPEN_EVENTS_ACTIVE':
        return {
            ...state,
            activeEvent: action.data
        };
    default:
        return state;
    }
};
