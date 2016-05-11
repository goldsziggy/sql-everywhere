/*
* @Author: Matthew Zygowicz
* @Date:   2016-04-30 08:26:18
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import styles from './QueryBox.css';

export default class QueryBox extends Component {
    static propTypes = {
        run_query: React.PropTypes.func.isRequired,
        set_query: React.PropTypes.func.isRequired,
        set_editor: React.PropTypes.func.isRequired,
        query: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        // this.props.set_query({editorState: EditorState.createEmpty()});
        // this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.props.set_query({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.run_query = this.run_query.bind(this);
    }

    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.props.query.editorState, command);
        if (newState) {
          this.onChange(newState);
          return true;
        }
        return false;
    }

    run_query(){
      // console.log(this.props.query.editorState.getCurrentContent().getPlainText(' '));
      this.props.run_query(this.props.query.editorState.getCurrentContent().getPlainText(' '));
    }

    render() {
        return (
            <div>
                <div className={styles.query_box}>
                  <Editor
                    editorState={this.props.query.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                    textAlignment='left'
                  />   
                </div>
                <button className='waves-effect waves-light btn' onClick={this.run_query}>Run Query</button>
                <button className='waves-effect waves-light btn'><Link to="/">Run Query In New Page</Link></button>
                <button className='waves-effect waves-light btn'><Link to="/results">Run Query</Link></button>
            </div>
        );
    }
}