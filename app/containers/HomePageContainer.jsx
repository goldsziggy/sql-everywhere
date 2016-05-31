import React from 'react';
import { Link } from 'react-router';
import Home from '../components/Home';
import LogBoxContainer from './LogBoxContainer';
import SidebarContainer from './SideBarContainer';
import AddDatabaseModalContainer from './AddDatabaseModalContainer';
import DataTableContainer from './DataTableContainer';
import styles from './HomePage.css';
import classNames from 'classnames';

//@todo handle all tabbing logic within the state and props... That way I can better handle tabs.. JQuery is temporary here!
export default class HomePageContainer extends React.Component {

  static getProps() {
    return {}
  }

  constructor(props, context) {
        super(props, context);
        this.handle_result_tab = this.handle_result_tab.bind(this);
        this.handle_query_tab = this.handle_query_tab.bind(this);
    }

  componentDidMount() {
      $("#query_res_tabs .ms-Pivot-link").each(function(){
        var $pivotContainer = $(this);
        /** When clicking/tapping a link, select it. */
        $pivotContainer.on('click', function(event) {
          event.preventDefault();
          $(this).siblings('.ms-Pivot-link').removeClass('is-selected');
          $(this).addClass('is-selected');
        })
      }) 

  }

  handle_query_tab(){
    $('.query-tab').show();
    $('.result-tab').hide();
  }

  handle_result_tab(){
    $('.query-tab').hide();
    $('.result-tab').show();
  }

  render() {
    return (
      <div className={classNames(styles.full_screen, 'ms-Row')}>

        <ul id='query_res_tabs' className="ms-Pivot ms-Pivot--large">
          <li className='ms-Pivot-link is-selected' onClick={this.handle_query_tab}>Query</li>
          <li className='ms-Pivot-link' onClick={this.handle_result_tab}>Results</li>
        </ul>
        <AddDatabaseModalContainer />
        <div className='query-tab'>
          <div className='ms-Row'>
            <div className='ms-Grid-col ms-u-md12'> 
              <Home />
            </div>
          </div>
          <div className='ms-Row'>
            <div className='ms-Grid-col ms-u-md12'> 
              <LogBoxContainer />
            </div>
          </div>          
        </div>
        <div className='result-tab' >
          <div className='ms-Row'>
            <div className='ms-Grid-col ms-u-md12'> 
              <DataTableContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }

}
