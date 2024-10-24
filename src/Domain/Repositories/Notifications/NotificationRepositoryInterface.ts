import Interested from "../../Entities/Notifications/Interested";
import { NotificationMessageTypes } from "../../Entities/Notifications/NotificationMessageType";

export default interface NotificationRepositoryInterface {
    getAllInteresteds(
        messageType: NotificationMessageTypes,
        deviceMacAddress?: string,
        position?: string
    ): Promise<Interested[]>;	
}