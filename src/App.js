import React from 'react';

import routes from './routes';

import Navigation from './screens/navbar';
import './general.scss';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                {routes}
            </div>
        );
    }
}

export default App;
