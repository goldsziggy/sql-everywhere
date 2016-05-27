import React from 'react';
import { Link } from 'react-router';
import Home from '../components/Home';
import LogBoxContainer from './LogBoxContainer';
import SidebarContainer from './SideBarContainer';
import AddDatabaseModalContainer from './AddDatabaseModalContainer';
import DataTableContainer from './DataTableContainer';
import styles from './HomePage.css';
import classNames from 'classnames';

export default class HomePageContainer extends React.Component {

  static getProps() {
    return {}
  }

  componentDidMount() {
      var sidebar = $('#sidebar_container');
      $(sidebar).resizable({
      });  
      var logbox = $('#logbox_container');
      $(logbox).resizable({
        handles: "sw, s, w"
      });  

  }

  render() {
    return (
      <div className={classNames(styles.full_screen, 'ms-Row')}>
        <header id='sidebar_container' className={classNames(styles.full_screen, 'ms-Grid-col', 'ms-u-md3', 'ms-bgColor-themePrimary')}>
          <SidebarContainer />
        </header>
        <main id='mainpage_container' className='ms-Grid-col ms-u-md6'> 
          <AddDatabaseModalContainer />
          <Home />
          <DataTableContainer />
        </main>
        <aside id='logbox_container' className={classNames(styles.full_screen, 'ms-Grid-col', 'ms-u-md3')}>
          <LogBoxContainer />

        </aside>
      </div>
    )
  }

}
