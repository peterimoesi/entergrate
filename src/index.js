import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import './globals.js';

import history from './routes/history';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const middleware = [
    thunk,
    routerMiddleware(history)
];

const store = createStore(
    connectRouter(history)(reducers),
    composeWithDevTools(applyMiddleware(...middleware))
);

const userCredentials = localStorage.userCredentials;
if (userCredentials) {
    try {
        store.dispatch({
            type : 'IS_AUTHENTICATED',
            data : JSON.parse(userCredentials)
        });
    } catch (e) {
        console.error(e);
        // store.dispatch(removeUserCredentials());
        localStorage.removeItem('userCredentials');
    }
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
