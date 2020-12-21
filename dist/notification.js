"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAlert = void 0;
const electron_1 = require("electron");
class NotificationAlert {
    constructor(options) {
        this.options = options;
        new electron_1.Notification({
            title: this.options.title,
            icon: this.options.icon,
            body: this.options.body,
            closeButtonText: "End Process",
        }).show();
    }
}
exports.NotificationAlert = NotificationAlert;
//# sourceMappingURL=notification.js.map