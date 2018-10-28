const initialState = {
    isAuthenticated: false,
    userData: {
        events: [],
        interest: []
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'IS_AUTHENTICATED':
        return {
            isAuthenticated: true,
            userData: action.data
        };
    default:
        return state;
    }
};
