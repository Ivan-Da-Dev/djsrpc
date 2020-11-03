'use strict';

/* eslint-disable no-console */
const DiscordRPC = require('../');

/*
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 340,
    height: 380,
    resizable: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
*/

// Set this to your Client ID.
const clientId = '738034388687782008';

// Only needed if you want to use spectate, join, or ask to join
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = 1600000000200 //new Date();

async function setActivity() {

  /*
    if (!rpc || !mainWindow) {
    return;
  }
  */

  //const boops = await mainWindow.webContents.executeJavaScript('window.boops');

  // You'll need to have snek_large and snek_small assets uploaded to
  // https://discord.com/developers/applications/769135571774865409/rich-presence/asset

  rpc.setActivity({
    details: "playing Google Chrome",
    state: "searching: chrome//:dino",
    startTimestamp,
    largeImageKey: '',
    largeImageText: '',
    instance: false,
  });

  /*
    rpc.setActivity({
    details: "con is very gei",
    state: "sub 2 pewdiepie plz",
    startTimestamp,
    largeImageKey: 'hmm',
    largeImageText: 'hmm',
    instance: false,
  });
  */
}

rpc.on('ready', () => {
  console.log("Logged it")
  setActivity();

  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);
