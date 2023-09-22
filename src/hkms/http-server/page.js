const log = require('electron-log');
//const BrowserWindow = require('electron')
const { app, BrowserWindow } = require('electron')

const win = new BrowserWindow({
    width: 800,
    height: 600
})
log.info('createWindow');
log.info(`${__dirname}/../index.html`);
win.loadFile(`${__dirname}/../index.html`)
