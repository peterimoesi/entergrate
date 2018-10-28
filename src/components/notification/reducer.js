const initialState = {
    status: false,
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'SHOW_NOTICE':
        return {
            status: true,
            message: action.message
        };
    case 'HIDE_NOTICE':
        return {
            ...state,
            status: false
        };
    default:
        return state;
    }
};
