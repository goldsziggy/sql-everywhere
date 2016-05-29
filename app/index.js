import { ipcRenderer } from 'electron';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import {Map} from 'immutable';
import {retrieveFromStorage} from './utils/storage';

import {toggle_add_database, set_active_database} from './actions/database';

const store = configureStore(retrieveFromStorage());

const history = syncHistoryWithStore(hashHistory, store);

//sync the database menu with existing items
ipcRenderer.send('sync-database-menu', store.getState().database.get('databases').toJS(), store.getState().database.get('active_database').toJS());

ipcRenderer.on('add-database', (event) => {
  store.dispatch(toggle_add_database(true));
});

ipcRenderer.on('set-active-database', (event, id) => {
  store.dispatch(set_active_database(id));
});


render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
