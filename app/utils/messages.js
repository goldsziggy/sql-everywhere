/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 12:30:10
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';

/**
 * This util function ensures all messages are built in the same manner.
 * @param  {[type]} status  [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export function build_message(message, status){
  var d = new Date();
  var id = d.getMilliseconds(); 
  return {status: status, message: message, pseudo_id: id};
}