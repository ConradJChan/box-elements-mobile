import React from 'react';
import ActiveState from 'box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActiveState';
import EmptyState from 'box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/EmptyState';
import API from 'box-ui-elements/es/api';
import './app.scss';

const App = ({ className, children }) => (
    <div className='app'>
        <EmptyState />
    </div>
);

export default App;
