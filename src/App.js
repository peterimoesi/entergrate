import React from 'react';

import routes from './routes';

import Navigation from './screens/navbar';

import './general.scss';

class App extends React.Component {
    render() {
        return (
            <div className="App" id="App">
                <Navigation />
                <div id="app-routes">
                    {routes}
                </div>
            </div>
        );
    }
}

export default App;
