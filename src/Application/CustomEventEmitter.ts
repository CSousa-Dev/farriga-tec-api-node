import DeviceRegistered from "../Domain/Events/DeviceRegistered";
import DeviceUnregistered from "../Domain/Events/DeviceUnregistered";
import SensorMeasureEvent from "../Domain/Events/SensorMeasureEvent";

export type EventMap = {
    'device-registered': DeviceRegistered;
    'device-unregistered': DeviceUnregistered;
    'sensor-measure': SensorMeasureEvent;
};

export default abstract class CustomEventEmitter {
    abstract emit<K extends keyof EventMap>(event: K, data: EventMap[K]): boolean;
    abstract on<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void): this
    abstract off<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void): this
    abstract once<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void): this
}