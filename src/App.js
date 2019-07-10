import React from 'react';
import ActivityFeed from 'box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed';
import ActiveState from 'box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActiveState';
import EmptyState from 'box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/EmptyState';
import File from 'box-ui-elements/es/api/File';
import API from 'box-ui-elements/es/api';
import './app.scss';

const App = ({ onCommentCreate, file, items, user }) => {
    return (
        <div className='app be'>
            <ActivityFeed currentUser={user} feedItems={items} file={file} onCommentCreate={onCommentCreate} />
        </div>
    );
}

export default App;
