"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron = require("electron");
const opn = require("open");
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;
const iconPath = "src/compass.png";
let tray = null;
const notificationAlert = (type) => new electron.Notification({
    title: type.title,
    icon: type.icon,
    body: type.body,
    closeButtonText: "End Process",
}).show();
const trayFunc = () => {
    tray = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: "Read",
                    type: "normal",
                    toolTip: "read",
                    click: () => {
                        console.log("Hello read");
                    },
                },
                {
                    label: "Write",
                    type: "normal",
                    toolTip: "write",
                    click: () => {
                        console.log("hello write");
                    },
                },
            ],
        },
        {
            label: "utility",
            submenu: [
                {
                    label: "date",
                    type: "normal",
                    toolTip: "Date",
                    click: () => {
                        console.log(Date.now());
                    },
                },
                {
                    label: "browser",
                    submenu: [
                        {
                            label: "firefox",
                            click: () => {
                                opn("www.google.com", { app: ["firefox"] });
                                notificationAlert({
                                    title: "Firefox Open",
                                    icon: "src/compass.png",
                                    body: "Browser Firefox opened",
                                });
                            },
                        },
                        {
                            label: "chrome",
                            click: () => {
                                opn("", { app: ["chromium"] });
                                notificationAlert({
                                    title: "Chrome Open",
                                    icon: "src/compass.png",
                                    body: "Browser Chrome opened",
                                });
                            },
                        },
                    ],
                },
                {
                    label: "Sys Info",
                    type: "normal",
                    toolTip: "System Info",
                    icon: "src/compass.png",
                    click: () => {
                        new electron.Notification({
                            title: "System Info",
                            icon: "src/compass.png",
                            body: `${Date.now().toLocaleString()}`,
                            subtitle: "System name",
                            closeButtonText: "End Process",
                        }).show();
                    },
                },
                {
                    label: "Open File/Directory",
                    type: "normal",
                    toolTip: "Open File/Directory",
                    icon: "src/compass.png",
                    click: () => {
                        const diag = electron.dialog.showOpenDialog({
                            properties: ["openDirectory", "openFile"],
                            title: "Open File/Directory",
                        });
                        diag.then((data) => {
                            console.log(data);
                        });
                    },
                },
            ],
        },
    ]);
    tray.setContextMenu(contextMenu);
    tray.setToolTip("Tray App");
    tray.setTitle("Recon");
};
app.on("ready", trayFunc);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
//# sourceMappingURL=index.js.map