import electron = require("electron");
import { trayFunc } from "./tray";
const app = electron.app;

app.on("ready", trayFunc);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
