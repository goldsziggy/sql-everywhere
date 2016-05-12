/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 11:30:32
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import styles from './LogBox.css';
import classNames from 'classnames';

export default class LogBox extends Component {

  static propTypes = {
        remove_message: React.PropTypes.func.isRequired,
        messages: React.PropTypes.array.isRequired
    };


  constructor(props, context){
    super(props, context);
    this.build_message_list = this.build_message_list.bind(this);
  }

//@TODO make each message it's own component
//@TODO : create an event on the message icon... If clicked it opens the full message up inside a modal.
  build_message_list(self){
    return this.props.messages.map(function(message, i){  
        var class_name = message.status ? 'ms-Icon ms-Icon--check ms-fontColor-greenDark' : 'ms-Icon ms-Icon--alert ms-fontColor-redDark';
        return (
            
              <div key={i} className={classNames(styles.banner_override, "ms-MessageBanner")}>
                <div className="ms-MessageBanner-content">
                  <div className={classNames(styles.text_box, "ms-MessageBanner-text")}>
                    <i className={class_name}></i> {message.message}
                  </div>
                </div>
                <button className="ms-MessageBanner-close" onClick={ () => self.props.remove_message(message)}>
                  <i className="ms-Icon ms-Icon--x"></i>
                </button>
              </div>
          )
      })
  }
  render(){
    return (
      <div className={classNames(styles.message_center, "ms-borderColor-themeDarker")}>
        <div className={classNames(styles.title_box, 'ms-font-xxl', 'ms-bgColor-themePrimary', 'ms-fontColor-white', "ms-borderColor-themeDarker")}>
        <i className='ms-Icon--mail ms-Icon'></i> Message Center
        </div>
        <div  className={classNames('')}>
          {this.build_message_list(this)}
        </div>
      </div>
    )
  }
}