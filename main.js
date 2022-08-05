const { app, BrowserWindow } = require("electron");
const path = require("path");

let win
  
function createWindow() {

  win = new BrowserWindow({
    width: 960,
    height: 540,
    icon: path.join(__dirname, 'icon.ico'),
  })

  win.setMenu(null)

  win.loadURL(
'https://jwa.coding398.dev/')

  
  win.on('closed', () => {
    win = null
  })

  win.WebContents.on('new-window', (event, url) => {
  
    event.preventDefault()
    win.loadURL(url)
  })
}

app.whenReady().then(() => {
  createWindow()
})

