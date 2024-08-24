import Device from "../Entities/Device";
import BaseEvent from "./BaseEvent";

export default interface DeviceRegistered extends BaseEvent {
    type: 'device-registered';
    data: {
        device: Device;
    }
}