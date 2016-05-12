/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 12:10:33
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/message_center';
import {Map, List, fromJS} from 'immutable';

const DEFAULT_STATE =  fromJS({messages: []});

function add_message(state, message){
  return state.set('messages', state.get('messages').push(fromJS(message)));
}

function remove_message(state, message, status, pseudo_id){
  return state.set('messages', state.get('messages').filter((msg) => {msg=msg.toJS(); return msg.message !== message && msg.status !== status, msg.pseudo_id !== pseudo_id}))
}

export default function query(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REMOVE_MESSAGE:
      return remove_message(state, action.message, action.status, action.pseudo_id);
    case ADD_MESSAGE:
      return add_message(state, action.message);
    default:
      return state;
  }
}
