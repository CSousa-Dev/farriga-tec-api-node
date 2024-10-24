import BaseEvent from "./BaseEvent";

export default interface RequestStartConnection extends BaseEvent {
    type: 'device-request-start-connection';
    timestamp: Date;
    payload: {
        deviceMacAddress: string;
    }
}