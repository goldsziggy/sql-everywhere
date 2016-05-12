/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 12:08:46
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';


export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export function add_message(message){
  return {
    type: ADD_MESSAGE,
    message: message
  };
}

export function remove_message(msg){
  return {
    type: REMOVE_MESSAGE,
    message: msg.message,
    status: msg.status,
    pseudo_id: msg.pseudo_id
  }
}