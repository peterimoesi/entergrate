const initialState = {
    events: []
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'GET_EVENTS':
        return {
            events: action.data
        };
    case 'CLEAR_EVENTS':
        return {
            events: []
        };
    case 'UPDATE_EVENT': {
        const activeEvent = state.events.findIndex(
            x => x._id === action.data._id
        );
        state.events[activeEvent] = {
            ...state.events[activeEvent],
            ...action.data
        };
        return {
            events: [...state.events]
        };
    }
    case 'ADD_EVENT':
        return {
            events: [...state.events, action.data]
        };
    default:
        return state;
    }
};
