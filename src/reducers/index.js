import { combineReducers } from 'redux';

import authentication from './authentication';
import events from '../screens/dashboard/organisations/events/reducers';
import openEvents from '../screens/openEvents/reducer';
import notification from '../components/notification/reducer';

const appReducer = combineReducers({
    authentication,
    events,
    notification,
    openEvents
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;
