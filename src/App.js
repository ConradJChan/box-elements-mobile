import React from 'react';
import ActiveState from 'box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActiveState';
import EmptyState from 'box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/EmptyState';
import File from 'box-ui-elements/es/api/File';
import API from 'box-ui-elements/es/api';
import './app.scss';

const App = ({ items, user }) => {
    return (
        <div className='app be'>
            { items ? <ActiveState items={items} currentUser={user} /> : <EmptyState /> }
        </div>
    );
}

export default App;
