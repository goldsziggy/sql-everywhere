/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-02 12:37:05
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';

/*
* @Author: ziggy
* @Date:   2016-04-19 12:08:22
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';


import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class AddDatabaseModal extends React.Component {

  static propTypes = {
    current_state: React.PropTypes.bool.isRequired,
    toggle_add_database: React.PropTypes.func.isRequired,
    add_database: React.PropTypes.func.isRequired,
    database_types: React.PropTypes.array.isRequired
  };

  constructor(props, context){
    super(props, context);
    this.submit_modal = this.submit_modal.bind(this);
    this.generate_select_html = this.generate_select_html(this);
  }

  componentDidUpdate(props, state){
    if(this.props.current_state === true){
      var self = this.props;  // This is done for scoping the complete function of the Modal
      $('#add_database_modal').show();
      // $('#add_database_modal').openModal(
      //     {complete: function(){
      //         self.toggle_add_database(false);
      //     }});
    }
    else
      $('#add_database_modal').hide();
      // $('#add_database_modal').closeModal();
  }

  componentDidMount() {
    $('#add_database_modal').hide();  
    $('#add_database_modal .ms-Dropdown').Dropdown();  
     /** Add is-active class - changes border color to theme primary */
    $('#add_database_modal').find('.ms-TextField-field').on('focus', function() {
      $(this).parent('.ms-TextField--underlined').addClass('is-active');
    });

    /** Remove is-active on blur of textfield */
    $('#add_database_modal').find('.ms-TextField-field').on('blur', function() {
      $(this).parent('.ms-TextField--underlined').removeClass('is-active');
    });
  }

  generate_select_html(){
    return this.props.database_types.map(function(db,i){
      return <option key={i} value={db} >{db}</option>
    });
  }

  clear_form(){
    this.refs.add_db_database_name.value = '';
    this.refs.add_db_username.value = '';
    this.refs.add_db_password.value = '';
    this.refs.add_db_database_host.value = '';
    this.refs.add_db_database_port.value = '';
  }

  submit_modal(){
    var data = {
      database_type: this.refs.add_db_database_type.value,
      database_name: this.refs.add_db_database_name.value,
      database_host: this.refs.add_db_database_host.value,
      database_port: this.refs.add_db_database_port.value,
      username: this.refs.add_db_username.value,
      password: this.refs.add_db_password.value
    }
    this.clear_form();

    //call the action creator
    this.props.add_database(data);
    this.props.toggle_add_database(false);
  }

  render() {
    return (
      <div id="add_database_modal" className="ms-Dialog ms-Dialog--lgHeader modal-fixed-footer">
        <div className="ms-Overlay ms-Overlay--dark js-DialogAction--close">
        </div>
        <div className="ms-Dialog-main">
          <button className="ms-Dialog-button ms-Dialog-button--close js-DialogAction--close">
            <i className="ms-Icon ms-Icon--x">
            </i>
          </button>
          <div className="ms-Dialog-header">
            <p className="ms-Dialog-title">
              Add Database
            </p>
          </div>
          <div className="ms-Dialog-inner">
            <div className='ms-Dialog-content'>
              <div className="ms-Dropdown" tabindex="0">
                <label for="add_db_database_type" className='ms-Label'>Database Type</label>
                <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--caretDown"></i>
                <select ref="add_db_database_type" className="ms-Dropdown-select">
                  {this.generate_select_html}
                </select>
              </div>
              <div className="ms-TextField ms-TextField--underlined">
                <label for="add_db_database_name" className='ms-Label'>Database Name</label>
                <input ref="add_db_database_name" className='ms-TextField-field' type="text"/>
              </div>
              <div className="ms-TextField ms-TextField--underlined">
                <label for="add_db_database_host" className='ms-Label'>Database Host</label>
                <input ref="add_db_database_host" className='ms-TextField-field' type="text"/>
              </div>
              <div className="ms-TextField ms-TextField--underlined">
                <label for="add_db_database_port" className='ms-Label'>Database Port</label>
                <input ref="add_db_database_port" className='ms-TextField-field' type="text"/>
              </div>
              <div className="ms-TextField ms-TextField--underlined">
                <label for="add_db_username" className='ms-Label'>Username</label>
                <input ref="add_db_username"  type="text" className="ms-TextField-field"/>
              </div>
              <div className="ms-TextField ms-TextField--underlined">
                <label for="add_db_password" className='ms-Label'>Password</label>
                <input ref="add_db_password" type="password" className="ms-TextField-field"/>
              </div>
            </div>
          </div>
          <div className="ms-Dialog-actions">
            <div className="ms-Dialog-actionsRight">
              <button onClick={this.submit_modal} className="ms-Dialog-action ms-Button ms-Button--primary">
                <span className="ms-Button-label">Submit</span>
              </button>
              <button onClick={()=> this.props.toggle_add_database(false)}className="ms-Dialog-action ms-Button">
                <span className="ms-Button-label">
                    Cancel
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

export default AddDatabaseModal;
