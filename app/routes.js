import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePageContainer';
// import TemplatePage from './containers/TemplatePage';


export default (
    <Route path="/" component={App}>
        
            <IndexRoute component={HomePage} />
        
    </Route>
);
