import React from 'react';
import { Link } from 'react-router-dom';

const noPage = () => (
    <div style={{ textAlign: 'center', marginTop: '30px', padding: '0 10px' }}>
        <h3>This page does not exit</h3>
        <p>
            Click <Link to="/">here</Link> to go home
        </p>
    </div>
);

export default noPage;
