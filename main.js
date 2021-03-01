const { app, BrowserWindow } = require('electron')

let win = null;
async function createWindow () {
    win = new BrowserWindow({
        width: 350,
        height: 400,
        icon: `${__dirname}/app/public/img/icon.ico`,
        darkTheme: true,
        frame: false,
        backgroundColor: '#FFDB63',
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            preload: `${__dirname}/app/js/preload.js`
        }
    });

    win.loadURL(`file://${__dirname}/app/index.html`);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});