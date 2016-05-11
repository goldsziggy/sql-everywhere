/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-02 06:26:33
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import * as DatabaseActions from '../actions/database';

function mapStateToProps(state) {
  return {
      databases: state.database.getIn(['databases']).toArray(),
      active_database: state.database.getIn(['active_database'])
    };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(DatabaseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);