/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-26 06:40:16
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DataTable from '../components/DataTable';
// import * as QueryActions from '../actions/query';

function mapStateToProps(state) {
  return {
      data: state.query.getIn(['data']).toJS()
    };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(QueryActions, dispatch);
// }

// export default connect(mapStateToProps,mapDispatchToProps)(CodeMirror);
export default connect(mapStateToProps)(DataTable);