export const ADD_DATABASE = 'ADD_DATABASE';
export const TOGGLE_ADD_DATABASE = 'TOGGLE_ADD_DATABASE';
export const CONNECT_DATABASE = 'CONNECT_DATABASE';
export const REMOVE_DATABASE = 'REMOVE_DATABASE';
export const TEST_DATABASE = 'TEST_DATABASE';
export const SET_ACTIVE_DATABASE = 'SET_ACTIVE_DATABASE';

export function toggle_add_database(is_shown){
  return {
    type: TOGGLE_ADD_DATABASE,
    database_modal: is_shown
  };
}

export function set_active_database(database_index){
  return{
    type: SET_ACTIVE_DATABASE,
    database_index: database_index
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

export function test_database(database) {
  return {
    type: TEST_DATABASE,
    database: database
  }; 
}
