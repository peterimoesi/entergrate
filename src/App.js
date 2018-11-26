import React from 'react';
import { Helmet } from 'react-helmet';
import routes from './routes';

import Navigation from './screens/navbar';
import Notification from './components/notification';

import './general.scss';

class App extends React.Component {
    render() {
        return (
            <div className="App" id="App">
                <Navigation {...this.props} />
                <Notification />
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta content="Entergrate" name="title" />
                    <meta property="og:title" content="Entergrate Finland" />
                    <meta
                        name="description"
                        content="Entergrate is a social enterprise for immigrants in Finland."
                    />
                    <meta
                        property="og:description"
                        content="Entergrate is a social enterprise for immigrants in Finland."
                    />
                    <meta
                        property="og:image"
                        content="%PUBLIC_URL%/img/about/2.png"
                    />
                    {/* Chrome, Firefox OS and Opera */}
                    <meta name="theme-color" content="#212529" />
                    {/* <!-- Windows Phone --> */}
                    <meta
                        name="msapplication-navbutton-color"
                        content="#212529"
                    />
                    {/* <!-- iOS Safari --> */}
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="#212529"
                    />

                    <title>Entergrate - Homepage</title>
                </Helmet>
                <div id="app-routes">{routes}</div>
            </div>
        );
    }
}

export default App;
