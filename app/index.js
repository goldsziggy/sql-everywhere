import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import {Map} from 'immutable';


const store = configureStore();
// store.dispatch(set_state({state: {
//         username: 'Ziggy',
//         finance: [],
//         ui: {
//             show_finance: false
//         }
//     }}));
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
