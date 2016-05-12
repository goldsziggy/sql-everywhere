/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 06:11:47
* @Last Modified by:   Matthew Zygowicz
*/

// Adapted from https://github.com/arkihillel/unified-sql/blob/master/db/mysql.js
'use strict';

import mysql from 'mysql';


export default class MySQL {

  constructor(host, port, user, password, db){
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
    this.db = db;
    this.connection =  mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.db,
      port: this.port
    });
  }

  open_connection(){
    this.connection =  mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.db,
      port: this.por
    });
  }

  close_connection(){
    this.connection.end();
  }

  test_connection(call_back){
    this.connection.connect(function(err){
      if(err) return call_back(err);
      this.connection.end();
      return call_back();
    });
  }

  run_query(query, call_back){
    //if multiple queries we could use async here
    this.connection.connect(function(err){
      this.connection.query(query, function(err, rows, fields) {
          if (err) 
            result.push(new Error(err));
          else 
            result.push(format_output(rows));

          return callback();
      });
      this.connection.end();
      call_back(null, result);
    });
  }

  format_output(output) {
    var columns = Object.keys(output[0]);
    var rows = [];
    for (var i = 0; i < output.length; i++) {
      var row = [];
      for (var value in output[i]) {
        row.push(output[i][value]);
      }
      rows.push(row);
    }

    return {
      columns: columns,
      rows: rows
    };
  };
}