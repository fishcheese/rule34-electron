const { app, BrowserWindow, session } = require('electron');
const { ElectronBlocker } = require('@cliqz/adblocker-electron');
const { fetch } = require('cross-fetch');
const path = require('path');

ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
  blocker.enableBlockingInSession(session.defaultSession);
});

async function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    autoHideMenuBar: true,
    title: "Rule 34",
    icon: path.join(__dirname, 'assets/icons/512x512.png')
  });

  win.loadURL('https://rule34.xxx');
  win.removeMenu()
  win.on('page-title-updated', (e) => {
    e.preventDefault();
    win.setTitle("Rule 34");
  });
  const { shell } = require('electron');

  win.webContents.setWindowOpenHandler(({ url }) => {
    const allowedDomain = 'rule34.xxx';
    if (new URL(url).hostname.endsWith(allowedDomain)) {
      return { action: 'allow' };
    } else {
      shell.openExternal(url);
      return { action: 'deny' };
    }
  });

  win.webContents.on('will-navigate', (event, url) => {
    const allowedDomain = 'rule34.xxx';
    if (!new URL(url).hostname.endsWith(allowedDomain)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

app.whenReady().then(createWindow);
