"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trayFunc = exports.createNativeImage = void 0;
const electron_1 = require("electron");
const opn = require("open");
const notification_1 = require("./notification");
let tray = null;
const iconPath = "src/img/compass.png";
const firefoxPath = "src/img/firefox.png";
const createNativeImage = (iconPath) => {
    const path = iconPath;
    const image = electron_1.nativeImage.createFromPath(path);
    image.setTemplateImage(true);
    return image;
};
exports.createNativeImage = createNativeImage;
const trayFunc = () => {
    tray = new electron_1.Tray(exports.createNativeImage(iconPath));
    const contextMenu = electron_1.Menu.buildFromTemplate([
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
                            click: async () => {
                                const check = await opn("www.google.com", { app: ["firefox"] });
                                if (!check.pid) {
                                    new notification_1.NotificationAlert({
                                        title: "Firefox Open",
                                        body: "Not Found Command",
                                    });
                                }
                                new notification_1.NotificationAlert({
                                    title: "Firefox Open",
                                    body: "Browser Firefox opened",
                                });
                            },
                        },
                        {
                            label: "chrome",
                            click: async () => {
                                const check = await opn("", { app: ["chromium"] });
                                if (!check.pid) {
                                    new notification_1.NotificationAlert({
                                        title: "Chrome Open",
                                        body: "Browser Chrome Command Not Found",
                                    });
                                }
                                new notification_1.NotificationAlert({
                                    title: "Chrome Open",
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
                    click: () => {
                        new electron_1.Notification({
                            title: "System Info",
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
                    click: () => {
                        const diag = electron_1.dialog.showOpenDialog({
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
exports.trayFunc = trayFunc;
//# sourceMappingURL=tray.js.map