/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-26 06:06:44
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
// import styles from './LogBox.css';
import classNames from 'classnames';

export default class DataTable extends Component {

  static propTypes = {
        data: React.PropTypes.object.isRequired
    };


  constructor(props, context){
    super(props, context);
    this.build_data_table = this.build_data_table.bind(this);
  }
  build_thead(self){
    return self.props.data.columns.map(function (header, i){
          return (
            <th key = {i}>{header}</th>
          );
        });_
    
  }
  build_trow(row){
    return row.map(function (d, i ){
                return <td key = {i}>{d}</td>
              })
  }

  build_tbody(self){
    
    return self.props.data.rows.map(function (row, i ){
          return (
            <tr key = {i}>
              {self.build_trow(row)}
            </tr>
          )
        });
    
  }

  build_data_table(self){
    return (
      <table>
        <thead>
          <tr>
            {self.build_thead(self)}
          </tr>
        </thead>
        <tbody>
          {self.build_tbody(self)}
        </tbody>
      </table>
    )
  }

  render(){
    return (
      <div>
          {this.build_data_table(this)}
      </div>
    )
  }
}