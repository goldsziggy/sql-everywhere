/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-09 13:17:50
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CodeMirror from '../components/CodeMirror';
import * as QueryActions from '../actions/query';

function mapStateToProps(state) {
  return {
      query: state.query.getIn(['query'])
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(QueryActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CodeMirror);