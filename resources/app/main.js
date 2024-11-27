const { app, BrowserWindow, screen} = require('electron');
const path = require('path');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  let win = new BrowserWindow({
    width: width,
    height: height,
    minWidth: 800,
    minHeight: 600,
    resizable: true,  
    center: true,
    icon: path.join(__dirname, 'images/logo.jpg'),
    titleBarStyle: 'default', 
    show: false 
  });
  win.loadFile('html/Stationary/signIn.html');
  win.once('ready-to-show', () => {
    win.show();
    win.focus();
  });
  
    win.webContents.on('did-navigate-in-page', () => {
      win.webContents.executeJavaScript(`
        const input = document.querySelector('input[type="text"]'); 
        if (input) {
          input.focus();
        }
      `);
  });
 
}
app.whenReady().then(createWindow);