import BaseMessage from "./BaseMessage";

// start-irrigation-message
export default interface StartIrrigationMessage extends BaseMessage{
    type: 'start-irrigation-message';
    payload: {
        deviceMacAddress: string;
        irrigatorPosition: string;
        time: Date;
    }
}
