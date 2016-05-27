/*
* @Author: Matthew Zygowicz
* @Date:   2016-04-30 09:14:33
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
//import utils
import {build_message} from '../utils/messages';

//import api
import {run_query} from '../api/database';

//import other actions for dispatches (think async callbacks)
import {add_message} from '../actions/message_center';


export const RUN_QUERY_ACTION = 'RUN_QUERY_ACTION';
export const RUN_QUERY_REQUEST = 'RUN_QUERY_REQUEST';
export const RUN_QUERY_COMPLETE = 'RUN_QUERY_COMPLETE';
export const SET_EDITOR_STATE = 'SET_EDITOR_STATE';
export const SET_QUERY = 'SET_QUERY';

// export function run_query_(query) {
//     return {
//         type: RUN_QUERY,
//         query: query
//     };
// }

export function run_query_request(){
    return {
        type: RUN_QUERY_REQUEST
    };
}

export function run_query_complete(result){
    return {
        type: RUN_QUERY_COMPLETE, 
        result: result
    }
}

//@TODO - make sure db (active_database) has a real value
export function run_query_action(query, db){
    return function (dispatch){
    dispatch(run_query_request());
    run_query(dispatch, db, query)
    .then(function(response){
        console.log(response);
      dispatch(add_message(build_message("Query Complete!", true)));  
      dispatch(run_query_complete(response.data));
    })
    .catch(function(response){
        if (response instanceof Error)
            dispatch(add_message(build_message(response.message, false)));
        else
            dispatch(add_message(build_message(response.data.error, false)));
        dispatch(run_query_complete({}));
    })
  }
}

export function set_editor(editorState) {
    return {
        type: SET_EDITOR_STATE,
        editorState: editorState
    };
}

export function set_query(query){
    return {
        type: SET_QUERY,
        query: query
    };   
}
