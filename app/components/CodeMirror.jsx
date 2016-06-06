/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-09 13:02:19
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
import styles from './CodeMirror.css';


export default class CodeMirror extends Component {
  
  
  static propTypes = {
      run_query_request: React.PropTypes.func.isRequired,
      set_query: React.PropTypes.func.isRequired,
      set_editor: React.PropTypes.func.isRequired,
      active_database: React.PropTypes.object,
      query: React.PropTypes.string.isRequired
  };

  constructor(props, context) {
      super(props, context);
      this.run_query = this.run_query.bind(this);

      require('codemirror/mode/sql/sql');

      require('codemirror/addon/hint/show-hint');
      require('codemirror/addon/hint/sql-hint');

      //SQL mode is set based on MIME type
      this.options = {
            lineNumbers: true,
            mode: 'text/x-sql',
            theme: 'monokai',
            extraKeys: {
                "Shift-Space": "autocomplete", // this is set for mac os x,
                "Ctrl-Space": "autocomplete"
            }
        };
    }
    componentDidUpdate(prevProps, prevState) {
          var codeMirrorImpl = this.refs.code_mirror.getCodeMirror();
          var CodeMirror= this.refs.code_mirror.getCodeMirrorInstance();

          CodeMirror.commands.autocomplete = function (cm) {
            CodeMirror.showHint(cm, CodeMirror.hint.sql);
          };

          // var orig = CodeMirror.hint.sql;
          // CodeMirror.hint.sql = function(cm) {
          //   var inner = orig(cm) || {from: cm.getCursor(), to: cm.getCursor(), list: []};
          //   inner.list.push("bozo");
          //   return inner.
          // };
    }

    componentDidMount() {
      var editor = $('.CodeMirror')[0].CodeMirror;
      $(editor.getWrapperElement()).resizable({
        resize: function() {
          editor.setSize($(this).width(), $(this).height());
          editor.refresh();
        }
      });  
    }

    run_query(){
      this.props.run_query_action(this.props.query, this.props.active_database);
    }

    render() {
        
        return (
            <div className={styles.code_mirror}>
                <Codemirror ref='code_mirror' value={this.props.query} onChange={this.props.set_query} options={this.options} />
                <div className="ms-CommandBar">
                  <div className="ms-CommandBar-mainArea">
                    <div className="ms-CommandBarItem">
                      <div className="ms-CommandBarItem-linkWrapper">
                        <a onClick={this.run_query} className="ms-CommandBarItem-link">
                          <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Run Query</span>
                        </a>
                      </div>
                    </div>
                    <div className="ms-CommandBarItem">
                      <div className="ms-CommandBarItem-linkWrapper">
                        <a onClick={this.run_query} className="ms-CommandBarItem-link">
                          <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Run Query In New Page</span>
                        </a>
                      </div>
                    </div>
                    <div className="ms-CommandBarItem">
                      <div className="ms-CommandBarItem-linkWrapper">
                        <a onClick={this.run_query} className="ms-CommandBarItem-link">
                          <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Test Database</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }


}