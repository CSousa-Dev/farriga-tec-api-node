import BaseMessage from "./BaseMessage";

export default interface DeviceDisconnectionMessage extends BaseMessage {
    type: 'device-disconnection-message';
    payload: {
        deviceMacAddress: string;
        time: Date;
    }
}