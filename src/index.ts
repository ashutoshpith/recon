import electron = require("electron");
const app = electron.app;
const Menu = electron.Menu;

const Tray = electron.Tray;

const iconPath = "src/compass.png";
let tray = null;
const trayFunc = (): void => {
  tray = new Tray(iconPath);

  const template: any = [
    {
      label: "File",
      submenu: [
        {
          label: "Low",
          type: "radio",
          checked: true,
        },
        {
          label: "High",
          type: "radio",
        },
      ],
    },
    {
      label: "Video",
      submenu: [
        {
          label: "1280x720",
          type: "radio",
          checked: true,
        },
        {
          label: "1920x1080",
          type: "radio",
        },
      ],
    },
  ];

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
          label: "Read",
          type: "normal",
          click: (): void => {
            console.log("Hello read");
          },
        },
        {
          label: "Write",
          type: "normal",
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
          click: (): void => {
            console.log(Date.now());
          },
        },
        {
          label: "Sys Info",
          type: "normal",
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
