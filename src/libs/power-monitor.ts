import { powerMonitor, Notification } from "electron";

export class ReconPowerMonitor {
  async powerInfo(): Promise<string> {
    console.log("Click Power Info");
    let status: string;
    powerMonitor.once("on-battery", (): string => {
      status = "on battery";
      return "on battery";
    });

    powerMonitor.on("on-battery", (): string => {
      status = "on battery";
      return "on battery";
    });

    powerMonitor.on("on-ac", (): string => {
      status = "on ac";

      return "on ac";
    });
    return status;
  }
}
