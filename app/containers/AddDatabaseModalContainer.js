/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-02 12:44:48
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddDatabaseModal from '../components/AddDatabaseModal';
import * as DatabaseActions from '../actions/database';

function mapStateToProps(state) {

  return {
      current_state: state.database.getIn(['show_database_modal']),
      database_types: state.database.getIn(['available_database_types'])
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DatabaseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDatabaseModal);