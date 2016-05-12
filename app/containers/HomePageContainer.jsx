import React from 'react';
import { Link } from 'react-router';
import Home from '../components/Home';
import LogBoxContainer from './LogBoxContainer';
import SidebarContainer from './SideBarContainer';
import AddDatabaseModalContainer from './AddDatabaseModalContainer';
import styles from './HomePage.css';
import classNames from 'classnames';

export default class HomePageContainer extends React.Component {

  static getProps() {
    return {}
  }

  render() {
    return (
      <div className={classNames(styles.full_screen, 'ms-Row')}>
        <header className={classNames(styles.full_screen, 'ms-Grid-col', 'ms-u-md3', 'ms-bgColor-themePrimary')}>
          <SidebarContainer />
        </header>
        <main className='ms-Grid-col ms-u-md6'> 
          <AddDatabaseModalContainer />
          <Home />
        </main>
        <aside className={classNames(styles.full_screen, 'ms-Grid-col', 'ms-u-md3')}>
          <LogBoxContainer />
        </aside>
      </div>
    )
  }

}
