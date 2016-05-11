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

const rootReducer = combineReducers({
  database,
  query,
  routing
});

export default rootReducer;
