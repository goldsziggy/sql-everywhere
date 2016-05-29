/*
* @Author: Matthew Zygowicz
* @Date:   2016-05-28 07:39:46
* @Last Modified by:   Matthew Zygowicz
*/

'use strict';

export default class MyMenu {

  constructor(mainWindow, app){
    this.mainWindow = mainWindow;
    this.app = app;
    this.menu = [];
    this.main = {};
    this.edit = {};
    this.view = {};
    this.database = {};
    this.set_database_submenu_default();
  }

  set_database_submenu_default(){
    this.database_submenu = [{
        label: 'Add Database',
        accelerator: '',
        click: () => {
          this.mainWindow.webContents.send('add-database');
        }
      },{
        type: 'separator'
      }]; 
  }

  get_menu(){
    this.set_main_menu();
    this.set_edit_menu();
    this.set_view_menu();
    this.set_database_menu();
    this.menu = [this.main, this.edit, this.view, this.database];
    return this.menu;
  }

  set_main_menu(){
    this.main = {
      label: 'SQL Everywhere',
      submenu: [{
        label: 'About SQL-Everywhere',
        selector: 'orderFrontStandardAboutPanel:'
      }, {
        type: 'separator'
      }, {
        label: 'Services',
        submenu: []
      }, {
        type: 'separator'
      }, {
        label: 'Hide SQL-Everywhere',
        accelerator: 'Command+H',
        selector: 'hide:'
      }, {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:'
      }, {
        label: 'Show All',
        selector: 'unhideAllApplications:'
      }, {
        type: 'separator'
      }, {
        label: 'Quit',
        accelerator: 'Command+Q',
        click() {
          this.app.quit();
        }
      }]
    }
  }

  set_edit_menu(){
    this.edit = {
      label: 'Edit',
      submenu: [{
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:'
      }, {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:'
      }, {
        type: 'separator'
      }, {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:'
      }, {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:'
      }, {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:'
      }, {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:'
      }]
    }
  }

  set_view_menu(){
    this.view = {
      label: 'View',
      submenu: (process.env.NODE_ENV === 'development') ? [{
        label: 'Reload',
        accelerator: 'Command+R',
        click() {
          this.mainWindow.restart();
        }
      }, {
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',
        click() {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        }
      }, {
        label: 'Toggle Developer Tools',
        accelerator: 'Alt+Command+I',
        click() {
          this.mainWindow.toggleDevTools();
        }
      }] : [{
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',
        click() {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        }
      }]
    }
  }

  set_database_menu(){

    this.database = {
      label: 'Database',
      submenu: this.database_submenu
    }
  }

  add_database_submenu(db_name, id, is_active){
    this.database_submenu.push({
        label: db_name,
        accelerator: '',
        type: 'radio',
        checked: is_active,
        click: () => {
          this.mainWindow.webContents.send('set-active-database', id);
        }
      })
  }
}