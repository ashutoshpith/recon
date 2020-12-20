"use strict";
exports.__esModule = true;
var electron = require("electron");
var app = electron.app;
var Menu = electron.Menu;
var Tray = electron.Tray;
var iconPath = "src/compass.png";
var tray = null;
var trayFunc = function () {
    tray = new Tray(iconPath);
    var template = [
        {
            label: "File",
            submenu: [
                {
                    label: "Low",
                    type: "radio",
                    checked: true
                },
                {
                    label: "High",
                    type: "radio"
                },
            ]
        },
        {
            label: "Video",
            submenu: [
                {
                    label: "1280x720",
                    type: "radio",
                    checked: true
                },
                {
                    label: "1920x1080",
                    type: "radio"
                },
            ]
        },
    ];
    var contextMenu = Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: "Read",
                    type: "normal",
                    click: function () {
                        console.log("Hello read");
                    }
                },
                {
                    label: "Write",
                    type: "normal",
                    click: function () {
                        console.log("hello write");
                    }
                },
            ]
        },
    ]);
    tray.setContextMenu(contextMenu);
    tray.setToolTip("Tray App");
    tray.setTitle("Recon");
};
app.on("ready", trayFunc);
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
//# sourceMappingURL=index.js.map