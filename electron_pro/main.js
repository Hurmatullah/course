const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const mysql = require('mysql')
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu

var mainWindow;

app.on('ready' , function(){

	mainWindow = new BrowserWindow();
	mainWindow.loadURL(url.format({

		pathname : path.join(__dirname , 'index.html'),
		protocol :'file',
		slashes : true



	}));
	const template =[];
	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
      
      var connection = mysql.createConnection({
        
        host:"localhost",
        user :"root",
        password:null,
        database :"electron_project"
      });

      connection.connect((err)=>{

        if(err){
          return console.log(err.stack);
        }

        console.log("there is some error");
      });

      connection.end(()=>{
        console.log("connection successfully ended");
      });




});