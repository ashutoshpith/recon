import { Notification } from "electron";
import { NotificationAlertInput } from "./types";

export class NotificationAlert {
  constructor(private readonly options: NotificationAlertInput) {
    new Notification({
      title: this.options.title,
      icon: this.options.icon,
      body: this.options.body,
      closeButtonText: "End Process",
    }).show();
  }
}
