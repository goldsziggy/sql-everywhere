/*
* @Author: Matthew Zygowicz
* @Date:   2016-04-30 09:15:24
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';

import {Map, List} from 'immutable';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { RUN_QUERY, SET_QUERY, SET_EDITOR_STATE} from '../actions/query';

// const DEFAULT_STATE = Map({query: {editorState: EditorState.createEmpty()}, data:{}});
const DEFAULT_STATE = Map({query: '', data:{}});

function set_editor_state(state, editorState){
  return state.setIn(['query', 'editorState'], editorState);
}

function set_query(state, query){
  return state.setIn(['query'], query);
}

export default function query(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_EDITOR_STATE:
      return set_editor_state(state, action.editorState);
    case SET_QUERY:
      return set_query(state, action.query);
    case RUN_QUERY:
    default:
      return state;
  }
}
