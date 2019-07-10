// Not needed unless working with non "en" locales
// import { addLocaleData } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';

import React from 'react';
import ContentExplorer from 'box-ui-elements/es/elements/content-explorer';
import Internationalize from 'box-ui-elements/es/elements/common/Internationalize';
import messages from 'box-ui-elements/i18n/en-US';
import withFeatureProvider from 'box-ui-elements/es/elements/common/feature-checking/withFeatureProvider';
import App from './App';

// Not needed unless working with non "en" locales
// addLocaleData(enLocaleData);

const Main = ({ onCommentCreate, file, items, language = 'en-US', user }) => (
    <Internationalize language={language} messages={messages}>
        <App items={items} user={user} file={file} onCommentCreate={onCommentCreate} />
    </Internationalize>
);

export default withFeatureProvider(Main);
