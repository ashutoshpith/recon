"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconPowerMonitor = void 0;
const electron_1 = require("electron");
class ReconPowerMonitor {
    async powerInfo() {
        console.log("Click Power Info");
        let status;
        electron_1.powerMonitor.once("on-battery", () => {
            status = "on battery";
            return "on battery";
        });
        electron_1.powerMonitor.on("on-battery", () => {
            status = "on battery";
            return "on battery";
        });
        electron_1.powerMonitor.on("on-ac", () => {
            status = "on ac";
            return "on ac";
        });
        return status;
    }
}
exports.ReconPowerMonitor = ReconPowerMonitor;
//# sourceMappingURL=power-monitor.js.map