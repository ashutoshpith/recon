"use strict";
exports.__esModule = true;
exports.TrayMenu = void 0;
var electron_1 = require("electron");
var TrayMenu = /** @class */ (function () {
    function TrayMenu() {
        // Path where should we fetch our icon;
        this.iconPath = "/src/compass.png";
        this.tray = new electron_1.Tray(this.iconPath);
    }
    TrayMenu.prototype.createNativeImage = function () {
        // Since we never know where the app is installed,
        // we need to add the app base path to it.
        var path = "" + electron_1.app.getAppPath() + this.iconPath;
        var image = electron_1.nativeImage.createFromPath(path);
        // Marks the image as a template image.
        image.setTemplateImage(true);
        return image;
    };
    return TrayMenu;
}());
exports.TrayMenu = TrayMenu;
//# sourceMappingURL=tray.js.map