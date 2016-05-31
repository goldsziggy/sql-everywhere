import { app, BrowserWindow, Menu, crashReporter, shell, ipcMain } from 'electron';
import MyMenu from './server/electron_menu';
//http://stackoverflow.com/questions/35529532/how-to-change-the-redux-state-based-on-an-electron-menu-click

let menu;
let template;
let mainWindow = null;

crashReporter.start({companyName: "SQL-Everywhere", submitURL:"http://localhost"});

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.loadURL(`file://${__dirname}/app/app.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
  }
  var myMenu = new MyMenu(mainWindow, app);
  menu = Menu.buildFromTemplate(myMenu.get_menu());
  if (process.platform === 'darwin') { 
    Menu.setApplicationMenu(menu);
  } else {
    mainWindow.setMenu(menu);
  }

  ipcMain.on('sync-database-menu', (event, databases, active_db)=>{
    myMenu.set_database_submenu_default(); //set the default incase of page refresh...
    for(var i=0; i < databases.length; i++){
      var is_active = active_db._id && active_db._id === databases[i]._id ? true : false;
      myMenu.add_database_submenu(databases[i].database_name, databases[i]._id, is_active);
    }
    
    menu = Menu.buildFromTemplate(myMenu.get_menu());
    // mainWindow.setMenu(menu);
    if (process.platform === 'darwin') { 
        Menu.setApplicationMenu(menu);
    } else {
        mainWindow.setMenu(menu);
    }
  })
  ipcMain.on('add-database', (event, database)=>{
    myMenu.add_database_submenu(database.database_name, database._id, false);  
    
    menu = Menu.buildFromTemplate(myMenu.get_menu());
    if (process.platform === 'darwin') { 
        Menu.setApplicationMenu(menu);
    } else {
        mainWindow.setMenu(menu);
    }
  })

});
