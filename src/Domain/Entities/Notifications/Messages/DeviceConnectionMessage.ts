import BaseMessage from "./BaseMessage";

export default interface DeviceConnectionMessage extends BaseMessage {
    type: 'device-connection-message';
    payload: {
        deviceMacAddress: string;
        time: Date;
    }
}