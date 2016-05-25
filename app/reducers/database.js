import { ADD_DATABASE, CONNECT_DATABASE, REMOVE_DATABASE, TEST_DATABASE, TOGGLE_ADD_DATABASE, SET_ACTIVE_DATABASE, GET_DATABASE_TYPES_COMPLETE } from '../actions/database';
import {Map, List, fromJS} from 'immutable';


const DEFAULT_STATE = fromJS({databases: [], active_database:{}, show_database_modal: false, available_database_types: []});

function toggle_add_database_modal(state, bool_show_modal){
    return state.setIn(['show_database_modal'], bool_show_modal);
}

function add_database(state, database){
  var d = new Date();
  var id = d.getMilliseconds(); 
  database._id = id;
  return state.set('databases', state.get('databases').push(fromJS(database)));
}

function set_active_database(state, db){
  return state.set('active_database',db);
}

function set_available_database_types(state, types){
  return state.set('available_database_types', fromJS(types));
}

export default function database(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TOGGLE_ADD_DATABASE:
      return toggle_add_database_modal(state, action.database_modal)
    case TEST_DATABASE:
      return test_database_connection(state);
    case SET_ACTIVE_DATABASE:
      return set_active_database(state, action.database);
    case GET_DATABASE_TYPES_COMPLETE:
      return set_available_database_types(state, action.database_types);
    case ADD_DATABASE:
      return add_database(state, action.database);
    case CONNECT_DATABASE:
      return state;
    case REMOVE_DATABASE:
      return state;
    default:
      return state;
  }
}
