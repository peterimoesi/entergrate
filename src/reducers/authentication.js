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
    case 'ADD_ONE_INTEREST': {
        const userInterest = [...state.userData.interest];
        if (userInterest.findIndex(x => x._id === action.data._id) === -1) {
            userInterest.push(action.data);
        }
        return {
            ...state,
            userData: {
                ...state.userData,
                interest: userInterest
            }
        };
    }
    default:
        return state;
    }
};
