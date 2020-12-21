import { app, Tray, Menu, nativeImage, dialog, Notification } from "electron";
import * as opn from "open";
import { NotificationAlert } from "./notification";
let tray = null;
// public readonly tray: Tray;
const iconPath = "src/img/compass.png";

export const createNativeImage = () => {
  const path = `${app.getAppPath()}${iconPath}`;
  const image = nativeImage.createFromPath(path);
  image.setTemplateImage(true);
  return image;
};

export const trayFunc = () => {
  createNativeImage();
  tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
          label: "Read",
          type: "normal",
          toolTip: "read",
          click: (): void => {
            console.log("Hello read");
          },
        },
        {
          label: "Write",
          type: "normal",
          toolTip: "write",
          click: (): void => {
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
          click: (): void => {
            console.log(Date.now());
          },
        },
        {
          label: "browser",
          submenu: [
            {
              label: "firefox",
              click: (): void => {
                opn("www.google.com", { app: ["firefox"] });
                new NotificationAlert({
                  title: "Firefox Open",
                  icon: "src/img/compass.png",
                  body: "Browser Firefox opened",
                });
              },
            },
            {
              label: "chrome",
              click: (): void => {
                opn("", { app: ["chromium"] });
                new NotificationAlert({
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
          click: (): void => {
            new Notification({
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
          click: (): void => {
            const diag = dialog.showOpenDialog({
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
