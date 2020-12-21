"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrayMenu = void 0;
const electron_1 = require("electron");
class TrayMenu {
    constructor() {
        this.iconPath = "/src/compass.png";
        this.tray = new electron_1.Tray(this.iconPath);
    }
    createNativeImage() {
        const path = `${electron_1.app.getAppPath()}${this.iconPath}`;
        const image = electron_1.nativeImage.createFromPath(path);
        image.setTemplateImage(true);
        return image;
    }
}
exports.TrayMenu = TrayMenu;
//# sourceMappingURL=tray.js.map