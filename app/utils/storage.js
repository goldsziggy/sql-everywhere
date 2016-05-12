/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 16:49:55
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import mongoose from 'mongoose';
import low from 'lowdb'
import storage from 'lowdb/file-sync';
import fetch from 'isomorphic-fetch';
import {fromJS} from 'immutable'
// const db = low('db', { storage: low.localStorage });
// const db = low(__dirname + '/app/db.json', {
//     storage
// });



export function persistToStorage(state){
  fetch('http://localhost:3000/api/state', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({state})
  }).then(response => response);
  // db('state').push(state);
  // return '';
}

export function retrieveFromStorage(){
  var data = {};
  // data.database = {};
  // data.message_center = {};
  // data.query = {};
  data.routing = {};
  jQuery.ajax({
      url: 'http://localhost:3000/api/state',
      success: function (result) {
          if (result.isOk == false) throw new Error("Bad response from server");
          // return result[0];
          data.database = fromJS(result[0].database);
          data.message_center = fromJS(result[0].message_center);
          data.query = fromJS(result[0].query);
          
          // data.routing = result[0].routing;
      },
      async: false
  });
  return data;
  // fetch('http://localhost:3000/api/state', {
  //   method: 'GET',
  //   headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //   }
  // }).then(function(response){
  //   if (response.status >= 400) {
  //     throw new Error("Bad response from server");
  //   }
  //   return response.json();
  // }).then(function(state){
  //     console.log(state);
  //     return state[0];
  // });
}