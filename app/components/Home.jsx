import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import QueryBoxContainer from '../containers/QueryBoxContainer';
import CodeMirrorContainer from '../containers/CodeMirrorContainer';

export default class Home extends Component {  

  render() {
    return (
      <div>
        <div className={styles.container}>
          <strong className='ms-font-su'>SQL-Everywhere!</strong>
          <CodeMirrorContainer />
        </div>
      </div>
    );
  }

}
