/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-11 12:21:57
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogBox from '../components/LogBox';
import * as MessageActions from '../actions/message_center';

function mapStateToProps(state) {
  return {
      messages: state.message_center.get('messages').toJS()
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MessageActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LogBox);