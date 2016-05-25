/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 16:49:55
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import axios from 'axios';
import {fromJS} from 'immutable'


export function persistToStorage(state){
  axios.post('http://localhost:3000/api/state', {
    state: state
  }).then(response => response);
}

export function retrieveFromStorage(){
  var data = {};
  data.routing = {};
  jQuery.ajax({
      url: 'http://localhost:3000/api/state',
      success: function (result) {
          if (result.isOk == false) throw new Error("Bad response from server");
          if(result[0]){
            data.database = fromJS(result[0].database);
            data.message_center = fromJS(result[0].message_center);
            data.query = fromJS(result[0].query);  
          }
      },
      async: false
  });
  return data;
}