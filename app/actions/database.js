//import utils
import {build_message} from '../utils/messages';

//import api
import {test_connection, get_database_types} from '../api/database';

//import other actions for dispatches (think async callbacks)
import {add_message} from '../actions/message_center';

export const ADD_DATABASE = 'ADD_DATABASE';
export const TOGGLE_ADD_DATABASE = 'TOGGLE_ADD_DATABASE';
export const CONNECT_DATABASE = 'CONNECT_DATABASE';
export const REMOVE_DATABASE = 'REMOVE_DATABASE';
export const SET_ACTIVE_DATABASE = 'SET_ACTIVE_DATABASE';

export const TEST_DATABASE_REQUEST = 'TEST_DATABASE_REQUEST';
export const TEST_DATABASE_ACTION = 'TEST_DATABASE_ACTION';
export const TEST_DATABASE_COMPLETED = 'TEST_DATABASE_COMPLETED';

export const GET_DATABASE_TYPES_REQUEST = 'GET_DATABASE_TYPES_REQUEST'
export const GET_DATABASE_TYPES_ACTION = 'GET_DATABASE_TYPES_ACTION'
export const GET_DATABASE_TYPES_COMPLETE = 'GET_DATABASE_TYPES_COMPLETE'

export function toggle_add_database(is_shown){
  return {
    type: TOGGLE_ADD_DATABASE,
    database_modal: is_shown
  };
}

export function set_active_database(db){
  return{
    type: SET_ACTIVE_DATABASE,
    database: db
  }
}

export function add_database(database) {
  return {
    type: ADD_DATABASE,
    database: database
  };
}

export function remove_database(database) {
  return {
    type: DECREMENT_COUNTER,
    database: database
  };
}

export function connect_database(database) {
  return {
    type: CONNECT_DATABASE,
    database: database
  }; 
}

export function get_database_types_request(){
  return {
    type: GET_DATABASE_TYPES_REQUEST
  }
}

export function get_datbase_types_complete(database_types){
  return {
    type: GET_DATABASE_TYPES_COMPLETE,
    database_types: database_types
  }
}

export function get_database_types_action(){
  return function (dispatch){
    dispatch(get_database_types_request());
    get_database_types()
    .then(function(response){
      dispatch(get_datbase_types_complete(response.data));
    })
    .catch(function(response){
      dispatch(get_datbase_types_complete([]));
      dispatch(add_message(build_message("Error obtaining database_types", false)));
    })
  }
}

/**
 * This would be used to update the UI
 * @param  {[type]} database [description]
 * @return {[type]}          [description]
 */
export function test_database_request(database) {
  return {
    type: TEST_DATABASE_REQUEST,
    database: database
  }; 
}

/**
 * This would be used to update the UI
 * @param  {[type]} database [description]
 * @param  {[type]} status   [description]
 * @return {[type]}          [description]
 */
export function test_database_completed(database, status){
  return {
    type: TEST_DATABASE_COMPLETED,
    database: database,
    status: status
  }; 
}

export function test_database_connection(db){
  return function (dispatch){
    dispatch(test_database_request());
    test_connection(dispatch, db)
    .then(function(response){
      dispatch(add_message(build_message(response.data.message, true)));
    })
    .catch(function(response){
      dispatch(add_message(build_message(response.data.error, false)));
    })
    .then(function(){
      dispatch(test_database_completed(db));
    })
  }
}