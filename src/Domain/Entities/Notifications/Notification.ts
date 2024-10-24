import Interested from "./Interested";
import { NotificationMessageType } from "./NotificationMessageType";

type NotificationPayload = {
    title: string,
    message: NotificationMessageType,
    interested: Array<Interested>
}

export default class Notification {
    public readonly title: string;
    public readonly message: NotificationMessageType;
    public readonly interesteds: Array<Interested>;

    constructor({ title, message }: NotificationPayload) {
        this.title = title;
        this.message = message;
        this.interesteds = [];
    }
}