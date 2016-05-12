/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-10 20:04:50
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import database from './database';
import query from './query';
import message_center from './message_center';
import {persistToStorage, retrieveFromStorage} from '../utils/storage';

const rootReducer = combineReducers({
  database,
  query,
  message_center,
  routing
});

const finalReducer = (state = {}, action) => {
    // retrieveFromStorage();
    const nextState = rootReducer(state, action);
    // console.log(retrieveFromStorage());
    persistToStorage(nextState);

    return nextState;
};


export default finalReducer;
