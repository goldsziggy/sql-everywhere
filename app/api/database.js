/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 11:19:09
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';

//import utils
import MySQL from '../utils/database/mysql';

export function test_connection(dispatch, db){
  return new Promise(function(resolve, reject){
    let conn = new MySQL(db.database_host, db.database_port, db.user, db.password, db.database_name);
    conn.test_connection(function(err){
      let message = 'Connection test was successful!'
      if(err){
        message = 'Connection Test Failed: ' + err
        reject(message);
      }
      resolve(message);
    });
  });
}
