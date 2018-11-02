import React from 'react';
import loading from '../img/loading.gif';

import './styles.scss';

const loadingScreen = () => (
    <div className="loading-screen">
        <img src={loading} alt="loading-gif" />
    </div>
);

export default loadingScreen;
