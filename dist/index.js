"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron = require("electron");
const tray_1 = require("./tray");
const app = electron.app;
app.on("ready", tray_1.trayFunc);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
//# sourceMappingURL=index.js.map