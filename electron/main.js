// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
// const AutoLaunch = require('auto-launch');
var path = require('path'); // node内置path模块
const argv = process
 .argv
 .slice(2)
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 455,
    height: 768,
    x: 911,
    y: 0,
    frame: false,
    autoHideMenuBar: true,
    fullscreenable: false,
    webPreferences: {
        javascript: true,
        plugins: true,
        nodeIntegration: false, // 不集成 Nodejs
        webSecurity: false,
        preload: path.join(__dirname, './renderer.js') // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
    }
  })
  // let autoLaunch = new AutoLaunch({
  //   name: 'HelloWorld',
  //   path: app.getPath('exe'),
  // });
  // autoLaunch.isEnabled().then((isEnabled) => {
  //   if (!isEnabled) autoLaunch.enable();
  // });
  // and load the index.html of the app.
  if (argv && argv[1] == 'dev') {
     mainWindow.loadURL("http://localhost:8989/")
   } else if (argv && argv[1] == 'build') {
     // window 加载build好的html.
     mainWindow.loadURL(url.format({
       pathname: path.join(__dirname, './ROOT/index.html'),
       protocol: 'file:',
       slashes: true
     }))
   }
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
