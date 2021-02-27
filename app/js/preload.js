const customTitlebar = require('custom-electron-titlebar');
const { remote } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    const titleBar = new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#72431B'),
        icon: `../app/public/img/icon.ico`
    });
    const mainMenu = new remote.Menu();
    titleBar.updateMenu(mainMenu);
});
