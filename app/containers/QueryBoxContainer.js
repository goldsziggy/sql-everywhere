/*
* @Author: Matthew Zygowicz
* @Date:   2016-04-30 09:30:58
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QueryBox from '../components/QueryBox';
import * as QueryActions from '../actions/query';

function mapStateToProps(state) {
  return {
      query: state.query.getIn(['query'])
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(QueryActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(QueryBox);