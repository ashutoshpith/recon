import { Tray } from "electron";
export declare class TrayMenu {
    readonly tray: Tray;
    private iconPath;
    constructor();
    createNativeImage(): Electron.NativeImage;
}
