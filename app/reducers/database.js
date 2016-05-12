import { ADD_DATABASE, CONNECT_DATABASE, REMOVE_DATABASE, TEST_DATABASE, TOGGLE_ADD_DATABASE, SET_ACTIVE_DATABASE } from '../actions/database';
import {Map, List, fromJS} from 'immutable';


const DEFAULT_STATE = fromJS({databases: [], active_database:{}, show_database_modal: false, available_database_types: ['mysql', 'db2', 'sybase']});

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



export default function database(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TOGGLE_ADD_DATABASE:
      return toggle_add_database_modal(state, action.database_modal)
    case TEST_DATABASE:
      return test_database_connection(state);
    case SET_ACTIVE_DATABASE:
      return set_active_database(state, action.database);
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
