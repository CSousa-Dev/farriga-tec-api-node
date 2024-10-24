import Interesteds from "./Interested";
import Notification from "./Notification";
import { NotificationMessageType } from "./NotificationMessageType";

export default abstract class Notifier {
    notify(
        notification: Notification
    ): void {
        let interesteds = notification.interesteds;

        interesteds.forEach(interested => {
            this.notifyInterested(interested, notification.message);
        })
    }

    abstract notifyInterested(Interested: Interesteds, message: NotificationMessageType): void;
}