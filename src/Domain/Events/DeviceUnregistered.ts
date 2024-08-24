import Device from "../Entities/Device";
import BaseEvent from "./BaseEvent";

export default interface DeviceUnregistered extends BaseEvent {
    type: 'device-unregistered';
    data: {
        deviceMacAddress: string;
    }
}