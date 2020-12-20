import electron = require("electron");
const app = electron.app;
const Menu = electron.Menu;

const Tray = electron.Tray;

const iconPath = "src/compass.png";
let tray = null;
const trayFunc = (): void => {
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
          label: "Sys Info",
          type: "normal",
          toolTip: "System Info",
          icon: "src/compass.png",
          click: (): void => {
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
          click: (): void => {
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
