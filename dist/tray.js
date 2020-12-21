"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trayFunc = exports.createNativeImage = void 0;
const electron_1 = require("electron");
const opn = require("open");
const notification_1 = require("./notification");
let tray = null;
const iconPath = "src/img/compass.png";
const createNativeImage = () => {
    const path = `${electron_1.app.getAppPath()}${iconPath}`;
    const image = electron_1.nativeImage.createFromPath(path);
    image.setTemplateImage(true);
    return image;
};
exports.createNativeImage = createNativeImage;
const trayFunc = () => {
    exports.createNativeImage();
    tray = new electron_1.Tray(iconPath);
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
                            click: () => {
                                opn("www.google.com", { app: ["firefox"] });
                                new notification_1.NotificationAlert({
                                    title: "Firefox Open",
                                    icon: "src/img/compass.png",
                                    body: "Browser Firefox opened",
                                });
                            },
                        },
                        {
                            label: "chrome",
                            click: () => {
                                opn("", { app: ["chromium"] });
                                new notification_1.NotificationAlert({
                                    title: "Chrome Open",
                                    icon: "src/img/compass.png",
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
                    icon: "src/img/compass.png",
                    click: () => {
                        new electron_1.Notification({
                            title: "System Info",
                            icon: "src/img/compass.png",
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
                    icon: "src/img/compass.png",
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