import { app, Tray, Menu, nativeImage, dialog, Notification } from "electron";
import * as opn from "open";
import { NotificationAlert } from "./notification";
let tray = null;
// public readonly tray: Tray;
const iconPath = "src/img/compass.png";
const firefoxPath = "src/img/firefox.png";

export const createNativeImage = (iconPath: string) => {
  const path = iconPath;
  const image = nativeImage.createFromPath(path);
  image.setTemplateImage(true);
  return image;
};

export const trayFunc = () => {
  tray = new Tray(createNativeImage(iconPath));
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
              click: async (): Promise<void> => {
                const check = await opn("www.google.com", { app: ["firefox"] });
                if (!check.pid) {
                  new NotificationAlert({
                    title: "Firefox Open",
                    body: "Not Found Command",
                  });
                }

                new NotificationAlert({
                  title: "Firefox Open",
                  body: "Browser Firefox opened",
                });
              },
            },
            {
              label: "chrome",
              click: async (): Promise<void> => {
                const check = await opn("", { app: ["chromium"] });
                if (!check.pid) {
                  new NotificationAlert({
                    title: "Chrome Open",
                    body: "Browser Chrome Command Not Found",
                  });
                }
                new NotificationAlert({
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
          click: (): void => {
            new Notification({
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
