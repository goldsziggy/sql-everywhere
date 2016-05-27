/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-18 06:12:08
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import unified_sql from 'unified-sql';

export function test_db(type, database_host, database_port, user, password, database_name){
  return new Promise(function(resolve, reject){
    // let conn = new MySQL(db.database_host, db.database_port, db.user, db.password, db.database_name);
    // type, host, port, user, password, db, options
    unified_sql.testConnection(type, database_host, database_port, user, password, database_name, {}, function(err){
      let message = 'Connection test was successful!'
      if(err){
        message = 'Connection Test Failed: ' + err
        reject(message);
      }
      resolve(message);
    });
  });
}

export function run_query(type, database_host, database_port, user, password, database_name, query){
  return new Promise(function(resolve, reject){
    // let conn = new MySQL(db.database_host, db.database_port, db.user, db.password, db.database_name);
    // type, host, port, user, password, db, options
    unified_sql.executeQueries(type, database_host, database_port, user, password, database_name, query, {}, function(err, data){
      if(err){
        var message = 'Query Failed: ' + err
        reject(message);
      }
      resolve(data);
    });
  });
}


export function get_all_database_types(){
  return unified_sql.getConnectionTypes();
}