/*
 * @Author: ziggy
 * @Date:   2016-04-13 15:17:24
 * @Last Modified by:   Matthew Zygowicz
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import styles from './SideBar.css';
import classNames from 'classnames';

class Sidebar extends React.Component {
    static propTypes = {
        databases: React.PropTypes.array.isRequired,
        set_active_database: React.PropTypes.func.isRequired,
        toggle_add_database: React.PropTypes.func.isRequired,
        active_database: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.build_database_list = this.build_database_list.bind(this);
    }

    componentDidMount() {

    }

    select_database(){

    }

    build_database_list() {
        self = this;
        // add icons
        return this.props.databases.map(function(db, i){  
            var class_name = db._id===self.props.active_database._id ? 'is-selected' : '';
            return (
                <li className={classNames(class_name, 'ms-ListItem', 'is-selectable')} onClick={ () => self.props.set_active_database(db._id)} key = {i}> 
                   <span className=''>{db.database_name}</span>
                   <div className="ms-ListItem-actions">
                    <div className="ms-ListItem-action"><i className='ms-Icon ms-Icon--settings'></i></div>
                    <div className="ms-ListItem-action"><i className='ms-Icon ms-Icon--sunQuestion'></i></div>
                    <div className="ms-ListItem-action"><i className='ms-Icon ms-Icon--x'></i></div>
                   </div>
                </li> 
              )
          })
    }

    render() {

        return (
            <nav className="">
              <ul className="ms-List">
                {this.build_database_list()}
                <li className='ms-ListItem is-selectable' onClick={() => this.props.toggle_add_database(true)}>
                  <span className="">Add Database</span>
                </li> 
              </ul>
            </nav> 
        );
    }
}

export default Sidebar;