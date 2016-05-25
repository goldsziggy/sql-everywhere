/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 11:19:09
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';

//import utils
// import MySQL from '../utils/database/mysql';
// import unified_sql from 'unified-sql';
import axios from 'axios';

export function test_connection(dispatch, db){
  return axios.post('http://localhost:3000/api/database/test_connection', {
    db_type: db.database_type,
    db_name: db.database_name,
    db_host: db.database_host,
    db_port: db.database_port,
    db_user: db.username,
    db_pass: db.password
  })
}

export function get_database_types(){
  return axios.get('http://localhost:3000/api/database/types')
}


// export function test_connection(dispatch, db){
//   return new Promise(function(resolve, reject){
//     let conn = new MySQL(db.database_host, db.database_port, db.user, db.password, db.database_name);
//     conn.test_connection(function(err){
//       let message = 'Connection test was successful!'
//       if(err){
//         message = 'Connection Test Failed: ' + err
//         reject(message);
//       }
//       resolve(message);
//     });
//   });
// }
