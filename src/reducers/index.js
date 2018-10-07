import { combineReducers } from 'redux';

import authentication from './authentication';
import events from '../screens/dashboard/organisations/events/reducers';

const appReducer = combineReducers({
    authentication,
    events
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;