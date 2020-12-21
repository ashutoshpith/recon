"use strict";
exports.__esModule = true;
var electron = require("electron");
var opn = require("open");
var app = electron.app;
var Menu = electron.Menu;
var Tray = electron.Tray;
var iconPath = "src/compass.png";
var tray = null;
var notificationAlert = function (type) {
    return new electron.Notification({
        title: type.title,
        icon: type.icon,
        body: type.body,
        closeButtonText: "End Process"
    }).show();
};
var trayFunc = function () {
    tray = new Tray(iconPath);
    var contextMenu = Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: "Read",
                    type: "normal",
                    toolTip: "read",
                    click: function () {
                        console.log("Hello read");
                    }
                },
                {
                    label: "Write",
                    type: "normal",
                    toolTip: "write",
                    click: function () {
                        console.log("hello write");
                    }
                },
            ]
        },
        {
            label: "utility",
            submenu: [
                {
                    label: "date",
                    type: "normal",
                    toolTip: "Date",
                    click: function () {
                        console.log(Date.now());
                    }
                },
                {
                    label: "browser",
                    submenu: [
                        {
                            label: "firefox",
                            click: function () {
                                opn("www.google.com", { app: ["firefox"] });
                                notificationAlert({
                                    title: "Firefox Open",
                                    icon: "src/compass.png",
                                    body: "Browser Firefox opened"
                                });
                            }
                        },
                        {
                            label: "chrome",
                            click: function () {
                                opn("", { app: ["chromium"] });
                                notificationAlert({
                                    title: "Chrome Open",
                                    icon: "src/compass.png",
                                    body: "Browser Chrome opened"
                                });
                            }
                        },
                    ]
                },
                {
                    label: "Sys Info",
                    type: "normal",
                    toolTip: "System Info",
                    icon: "src/compass.png",
                    click: function () {
                        new electron.Notification({
                            title: "System Info",
                            icon: "src/compass.png",
                            body: "" + Date.now().toLocaleString(),
                            subtitle: "System name",
                            closeButtonText: "End Process"
                        }).show();
                    }
                },
                {
                    label: "Open File/Directory",
                    type: "normal",
                    toolTip: "Open File/Directory",
                    icon: "src/compass.png",
                    click: function () {
                        var diag = electron.dialog.showOpenDialog({
                            properties: ["openDirectory", "openFile"],
                            title: "Open File/Directory"
                        });
                        diag.then(function (data) {
                            console.log(data);
                        });
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