/*
* @Author: Matthew Zygowicz
* @Date:   2016-04-30 09:14:33
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
export const RUN_QUERY = 'RUN_QUERY';
export const SET_EDITOR_STATE = 'SET_EDITOR_STATE';
export const SET_QUERY = 'SET_QUERY';

export function run_query(query) {
    return {
        type: RUN_QUERY,
        query: query
    };
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
